
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

function Home() {
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const HandleClick = () =>{
    setPending(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000); //1 sec
  }


  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f1e7] to-[#d8b08c] px-4">
      <div className="text-center max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-[#5e3c28] mb-4">
          Smart Task Manager
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Plan your day ahead with clarity and intention ☕📋
        </p>

        
          <button 
            disabled={pending}
            onClick={HandleClick} className="bg-[#5e3c28] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#44291c] transition">
            {pending ? 'Getting started....' : 'Get Started'}
          </button>
        
      </div>
    </div>
    </>
  );
}

export default Home;
