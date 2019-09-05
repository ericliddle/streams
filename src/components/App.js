import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/create' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
