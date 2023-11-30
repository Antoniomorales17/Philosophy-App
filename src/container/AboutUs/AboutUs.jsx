import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Sistema de enseñanza conocido por Lipman, el cual lleva el nombre de su creador y que consiste en un proyecto de filosofía para niños a través de narraciones y conversaciones filosóficas.</p>
        <Link to="/plan"> {/* Utiliza Link en lugar de <button> */}
          <button type="button" className="custom__button">Saber más</button>
        </Link>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <Link to="/plan"> {/* Utiliza Link en lugar de <button> */}
          <button type="button" className="custom__button">Saber más</button>
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
