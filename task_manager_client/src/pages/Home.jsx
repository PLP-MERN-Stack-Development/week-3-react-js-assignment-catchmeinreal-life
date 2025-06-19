
// function Home() {

//     return(
//         <div>
//             <h1>Smart Task Manager</h1>
//             <p>plan you're day ahead</p>

//             <button>Get started</button>
//         </div>
//     );
// }

// export default Home;

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f1e7] to-[#d8b08c] px-4">
      <div className="text-center max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-[#5e3c28] mb-4">
          Smart Task Manager
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Plan your day ahead with clarity and intention ☕📋
        </p>

        <Link to="/todos">
          <button onClick={<Link to='/todos' />} className="bg-[#5e3c28] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#44291c] transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
