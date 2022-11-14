import React from 'react';
import propTypes from 'prop-types';
import snowThumbnail from '../images/snow.thumbnail.jpg';
import beachThumbnail from '../images/beach.thumbnail.jpg';
import '../styles/GameChoice.css';

const GameChoice = ({start}) => {
  return (
    <div className="GameChoice">
      <h1 className='title'>
        Welcome to WHERE IS WALDO game.
        <br />
        <br />
        Choose your gamefield below to start the game.
      </h1>
      <div className="choice">
        <div className="snow">
          <h2>Snow</h2>
          <img
            src={snowThumbnail}
            id="snow"
            alt="snow"
            className="thumbnail"
            onClick={start}/>
        </div>
        <div className="beach">
          <h2>Beach</h2>
          <img
            src={beachThumbnail}
            id="beach"
            alt="beach"
            className="thumbnail"
            onClick={start}/>
        </div>
      </div>
    </div>
  );
};

GameChoice.propTypes = {
  start: propTypes.func,
};

export default GameChoice;
