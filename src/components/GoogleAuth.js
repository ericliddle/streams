import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Redux/actions';

class GoogleAuth extends Component {
  //No that redux is handling state default state here is removed
  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '271512079997-ilj9cfvd51hk5cpjo7vrc9tc8ubb34d8.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    //When when calling isSignedIn we receive boolean and can use that as an argument as opposed to a callback
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    //Removing this.setState prevents state from being updated until state is wired through redux
    if (isSignedIn) {
      console.log(this.auth, 'here');
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOutClick}>
          <i className='google icon' />
          Log Out
        </button>
      );
    } else {
      return (
        <button className='ui red google button' onClick={this.onSignInClick}>
          <i className='google icon' />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return <div className='item'>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
