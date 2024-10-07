import React, { useState } from "react";
import axios from "axios";
import "./about.css"; 

const AboutPage = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  // const Done =()=>{
  //   alert("Book Has Been Added✔️")

  // }
  const handleInputChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/books", bookData);
      alert("Book added successfully!");
      setBookData({
        title: "",
        author: "",
        genre: "",
        description: "",
        url:""
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="about-page-container">
      <div className="about-info">
        <img
          src="https://teespring-storecontent.s3.amazonaws.com/f7OprVvgUIBlpDkvS6c3Ig_store_banner_image?1493995341611"
          alt="About us"
          className="about-image rounded-5"
        />
        <div className="about-text text-black">
          <h2>About Our Library</h2>
          <p>
            Welcome to our e-library, a place where you can explore a vast
            collection of books across various genres. We aim to provide a
            seamless reading experience for all book lovers.
          </p>
        </div>
      </div>

      <div className="add-book-form">
        <h3 className="text-cente text-secondary"> New Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Book Title:</label>
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
               className="form-control"
              name="author"
              value={bookData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
               className="form-control"
              name="genre"
              value={bookData.genre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
               className="form-control"
              name="description"
              value={bookData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Cover  Image(Url):</label>
            <input
              type="text"
               className="form-control"
              id="url"
              name="url"
              value={bookData.url}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit"  className="btn btn-outline-warning ">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
