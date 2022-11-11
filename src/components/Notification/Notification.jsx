import React from 'react';
import propTypes from 'prop-types';
import useTimeout from '../hooks/useTimeout';
import '../../styles/Notification.css';

const Notification = (props) => {
  useTimeout(props.close, 5000);

  return (
    <div className="Notification">
      <div>{props.children}</div>
      <button onClick={props.close}>X</button>
    </div>
  );
};

Notification.propTypes = {
  close: propTypes.func,
  children: propTypes.any,
};

export default Notification;
