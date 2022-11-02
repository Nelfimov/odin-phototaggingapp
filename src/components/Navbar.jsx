import React from 'react';
import propTypes from 'prop-types';
import '../styles/Navbar.css';

/**
 * Navbar
 * @param {Number} score
 * @return {JSX}
 */
const Navbar = ({score}) => {
  return (
    <div className='Navbar'>
      <h1>Where is Waldo</h1>
      <h2>Found: {score}/3</h2>
      <ul>
        <li><a href="https://github.com/nelfimov/">GitHub</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  score: propTypes.number,
};

export default Navbar;
