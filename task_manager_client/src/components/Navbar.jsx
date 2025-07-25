import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isTodosPage = pathname.startsWith('/todos');

  // Simulated user (replace later)
  const userProfile = {
    name: 'Eric M.',
    email: 'eric@mochatasks.com',
    avatar: 'https://i.pravatar.cc/40?img=3',
  };

  if (isAuthPage) {
    return (
      <nav className="bg-[#3E2723] text-white px-6 py-4 shadow-md flex items-center justify-between">
        {/* Centered Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight mx-auto">
          Mocha<span className="text-[#D7CCC8]">Tasks</span>
        </Link>

        {/* Auth Switch */}
        <div className="absolute right-6 text-sm">
          {pathname === '/login' ? (
            <span>
              No account?{' '}
              <Link to="/signup" className="text-[#D7CCC8] underline hover:text-white">
                Sign up
              </Link>
            </span>
          ) : (
            <span>
              Already a user?{' '}
              <Link to="/login" className="text-[#D7CCC8] underline hover:text-white">
                Log in
              </Link>
            </span>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-[#3E2723] text-white px-6 py-4 shadow-md flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight">
        Mocha<span className="text-[#D7CCC8]">Tasks</span>
      </Link>

      {/* Main Navigation */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-[#BCAAA4]">Home</Link>
        <Link to="/todos" className="hover:text-[#BCAAA4]">Tasks</Link>
        <Link to="/about" className="hover:text-[#BCAAA4]">About</Link>
      </div>

      {/* Profile Section */}
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
    </nav>
  );
}

export default Navbar;
