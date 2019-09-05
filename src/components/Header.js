import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary point ing menu'>
      <Link className='item' to='/'>
        Streamer
      </Link>
      <div className='right menu'>
        <Link className='item' to='/'>
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
