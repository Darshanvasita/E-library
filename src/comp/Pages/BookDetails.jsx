import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      alert("Book deleted successfully!");
      navigate("/"); // Redirect back to book list
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5  mb-4">
      <div className="row">
        <div className="col-md-6">
          <img src={book.url} alt={book.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <div className="book-details">
            <h2>{book.title}</h2>
            <p className="ext-secondary-emphasis  "> <span> <strong>Author:</strong> {book.author}</span>   |  <span><strong>Genre:</strong> {book.genre}</span></p>
           
            <p> <strong>Description:</strong>  {book.description}</p>

            <button onClick={() => navigate(`/books/${id}/edit`)} className="btn btn-outline-primary  my-2 mt-2">
              Edit Book
            </button>
            <button onClick={handleDelete} className="btn btn-outline-warning ml-2 mx-2">
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
