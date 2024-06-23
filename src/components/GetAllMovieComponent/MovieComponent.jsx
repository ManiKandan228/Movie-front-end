import React from 'react';

const MovieComponent = ({ movie }) => {
  return (
    <div className="card">
      <img src={`http://localhost:3500/img/${movie._id}`} alt={`${movie.movie_name} Poster`} />
      <div className="text-container">
        <h3>{movie.movie_name}</h3>
        <p className="status">{movie.genre1}</p>
        <p className="status">{movie.genre2}</p>
        <p className="status">{movie.rating}</p>
        <p className="status">{movie.year}</p>
        <p className="title">Synopsis</p>
        <p className="synopsis">{movie.synopsis}</p>
      </div>
    </div>
  );
};

export default MovieComponent;
