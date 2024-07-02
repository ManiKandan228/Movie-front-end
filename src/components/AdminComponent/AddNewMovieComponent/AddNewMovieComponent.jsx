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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovieInfo({
      ...movieInfo,
      [name]: value,
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
        window.location.href = '/admin';
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
      <h2>Add a New Movie</h2>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          name='movie_name'
          placeholder='Enter the Movie name'
          value={movieInfo.movie_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>ID Number</label>
        <input
          type='text'
          name='id'
          placeholder='Enter the ID Number'
          value={movieInfo.id}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Released Year</label>
        <input
          type='text'
          name='year'
          placeholder='Enter the Year'
          value={movieInfo.year}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre 1</label>
        <input
          type='text'
          name='genre1'
          placeholder='Enter Genre 1'
          value={movieInfo.genre1}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Genre 2</label>
        <input
          type='text'
          name='genre2'
          placeholder='Enter Genre 2'
          value={movieInfo.genre2}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>IMDB Rating</label>
        <input
          type='text'
          name='rating'
          placeholder='Enter the Rating'
          value={movieInfo.rating}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Synopsis</label>
        <input
          type='text'
          name='synopsis'
          placeholder='Enter the Synopsis'
          value={movieInfo.synopsis}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Upload Image</label>
        <input
          type='file'
          name='image'
          onChange={handleFileChange}
          required
        />
      </div>

      <div>
        <button type='submit'>Add Movie</button>
      </div>
    </form>
  );
};

export default AddNewMovieComponent;
