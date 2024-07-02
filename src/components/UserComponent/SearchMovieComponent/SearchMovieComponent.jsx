import React, { useState } from 'react';
import axios from 'axios';
import './SearchMovieComponent.css'; 

const SearchMovieComponent = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('movieName');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/api/v1/movies?${searchType}=${searchTerm}`);

      let filteredMovies = response.data;

      if (searchType === 'movieName') {
        filteredMovies = response.data.filter(movie => movie.movie_name.toLowerCase() === searchTerm.toLowerCase());
      } else if (searchType === 'genre') {
        filteredMovies = response.data.filter(movie =>
          movie.genre1.toLowerCase() === searchTerm.toLowerCase() ||
          movie.genre2.toLowerCase() === searchTerm.toLowerCase()
        );
      } else if (searchType === 'year') {
        filteredMovies = response.data.filter(movie => movie.year.toString() === searchTerm);
      }

      setMovies(filteredMovies);
    } catch (error) {
      console.log(error.message);
      setMovies([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input" // Add a class for styling
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="search-select" // Add a class for styling
      >
        <option value="movieName">Movie Name</option>
        <option value="genre">Genre</option>
        <option value="year">Year</option>
      </select>
      <button onClick={handleSearch} className="search-button">Search</button> {/* Add a class for styling */}
    </div>
  );
};

export default SearchMovieComponent;
