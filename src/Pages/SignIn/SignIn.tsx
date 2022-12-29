import React from 'react';
import s from './SignIn.module.scss';
import facebook from '../../assets/images/Pages/Login/facebook.png';
import gmail from '../../assets/images/Pages/Login/gmail.png';
import linkedin from '../../assets/images/Pages/Login/linkedin.png';
import email from '../../assets/images/Pages/Login/email.png';
import lock from '../../assets/images/Pages/Login/lock.png';
import people from '../../assets/images/Pages/Login/people.png';
import stars from '../../assets/images/Pages/Login/stars.png';

const SignIn: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.loginFormWrapper}>
          <div className={s.loginForm}>
            <div className={s.heading}>
              <h1>Sign In to PLATOON</h1>
            </div>
            <div className={s.socials}>
              <img src={facebook} />
              <img src={gmail} />
              <img src={linkedin} />
            </div>
            <div className={s.form}>
              <a className={s.useEmail}>or use your email account</a>
              <div className={s.inputs}>
                <div className={s.loginInput}>
                  <div className={s.loginInputContainer}>
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
              <a className={s.forgotPass}>
                Forgot your password?
                <hr />
              </a>
              <button className={s.loginBtn}>LOGIN</button>
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

export default SignIn;
