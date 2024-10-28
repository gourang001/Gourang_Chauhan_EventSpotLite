import React, { useEffect, useState } from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);  
    setTimeout(onClose, 300);  
  };

  useEffect(() => {
    setIsClosing(false);  
  }, [event]);

  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className={`modal-content ${isClosing ? 'fade-out' : 'fade-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <img src={event.image} alt={event.name} className="modal-image" />
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;

