import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllMovieComponent from './components/GetAllMovieComponent/GetAllMovieComponent';
import AddNewMovieComponent from './components/AddNewMovieComponent/AddNewMovieComponent';
import EditMovieComponent from './components/EditMovieComponent/EditMovieComponent';
import DeleteMovieComponent from './components/DeleteMovieComponent/DeleteMovieComponent';
import SearchMovieComponent from './components/SearchMovieComponent/SearchMovieComponent';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="header">
        <h1>Movie Rating App</h1>
      </div>
      <div className="sidebar">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'menu-hidden' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/admin/add">Add Movie</Link>
          <Link to="/admin/edit">Edit Movie</Link>
          <Link to="/admin/delete">Delete Movie</Link>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<GetAllMovieComponent />}></Route>
          <Route path='/admin/add' element={<AddNewMovieComponent />}></Route>
          <Route path='/admin/edit' element={<EditMovieComponent />}></Route>
          <Route path='/admin/delete' element={<DeleteMovieComponent />}></Route>
          <Route path='/search' element={<SearchMovieComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
