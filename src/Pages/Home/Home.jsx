import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import styles from './Home.module.scss';
import IntroSection from './IntroSection/IntroSection';
import SolutionsSelction from './SolutionsSelction/SolutionsSelction';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <IntroSection />
      <SolutionsSelction />
      <AboutSection />
    </div>
  );
};

export default Home;
