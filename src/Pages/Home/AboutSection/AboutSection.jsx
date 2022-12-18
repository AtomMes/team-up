import React from 'react';
import s from './AboutSection.module.scss';
import people from '../../../assets/images/about-us-people.png';
import headingVector from '../../../assets/images/about-us-vector.png';
const AboutSection = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.texts}>
          <img src={headingVector} />
          <h1>ABOUT US</h1>
          <p>
            Platoon offers a platform for online teambuilding through interactive games, thus
            promoting teamwork, collaboration and communication.
          </p>
          <p>
            It is designed for businesses, teams, organizations, schools and other groups that want
            to foster a more connected environment.
          </p>
        </div>
        <div className={s.people}>
          <img src={people} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
