import React from 'react';
import s from './FooterSection.module.scss';
import insta from '../../../assets/images/insta.png';
import facebook from '../../../assets/images/facebook.png';
import linkedin from '../../../assets/images/linkedin.png';
import twitter from '../../../assets/images/twitter.png';
import whatsapp from '../../../assets/images/whatsapp.png';
import telegram from '../../../assets/images/telegram.png';
import viber from '../../../assets/images/viber.png';
import logo from '../../../assets/images/logo.png';

const FooterSection = () => {
  return (
    <div className={s.root}>
      <div className="container">
        <div className={s.container}>
          <div className={s.contacts}>
            <h1>Connect with Us</h1>
            <div className={s.contactLinks}>
              <a href="tel:+37494013739">0(00) 00-00-00</a>
              <a href="mailto:platoon@gmail.com">Platoon@gmail.com</a>
            </div>
          </div>
          <div className={s.socialLinks}>
            <h1>We are on social media</h1>
            <div className={s.socials}>
              <img src={insta} />
              <img src={facebook} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
          </div>
          <div className={s.messengerLinks}>
            <h1>We are on social media</h1>
            <div className={s.messengers}>
              <img src={whatsapp} />
              <img src={telegram} />
              <img src={viber} />
            </div>
          </div>
          <div className={s.logo}>
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
