import React from 'react';
import { GiGreekTemple } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setToggleMenu(false), 500); // Cerrar el menú en dispositivos móviles después de 500ms
    }
  };

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.gericht} alt="app__logo" />
        </Link>
      </div>
      {location.pathname === '/' && (
        <>
          <ul className="app__navbar-links">
            <li className="p__opensans" onClick={() => handleScrollTo('home')}>Home</li>
            <li className="p__opensans" onClick={() => handleScrollTo('about')}>Sobre</li>
            <li className="p__opensans" onClick={() => handleScrollTo('menu')}>Servicios</li>
            <li className="p__opensans" onClick={() => handleScrollTo('awards')}>Proyectos</li>
            <li className="p__opensans" onClick={() => handleScrollTo('contact')}>Contacto</li>
          </ul>
          <div className="app__navbar-smallscreen">
            <GiGreekTemple color="#DCCA87" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <GiGreekTemple fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar-smallscreen_links">
                  <li onClick={() => handleScrollTo('home')}>Home</li>
                  <li onClick={() => handleScrollTo('about')}>Sobre</li>
                  <li onClick={() => handleScrollTo('menu')}>Menu</li>
                  <li onClick={() => handleScrollTo('awards')}>Proyectos</li>
                  <li onClick={() => handleScrollTo('contact')}>Contacto</li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;