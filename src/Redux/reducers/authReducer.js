//Using {} instead of true, false, null there will be an additional property added later
//Initializer such as isSingedIn

const INITIAL_STATE = {
  isSignedIn: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
