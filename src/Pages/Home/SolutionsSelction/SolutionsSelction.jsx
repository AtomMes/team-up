import React from 'react';
import s from './SolutionsSelction.module.scss';
import headingVector from '../../../assets/images/Pages/Home/solutions/vector.png';
import one from '../../../assets/images/Pages/Home/solutions/one.png';
import two from '../../../assets/images/Pages/Home/solutions/two.png';
import three from '../../../assets/images/Pages/Home/solutions/three.png';

import vectorBottom from '../../../assets/images/Pages/Home/solutions/vector-bottom.png';

const SolutionsSelction = () => {
  return (
    <div className="container">
      <div className={s.root} id="solutions">
        <div className={s.container}>
          <div className={s.heading}>
            <img src={headingVector} />
            <h1>SOLUTIONS</h1>
          </div>
          <div className={s.cardWrapper}>
            <div className={s.cardContainer}>
              <img src={one} />
              <div className={s.card}>
                <p>
                  Develop problem-solving skills: Through the use of interactive games and
                  problem-solving activities, teams can learn to identify and solve problems more
                  effectively, which can help them to tackle challenges more successfully in the
                  future.
                </p>
              </div>
            </div>
            <div className={s.cardContainer}>
              <img src={two} />

              <div className={s.card}>
                <p>
                  Increase engagement and motivation: Online team building activities can be fun and
                  engaging, which can help to increase motivation and morale among team members.
                  This can make teams more enthusiastic and committed to their work.
                </p>
              </div>
            </div>
            <div className={s.cardContainer}>
              <img src={three} />
              <div className={s.card}>
                <p>
                  Enhance virtual collaboration: In today's increasingly digital world, many teams
                  are working remotely or across different locations. Online team building
                  activities can help these teams to improve their ability to collaborate
                  effectively in a virtual setting.
                </p>
              </div>
            </div>
          </div>
          <div className={s.vectorBottom}>
            <img src={vectorBottom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSelction;
