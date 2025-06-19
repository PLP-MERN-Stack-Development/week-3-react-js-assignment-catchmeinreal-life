/**for the page routing */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from 'react';
import './App.css';  //tailwind css

// Import your components here
// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';

//pages
import Home from './pages/Home'
import Todo from './pages/TodoPage'
import About from './pages/About'
// import TaskManager from "./components/TaskManager";

function App() {
 

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todo />} />
        <Route path='/About' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App; 