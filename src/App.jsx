import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllMovieComponent from './components/UserComponent/GetAllMovieComponent/GetAllMovieComponent';
import SearchMovieComponent from './components/UserComponent/SearchMovieComponent/SearchMovieComponent';
import AdminHomePage from './components/AdminComponent/AdminHomePage';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="header">
        <h1>Movie Rating App</h1>
      </div>
      <Routes>
        <Route exact path='/' element={<GetAllMovieComponent />} />
        <Route path='/search' element={<SearchMovieComponent />} />
        <Route path='/admin/*' element={<AdminHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
