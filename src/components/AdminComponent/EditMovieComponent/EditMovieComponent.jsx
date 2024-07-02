import React, { useState } from 'react';
import './EditMovieComponent.css';
import axios from 'axios';

const EditMovieComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    id: '',
    movie_name: '',
    year: '',
    genre1: '',
    genre2: '',
    rating: '',
    synopsis: ''
  });

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
  const idValidator = () => {
    axios.post(`http://localhost:3500/api/v1/movies/validate`,{id: movieInfo.id})
    .then((response)=>
    {
      setMovieInfo({
        id:response.data.id,
        movie_name:response.data.movie_name,
        year:response.data.year,
        genre1:response.data.genre1,
        genre2:response.data.genre2,
        rating:response.data.rating,
        synopsis:response.data.synopsis
      })
    })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()
    axios.patch(`http://localhost:3500/api/v1/movies/`,movieInfo)
    .then((response)=>
      {
        alert(`${movieInfo.movie_name} is updated successfully`)
        window.location.href = '/admin'
        console.log(response)
      })
      .catch((error)=>
      {
        if(error.response)
        {
          alert(`Status ${error.response.status} - ${error.response.message}`)
        }
        console.log(error)
      })
  };



  const { id,movie_name,year,genre1,genre2,rating,synopsis} = movieInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating Movies details</h2>

      <div className='form-group'>
        <label>ID Number</label>
        <input
          type='text'
          placeholder='Enter the id Number'
          value={id}
          onChange={IDHandler}
          required
        />
      </div>

      <div>
        <button onClick={idValidator}>Check</button>
      </div>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          placeholder='Enter the Movie name'
          value={movie_name}
          onChange={movieNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>ID Number</label>
        <input
          type='text'
          placeholder='Enter the id Number'
          value={id}
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
          value={year}
          onChange={yearHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre-1</label>
        <input
          type='text'
          placeholder='Enter the genre-1'
          value={genre1}
          onChange={genre1Handler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre-2</label>
        <input
          type='text'
          placeholder='Enter the genre-2'
          value={genre2}
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
          value={rating}
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
          value={synopsis}
          onChange={synopsisHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Edit</button>
      </div>
    </form>
  );
};

export default EditMovieComponent;

