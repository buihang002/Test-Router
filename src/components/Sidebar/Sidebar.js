import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/"><img src="https://fa-react-email-app.vercel.app/static/media/connect-logo-white.c4cdada4.svg" alt="Logo" /></Link>  
    
      </div>
      <div className={styles.tilte}>
      <ul>
        <li><Link to="/inbox">Inbox</Link></li>
        <li><Link to="/sent">Sent</Link></li>
        <li><Link to="/reminder">Reminder</Link></li>
        <li><Link to="/spam">Spam</Link></li>
        <li><Link to="/favorite">Favorite</Link></li>
        <li><Link to="/junks">Junks</Link></li>
        <li><Link to="/Drafts">Drafts</Link></li>

      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
