import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import NotificationProvider from
  './components/Notification/NotificationProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </React.StrictMode>,
);
