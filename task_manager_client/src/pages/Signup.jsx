import { useState } from 'react';
import { Link } from 'react-router-dom';

//
import Navbar from '../components/Navbar';

//axios routes
import { userSignup } from '../services/api';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Future: Send to backend/signup logic
    const res = await userSignup(form);

    console.log('Signup response:', res.data);
    console.log('server up and running::' ,res.data);
    // console.log('server res', res.data);

  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f1e7] to-[#d8b08c] px-4">
      <form 
        onSubmit={handleSignup} 
        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-[#5e3c28] mb-6">Create Account</h2>

        <input 
          type="text" 
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name" 
          autoComplete="user"
          className="w-full p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5e3c28]"
          required
        />

        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email" 
          autoComplete="use@email.com"
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
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account? <Link to="/login" className="text-[#5e3c28] font-medium hover:underline">Log in</Link>
        </p>
      </form>
    </div>
    </>
  );
}

export default Signup;
