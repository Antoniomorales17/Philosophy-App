import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">¿Te gusta la correspondencia?</h1>
      <p className="p__opensans">Si te gusta este cuento, cuando saque algo, te aviso, ¿vale? Puede ser un poema, una charla, un taller o un video que te haga pensar</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Pon tu correo electrónico" />
      <button type="button" className="custom__button">Suscríbete</button>
    </div>
  </div>
);

export default Newsletter;