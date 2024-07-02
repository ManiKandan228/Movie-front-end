import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-details">
          <img src={`http://localhost:3500/img/${movie._id}`} alt={`${movie.movie_name} Poster`} />
          <h2>{movie.movie_name}</h2>
          <p className="modal-rating">{movie.rating} <span className="star">★</span></p>
          <p className="modal-year">{movie.year}</p>
          <div className="modal-genres">
            <span className="genre">{movie.genre1}</span>
            <span className="genre">{movie.genre2}</span>
          </div>
          <p className="modal-synopsis">{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
