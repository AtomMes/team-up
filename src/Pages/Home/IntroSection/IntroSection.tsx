import React from 'react';
import s from './IntroSection.module.scss';
import people from '../../../assets/images/Pages/Home/intro/people.png';
import scroll from '../../../assets/images/Pages/Home/intro/scroll.png';
import { Link as ScrollLink } from 'react-scroll';

const IntroSection: React.FC = () => {
  return (
    <div className="container">
      <div className={s.root} id="intro">
        <div className={s.container}>
          <div className={s.description}>
            <h1>Welcome to PLATOON</h1>
            <p>
              We offer team building activities to improve teamwork, communication, and problem
              solving skills. Let us help your team reach its full potential and succeed.
            </p>
            <button>
              <span>Try for free</span>
            </button>
          </div>
          <ScrollLink to="solutions" spy={true} smooth={true} offset={-120} duration={500}>
            <img src={scroll} className={s.scroll} />
          </ScrollLink>
          <img src={people} className={s.people} />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
