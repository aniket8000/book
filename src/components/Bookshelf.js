import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ bookshelf }) => {
    return (
        <div className="bookshelf-container">
            <h2>My Bookshelf</h2>
            <div className="books-container">
                {bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>Book Title: {book.title}</h3>
                        <p>Edition Count: {book.edition_count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;
