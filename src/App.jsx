import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Signin from './comp/Pages/Signin';
import Header from './comp/layout/Header';
import Home from './comp/Pages/Home';
import Book from './comp/Pages/Book';
import About from './comp/Pages/About';
import Footer from './comp/layout/Footer';
import BookDetails from './comp/Pages/BookDetails';
import BookEdit from './comp/Pages/BookEdit';


function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Book" element={<Book/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/SignIn" element={<Signin/>} />
          <Route path="/books/:id" element={<BookDetails/>} />
          <Route path="/books/:id/edit" element={<BookEdit />} />
        </Routes>
        <Footer/>
      </Router >
    </>
  )
}

export default App
