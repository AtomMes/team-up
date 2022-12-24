import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import ContactUsSection from './ContactUsSection/ContactUsSection';
import FooterSection from './FooterSection/FooterSection';
import styles from './Home.module.scss';
import IntroSection from './IntroSection/IntroSection';
import SolutionsSelction from './SolutionsSelction/SolutionsSelction';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className="white-bg">
        <IntroSection />
      </div>
      <SolutionsSelction />
      <AboutSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default Home;
