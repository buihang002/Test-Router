import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ user, onLogout }) => {
  const location = useLocation();

  
  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.pathName}>
          <span><h3>Pathname: {location.pathname}</h3></span>
        </div>
        <div className={styles.userInfo}>
            <div className={styles.email}>
            <h3  >John</h3>
        <span >joh@gmail.com</span>
        </div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ptSvyhlI6mkEM1kkVUlqP15QN4_8MHg5uA&s' alt="Avatar" className={styles.avatar} />
        </div>
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
