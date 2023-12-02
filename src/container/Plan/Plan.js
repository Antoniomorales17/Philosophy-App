import React from 'react';
import Modal from 'react-modal';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Plan.css';

const PlanCard = ({ planItem: { imgUrl, title, subtitle }, onClick }) => (
  <div className="foto-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img src={imgUrl} alt={title} />
    <div className="card-content">
    <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  </div>
);

const Plan = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app__wrapper_plan">
      <h1 className="app__header-h1">Lo que hacemos</h1>
      <SubHeading title="Conócenos, ven y prueba la experiencia" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Atrévete a pensar
      </p>
      <div className="app__wrapper_img">
        {data.plan.map((planItem, index) => (
          <PlanCard key={index} planItem={planItem} onClick={() => openModal(index)} />
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
        <img src={data.plan[selectedImageIndex].imgUrl} alt={`foto-${selectedImageIndex}`} className="modal-image" />
        <h2>{data.plan[selectedImageIndex].title}</h2>
        <p>{data.plan[selectedImageIndex].subtitle}</p>
      </Modal>
    </div>
  );
};

export default Plan;
