import React, { useState } from 'react';
import './AddNewMovieComponent.css';
import axios from 'axios';

const AddNewMovieComponent = () => {
  const [img, setImg] = useState(null);
  const [movieInfo, setMovieInfo] = useState({
    id: '',
    movie_name: '',
    year: '',
    genre1: '',
    genre2: '',
    rating: '',
    synopsis: ''
  });

  const handleFileChange = (event) => {
    setImg(event.target.files[0]);
  };

  const IDHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      id: event.target.value,
    });
  };

  const movieNameHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      movie_name: event.target.value,
    });
  };

  const yearHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      year: event.target.value,
    });
  };

  const genre1Handler = (event) => {
    setMovieInfo({
      ...movieInfo,
      genre1: event.target.value,
    });
  };

  const genre2Handler = (event) => {
    setMovieInfo({
      ...movieInfo,
      genre2: event.target.value,
    });
  };

  const ratingHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      rating: event.target.value,
    });
  };

  const synopsisHandler = (event) => {
    setMovieInfo({
      ...movieInfo,
      synopsis: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', img);
    for (const key in movieInfo) {
      formData.append(key, movieInfo[key]);
    }

    axios.post('http://localhost:3500/api/v1/movies', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        alert(`${response.data.data.movie_name} is added successfully`);
        window.location.href = '/';
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.data}`);
        } else {
          alert(`Error: ${error.message}`);
        }
      });
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new Movie</h2>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          placeholder='Enter the Movie name'
          value={movieInfo.movie_name}
          onChange={movieNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>ID Number</label>
        <input
          type='text'
          placeholder='Enter the id Number'
          value={movieInfo.id}
          onChange={IDHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Released Year</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the Year'
          value={movieInfo.year}
          onChange={yearHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre-1</label>
        <input
          type='text'
          placeholder='Enter the genre-1'
          value={movieInfo.genre1}
          onChange={genre1Handler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre-2</label>
        <input
          type='text'
          placeholder='Enter the genre-2'
          value={movieInfo.genre2}
          onChange={genre2Handler}
          required
        />
      </div>

      <div className='form-group'>
        <label>IMDB Rating</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the rating'
          value={movieInfo.rating}
          onChange={ratingHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Synopsis</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the Synopsis'
          value={movieInfo.synopsis}
          onChange={synopsisHandler}
          required
        />
      </div>

      <div>
        <h1>Upload Image</h1>
        <input onChange={handleFileChange} type='file' name='image' />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewMovieComponent;
