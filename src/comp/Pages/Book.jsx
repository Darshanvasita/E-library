import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div
            className="book-card"
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`)} // Navigate to Book Details
          >
            <img src={book.url} alt={book.title} className="book-image" />
            <div className="book-details">
              <h3>{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
