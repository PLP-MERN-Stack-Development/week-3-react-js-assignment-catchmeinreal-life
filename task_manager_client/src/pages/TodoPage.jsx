import { useState } from "react";

/**components */
import TaskManager from "../components/TaskManager";
import Navbar from "../components/Navbar";

function Todo(){
   const [count, setCount] = useState(0);

    return (
      <div className="min-h-screen bg-[#f6f1e7] text-[#3b2e2a] dark:bg-[#2e2a24] dark:text-[#f6f1e7]">
        {/* Navbar component will go here */}
        <Navbar />
        <header className="bg-[#d8b08c] dark:bg-[#5e3c28] shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold">Mocha Task Manager</h1>
            </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fffaf3] dark:bg-[#3b2e2a] overflow-hidden shadow rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg mb-4">
                Edit <code className="font-mono bg-[#e0d6c3] dark:bg-[#4d3f35] p-1 rounded">src/App.jsx</code> and save to test HMR
              </p>
              
              <div className="flex items-center gap-4 my-4">
                <TaskManager />
              </div>

              <p className="text-[#7c665d] dark:text-[#cbb6a6] mt-4">
                Implement your TaskManager component here
              </p>
            </div>
          </div>
          
          {/* API data display will go here */}
          <div className="mt-8 bg-[#fffaf3] dark:bg-[#3b2e2a] overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <p className="text-[#7c665d] dark:text-[#cbb6a6]">
              Fetch and display data from an API here
            </p>
          </div>
        </main>

        {/* Footer component will go here */}
        <footer className="bg-[#d8b08c] dark:bg-[#5e3c28] shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#7c665d] dark:text-[#cbb6a6]">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
}

export default Todo;
