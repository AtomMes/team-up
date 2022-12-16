import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>LOGO</span>
        </div>
        <div className={styles.navLinks}>
          <span>Home</span>
          <span>Solutions</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className={styles.loginSignup}>
          <div className={styles.login}>
            <span>Login</span>
          </div>
          <div className={styles.signUp}>
            <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
