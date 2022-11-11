import React, {useState, useMemo} from 'react';
import propTypes from 'prop-types';
import {createPortal} from 'react-dom';
import NotificationContext from './NotificationContext';
import Notification from './Notification';

const NotificationProvider = (props) => {
  const [notifications, setNotifications] = useState([]);

  const open = (content) =>
    setNotifications((currentNotifications) => [
      ...currentNotifications,
      {id: Math.random(), content},
    ]);

  const close = (id) =>
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.id !== id),
    );

  const contextValue = useMemo(() => ({open}), []);

  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
          <div className="notification-wrapper">
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                close={() => close(notification.id)}>
                {notification.content}
              </ Notification>
            ))}
          </div>,
          document.body,
      )}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: propTypes.any,
};

export default NotificationProvider;
