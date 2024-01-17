import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom"
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
      
      <ul>
        <li>
      <Link to="/books" >books</Link></li>
        <li>
          <Link to="/Add" >Add books</Link>
          </li>
          <li>
          <Link to="/" >Home</Link>
          </li>
          <li>
          <Link to="/Update" >Update</Link>
          </li>
          </ul>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/Update' element={<Update />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
