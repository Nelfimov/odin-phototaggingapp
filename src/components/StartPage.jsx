import React from 'react';
import propTypes from 'prop-types';
import '../styles/StartPage.css';

const StartPage = ({start}) => {
  return (
    <div className="StartPage">
      <h1 className='title'>
        Welcome to WHERE IS WALDO game.<br/>Press button below to start
      </h1>
      <button type='button' onClick={start}>Start</button>
    </div>
  );
};

StartPage.propTypes = {
  start: propTypes.func,
};

export default StartPage;
