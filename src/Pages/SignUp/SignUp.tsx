import React from 'react';
import s from './SignUp.module.scss';
import facebook from '../../assets/images/Pages/Login/facebook.png';
import gmail from '../../assets/images/Pages/Login/gmail.png';
import linkedin from '../../assets/images/Pages/Login/linkedin.png';
import email from '../../assets/images/Pages/Login/email.png';
import lock from '../../assets/images/Pages/Login/lock.png';
import people from '../../assets/images/Pages/Login/people-registration.png';
import stars from '../../assets/images/Pages/Login/stars-registration.png';
import user from '../../assets/images/Pages/Login/user.png';

const SignUp: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.registrationFormWrapper}>
          <div className={s.registrationForm}>
            <div className={s.heading}>
              <h1>Create an account</h1>
            </div>
            <div className={s.socials}>
              <img src={facebook} />
              <img src={gmail} />
              <img src={linkedin} />
            </div>
            <div className={s.form}>
              <a className={s.useEmail}>or use your email for registration</a>
              <div className={s.inputs}>
                <div className={s.nameInput}>
                  <div className={s.nameInputContainer}>
                    <img src={user} />
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className={s.registrationInput}>
                  <div className={s.registrationInputContainer}>
                    <img src={email} />
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
                <div className={s.passwordInput}>
                  <div className={s.passwordInputContainer}>
                    <img src={lock} />
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
              </div>
              <button className={s.registrationBtn}>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className={s.designPart}>
          <img src={stars} className={s.stars} />
          <img src={people} className={s.people} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
