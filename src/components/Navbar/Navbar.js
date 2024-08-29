import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import users from '../../data/users.json';
import styles from './Navbar.module.css';

const Navbar = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setUser(users[0]);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.pathName}>
          <span>Pathname: {location.pathname}</span>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.email}>
            <h3>{user?.name || 'Loading...'}</h3>
            <span>{user?.email || 'Loading...'}</span>
          </div>
          {user && (
            <img 
              src={user.avatarUrl} 
              alt="Avatar" 
              className={styles.avatar} 
            />
          )}
        </div>
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
