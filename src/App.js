import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState(
        JSON.parse(localStorage.getItem('bookshelf')) || []
    );

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Search Books</Link>
                    <Link to="/bookshelf">My Bookshelf</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />
                    <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
