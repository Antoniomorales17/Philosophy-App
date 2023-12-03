import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Almería, La Resistencia, 04007</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horario de consultas</p>
        <p className="p__opensans">L - V: 18:00 am - 22:00 am</p>
        <p className="p__opensans">S - D: 10:00 am - 12:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;