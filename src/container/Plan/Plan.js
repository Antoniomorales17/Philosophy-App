import React, { useState } from 'react';
import Modal from 'react-modal';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Plan.css';

const Plan = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fotos = [
    images.plan,
    images.plan2,
    images.plan3,
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    // Agrega más imágenes según sea necesario
  ];

  return (
    <div className="app__wrapper_plan">
      <h1 className="app__header-h1">Lo que hacemos</h1>
      <SubHeading title="Conócenos, ven y prueba la experiencia" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Atrévete a pensar
      </p>
      <div className="app__wrapper_img">
        {fotos.map((foto, index) => (
          <div key={index} className="foto-card" onClick={() => openModal(index)} style={{ cursor: 'pointer' }}>
            <img src={foto} alt={`foto-${index}`} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <img src={fotos[selectedImageIndex]} alt={`foto-${selectedImageIndex}`} className="modal-image" />
      </Modal>
    </div>
  );
};

export default Plan;
