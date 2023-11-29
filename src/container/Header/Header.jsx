import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Pensamos y luego hablamos" />
      <h1 className="app__header-h1">Una forma de pensar</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>La competencia de enseñar a pensar.El pensamiento complejo en el siglo XXI </p>
      <button type="button" className="custom__button">Explorar</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;