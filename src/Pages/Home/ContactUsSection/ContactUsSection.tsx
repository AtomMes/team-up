import React from 'react';
import s from './ContactUsSection.module.scss';
import girl from '../../../assets/images/Pages/Home/contactUs/girl.png';
import insta from '../../../assets/images/Pages/Home/contactUs/insta.png';
import facebook from '../../../assets/images/Pages/Home/contactUs/facebook.png';
import linkedin from '../../../assets/images/Pages/Home/contactUs/linkedin.png';
import twitter from '../../../assets/images/Pages/Home/contactUs/twitter.png';

const ContactUsSection: React.FC = () => {
  return (
    <div className={s.root} id="contact">
      <div className={s.container}>
        <div className={s.texts}>
          <div className={s.heading}>
            <h1 style={{ margin: '20px 0' }}>CONTACT US</h1>
          </div>
          <div className={s.contacts}>
            <a href="tel:+37494013739">0(00) 00-00-00</a>
            <a href="mailto:platoon@gmail.com">Platoon@gmail.com</a>
          </div>
          <div className={s.socials}>
            <h1 style={{ margin: '20px 0' }}>Social</h1>
            <div className={s.socialLinks}>
              <img src={insta} />
              <img src={facebook} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
          </div>
        </div>
        <div className={s.image}>
          <img src={girl} />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
