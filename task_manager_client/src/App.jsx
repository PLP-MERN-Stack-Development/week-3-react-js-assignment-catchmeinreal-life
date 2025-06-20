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

//auth pages
import Login from './pages/Login';
import Signup from './pages/Signup';
// import TaskManager from "./components/TaskManager";

function App() {
 

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todo />} />
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App; 