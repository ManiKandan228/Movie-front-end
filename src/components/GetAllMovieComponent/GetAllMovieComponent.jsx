import React, { useEffect, useState } from 'react';
import './GetAllMovieComponent.css';
import MovieComponent from './MovieComponent';
import axios from 'axios';
import SearchMovieComponent from '../SearchMovieComponent/SearchMovieComponent'

const GetAllMovieComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/api/v1/movies')
      .then((response) => {
        const sortedMovies = response.data.sort((a, b) => a.id - b.id);
        setMovies(sortedMovies);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="container">
      <SearchMovieComponent setMovies={setMovies} />
      <div className="movie">
        {movies && movies.map((iterator) =>
          <MovieComponent movie={iterator} key={iterator._id} />
        )}
      </div>
    </div>
  );
};

export default GetAllMovieComponent;
