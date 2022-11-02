import React from 'react';
import propTypes from 'prop-types';

const ContextContainer = ({charactersList}) => {
  return (
    <div className='ContextContainer'>
      <ul>
        {charactersList.map((item) =>
          <li key={item.name}>{item.name}</li> )}
      </ul>
    </div>
  );
};

ContextContainer.propTypes = {
  charactersList: propTypes.arrayOf(propTypes.shape),
};

export default ContextContainer;
