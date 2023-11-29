import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Filósofo y docente" />
      <h1 className="headtext__cormorant">En lo que creemos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Oráculo de la pluma, verdugo de palabras. De noche, soy poeta, cuentacuentos, escritor y consultor filosófico. De día, psicopedagogo y maestro de filosofía .</p>
        </div>
        <p className="p__opensans"> “A veces no soy yo, simplemente soy lo que debo ser. Y pediría disculpas, pero soy en lo que me habéis convertido, soy producto de gente que a veces ni es, ni lo fueron. ¿Quieren saber quién soy? </p>
      </div>

      <div className="app__chef-sign">
        <p>JuanMo Giménez</p>
        <p className="p__opensans">Profesor y filósofo</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;