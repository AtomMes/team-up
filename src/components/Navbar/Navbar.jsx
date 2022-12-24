import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/images/Pages/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} />
          </div>
        </Link>
        <div className={styles.navLinks}>
          {location.pathname === '/' && (
            <>
              <ScrollLink to="intro" spy={true} smooth={true} offset={-120} duration={500}>
                Home
              </ScrollLink>
              <ScrollLink to="solutions" spy={true} smooth={true} offset={-120} duration={500}>
                Solutions
              </ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}>
                About Us
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                Contact Us
              </ScrollLink>
            </>
          )}
        </div>
        <div className={styles.loginSignup}>
          <div className={styles.login}>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
          <div className={styles.signUp}>
            <Link to="/register">
              <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
