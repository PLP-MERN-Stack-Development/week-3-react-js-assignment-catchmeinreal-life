import { useState } from 'react';
import { Link } from 'react-router-dom';

//
import Navbar from '../components/Navbar';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt', form);
    // Future: Call backend/auth API
  };

  return (
    <>
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
          className="w-full p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e3c28]"
          required
        />

        <input 
          type="password" 
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password" 
          className="w-full p-3 mb-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e3c28]"
          required
        />

        <button 
          type="submit"
          className="w-full bg-[#5e3c28] text-white p-3 rounded-xl font-semibold hover:bg-[#44291c] transition"
        >
          Sign In
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
