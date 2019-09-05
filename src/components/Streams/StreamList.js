import React from 'react';
import { Link } from 'react-router-dom';

const StreamList = () => {
  return (
    <div>
      <Link to='/'>StreamList</Link>
      <Link to='/streams/show'>StreamShow</Link>
      <Link to='/streams/create'>StreamCreate</Link>
      <Link to='/streams/edit'>StreamEdit</Link>
      <Link to='/streams/delete'>StreamDelete</Link>
    </div>
  );
};

export default StreamList;
