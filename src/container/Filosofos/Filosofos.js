import React, { useState } from 'react';
import Modal from 'react-modal';
import { images } from '../../constants';
import './Filosofos.css';
import { SubHeading } from '../../components';

const Filosofos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const botonCerrarStyle = {
    background: 'var(--color-black)',
    color: 'var(--color-white)',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const fotos = [
    images.filo1,
    images.filo2,
    images.filo3,
    images.filo4,
    images.filo5,
    images.filo9,
    images.filo10,
    images.filo11,
    images.filo12,
    images.filo13,
    images.filo14,
    images.filo15,
    images.filo16,
    images.filo17,
    images.filo18,
    images.filo19,
  ];

  const openModal = (index) => {
    setSelectedImage(fotos[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="app__wrapper_filo">
      <h1 className="app__header-h1">Referentes y célebres filósofos</h1>
      <SubHeading title="Siempre es bueno conocerl@s" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        No seríamos la sociedad de hoy si no fuera gracias a ellos
      </p>
      <div className="app__wrapper_img">
        {fotos.map((foto, index) => (
          <div key={index} className="foto-card" onClick={() => openModal(index)} style={{ cursor: 'pointer' }}>
            <img src={foto} alt={`foto-${index}`} />
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Imagen en detalle">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Detalle"
            style={{
              width: '100%',
              maxWidth: '800px', // Ajusta según sea necesario
              height: 'auto',
              objectFit: 'contain',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
            }}
          />
        )}
        <button onClick={closeModal} style={botonCerrarStyle}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default Filosofos;
