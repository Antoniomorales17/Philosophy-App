import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctanos</h1>
        <p className="p__opensans">
           Almería, Coslada 20, España</p>
        <p className="p__opensans">+34 647664536</p>
        <p className="p__opensans">+34 683022342</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Un atardecer, subí a una atalaya y me até una soga del pie para quedar suspendido meditando hasta que despierte la realidad. En fin, una vida intensa.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">18:00 am - 22:00 am</p>
        <p className="p__opensans">Sábado-Domingo:</p>
        <p className="p__opensans">10:00 am - 12:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Antonio Morales</p>
    </div>

  </div>
);

export default Footer;