import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddNewMovieComponent from '../AdminComponent/AddNewMovieComponent/AddNewMovieComponent';
import EditMovieComponent from '../AdminComponent/EditMovieComponent/EditMovieComponent';
import DeleteMovieComponent from '../AdminComponent/DeleteMovieComponent/DeleteMovieComponent';
import GetAllMovieComponent from '../AdminComponent/GetAllMovieComponent/GetAllMovieComponent';

const AdminHomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleHover = () => {
        setMenuOpen(true);
    };

    const handleLeave = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <div className="sidebar">
                <div className="hamburger" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={`nav-menu ${menuOpen ? 'menu-open' : ''}`}>
                    <Link to="/admin" onClick={toggleMenu}>Home</Link>
                    <Link to="/admin/add" onClick={toggleMenu}>Add Movie</Link>
                    <Link to="/admin/edit" onClick={toggleMenu}>Edit Movie</Link>
                    <Link to="/admin/delete" onClick={toggleMenu}>Delete Movie</Link>
                </nav>
            </div>
            <div className="container">
                <Routes>
                    <Route path='/' element={<GetAllMovieComponent isAdmin={true} />} />
                    <Route path='/add' element={<AddNewMovieComponent />} />
                    <Route path='/edit' element={<EditMovieComponent />} />
                    <Route path='/delete' element={<DeleteMovieComponent />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminHomePage;
