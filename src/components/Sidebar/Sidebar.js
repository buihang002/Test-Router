import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
          <img src="https://fa-react-email-app.vercel.app/static/media/connect-logo-white.c4cdada4.svg" alt="Logo" />
    
      </div>
      <ul>
        <li><Link to="/inbox">Inbox</Link></li>
        <li><Link to="/sent">Sent</Link></li>
        <li><Link to="/reminder">Reminder</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
