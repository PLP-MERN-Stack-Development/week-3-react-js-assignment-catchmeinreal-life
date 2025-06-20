import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Lucide icons for modern UI

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3E2723] text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight">Mocha<span className="text-[#D7CCC8]">Tasks</span></div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-[#BCAAA4]">Home</a>
        <a href="#" className="hover:text-[#BCAAA4]">Tasks</a>
        <a href="#" className="hover:text-[#BCAAA4]">About</a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#4E342E] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <a href="#" className="hover:text-[#D7CCC8]">Home</a>
          <a href="#" className="hover:text-[#D7CCC8]">Tasks</a>
          <a href="#" className="hover:text-[#D7CCC8]">About</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
