import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Simulated profile details (replace with real auth/user context in future)
  const userProfile = {
    name: 'Eric M.',
    email: 'eric@mochatasks.com',
    avatar: 'https://i.pravatar.cc/40?img=3', // Placeholder avatar
  };

  const isTodosPage = location.pathname.startsWith('/todos');

  return (
    <nav className="bg-[#3E2723] text-white px-6 py-4 shadow-md flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight">
        Mocha<span className="text-[#D7CCC8]">Tasks</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-[#BCAAA4]">Home</Link>
        <Link to="/todos" className="hover:text-[#BCAAA4]">Tasks</Link>
        <Link to="/about" className="hover:text-[#BCAAA4]">About</Link>
      </div>

      {/* Show Profile Info if on /todos */}
      {isTodosPage && (
        <div className="hidden md:flex items-center space-x-3">
          <img 
            src={userProfile.avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-[#BCAAA4]"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold">{userProfile.name}</p>
            <p className="text-[#D7CCC8]">{userProfile.email}</p>
          </div>
        </div>
      )}

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#4E342E] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-40">
          <Link to="/" className="hover:text-[#D7CCC8]">Home</Link>
          <Link to="/todos" className="hover:text-[#D7CCC8]">Tasks</Link>
          <Link to="/about" className="hover:text-[#D7CCC8]">About</Link>

          {/* Show Profile on Mobile if /todos */}
          {isTodosPage && (
            <div className="mt-4 text-center">
              <img 
                src={userProfile.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full mx-auto border-2 border-[#BCAAA4]"
              />
              <p className="font-semibold">{userProfile.name}</p>
              <p className="text-sm text-[#D7CCC8]">{userProfile.email}</p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
