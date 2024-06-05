import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookSearch.css';

const BookSearch = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then(response => {
                    setBooks(response.data.docs);
                })
                .catch(error => {
                    console.error("Error fetching the books: ", error);
                });
        }
    }, [query]);

    return (
        <div className="search-container">
            <h2>Search by book name:</h2>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a book name"
            />
            <div className="books-container">
                {books.map(book => (
                    <div key={book.key} className="book-card">
                        <h3>Book Title: {book.title}</h3>
                        <p>Edition Count: {book.edition_count}</p>
                        <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
