import React, { useState } from 'react';
import './MovieComponent.css';
import ModalComponent from './ModalComponent';

const MovieComponent = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img src={`http://localhost:3500/img/${movie._id}`} alt={`${movie.movie_name} Poster`} />
        <div className="overlay">
          <div className="text-container">
            <h3>{movie.movie_name}</h3>
            <div className="details">
              <p className="release-date">{movie.year}</p>
              <p className="rating">{movie.rating} <span className="star">★</span></p>
            </div>
            <div className="genres">
              <span className="genre">{movie.genre1}</span>
              <span className="genre">{movie.genre2}</span>
            </div>
            {/* <p className="synopsis">{movie.synopsis}</p> */}
          </div>
        </div>
      </div>
      {isModalOpen && <ModalComponent movie={movie} onClose={handleCloseModal} />}
    </>
  );
};

export default MovieComponent;
