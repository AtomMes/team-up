import React from 'react';
import s from './ContactUsSection.module.scss';
import girl from '../../../assets/images/contact-girl.png';
import insta from '../../../assets/images/contact-insta.png';
import facebook from '../../../assets/images/contact-facebook.png';
import linkedin from '../../../assets/images/contact-linkedin.png';
import twitter from '../../../assets/images/contact-twitter.png';

const ContactUsSection = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.texts}>
          <div className={s.heading}>
            <h1>CONTACT US</h1>
          </div>
          <div className={s.contacts}>
            <a href="tel:+37494013739">0(00) 00-00-00</a>
            <a href="mailto:platoon@gmail.com">Platoon@gmail.com</a>
          </div>
          <div className={s.socials}>
            <h1>Social</h1>
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
