import React, { useState } from 'react';
import './DeleteMovieComponent.css'
import axios from 'axios';

const DeleteMovieComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    id: '',
    movie_name: '',
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


  const idValidator = () => {
    axios.post(`http://localhost:3500/api/v1/movies/validate`,{id: movieInfo.id})
    .then((response)=>
    {
      setMovieInfo({
        id:response.data.id,
        movie_name:response.data.movie_name,
      })
    })
    .catch(error => {
      if (error.response) {
        alert(`Status ${error.response.status} - ${error.response.message}`)
      }
    })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()
    axios
    .delete(`http://localhost:3500/api/v1/movies/`,{data:movieInfo})
    .then((response)=>
      {
        alert(`${movieInfo.movie_name} is deleted successfully`)
        window.location.href = '/admin'
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



  const { id,movie_name} = movieInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Deleting Movies details</h2>

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

      <div>
        <button type='submit'>Delete</button>
      </div>
    </form>
  );
};

export default DeleteMovieComponent