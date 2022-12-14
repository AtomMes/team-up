import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.bgImg} src={require(`../assets/images/orange-bg-ball.png`)} />
      <img className={styles.scrollImg} src={require(`../assets/images/more-scroll.png`)} />
      <div className={styles.container}>
        <img className={styles.stars} src={require(`../assets/images/illustration-stars.png`)} />

        <div className={styles.texts}>
          <div className={styles.heading}>
            <h1>IMAGINE A PLACE</h1>
          </div>
          <div className={styles.description}>
            <p>
              Where you can belong to a school club or a worldwide art community. Where just you and
              a handful of friends can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </div>
          <div className={styles.button}>
            <button>Try For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
