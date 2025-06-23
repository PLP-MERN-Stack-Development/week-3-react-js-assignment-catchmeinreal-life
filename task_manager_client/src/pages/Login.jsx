
/**To redirect a user after login in a React application.
 * */


import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//
import Navbar from '../components/Navbar';

//axios routes
import { userLogin, validate_Token } from '../services/api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const validateToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) return;  //stop here and dont send validation request

      try {
        const res = await validate_Token();

        if (res.ok) {
          setIsLoggedIn(true);
        } else {

          //token is invalid or expired
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error('Error validating token', error)
      }
    };

    validateToken()
  }, []);



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  
  const handleLogin = async (e) => {
    e.preventDefault();
    // Future: Call backend/auth API
    
    const res = await userLogin(form);
    if (res) {
      setIsLoggedIn(true);
    }
    
    console.log('server res', res.status);
  };

  return (
    <>
    {isLoggedIn && <Navigate to='/todos' replace />}
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f1e7] to-[#d8b08c] px-4">
      <form 
        onSubmit={handleLogin} 
        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-[#5e3c28] mb-6">Login</h2>

        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email" 
          autoComplete="user@email.com"
          className="w-full p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e3c28]"
          required
        />

        <input 
          type="password" 
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password" 
          autoComplete="new-password"
          className="w-full p-3 mb-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e3c28]"
          required
        />

        <button 
          type="submit"
          className="w-full bg-[#5e3c28] text-white p-3 rounded-xl font-semibold hover:bg-[#44291c] transition"
        >
          {isLoggedIn? 'Signing in...' : 'Sign in'}
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account? <Link to="/signup" className="text-[#5e3c28] font-medium hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
    </>
  );
}

export default Login;
