import React from 'react';
import styles from './Home.module.scss';
import IntroSection from './IntroSection/IntroSection.tsx';
import SolutionsSelction from './SolutionsSelction/SolutionsSelction.tsx';
import AboutSection from './AboutSection/AboutSection.tsx';
import ContactUsSection from './ContactUsSection/ContactUsSection.tsx';
import FooterSection from './FooterSection/FooterSection.tsx';

const Home: React.FC = () => {
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
