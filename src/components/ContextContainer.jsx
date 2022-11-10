import React from 'react';
import propTypes from 'prop-types';
import '../styles/ContextContainer.css';

/**
 * Pop up on left click on gameboard
 * @param {Array.<Object>} charactersList array of characters to find
 * @return {JSX} JSX
 */
const ContextContainer = ({charactersList, handleClick, anchor}) => {
  return (
    <div
      style={{top: anchor.y, left: anchor.x}}
      className='ContextContainer'>
      <ul>
        {charactersList.map((item) =>
          <li key={item.name} onClick={handleClick}>
            {item.name}
          </li> )}
      </ul>
    </div>
  );
};

ContextContainer.propTypes = {
  charactersList: propTypes.arrayOf(propTypes.shape),
  handleClick: propTypes.func,
  hidden: propTypes.bool,
  anchor: propTypes.object,
};

export default ContextContainer;
