import React from 'react';
import s from './IntroSection.module.scss';
import people from '../../../assets/images/intro-section-people.png';
import scroll from '../../../assets/images/scroll.png';
const IntroSection = () => {
  return (
    <div className="container">
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.description}>
            <h1>IMAGINE A PLACE</h1>
            <p>
              Where you can belong to a school club or a worldwide art community. Where just you and
              a handful of friends can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <button>Try for free</button>
          </div>
          <img src={scroll} className={s.scroll} />
          <img src={people} className={s.people} />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
