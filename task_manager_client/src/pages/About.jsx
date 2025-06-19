

// function About() {


//     return(
//         <>
//         <h1>Mocha smart Task manager</h1>
//         <p>This app is built with React and love. 🧠🔥</p>;
//         </>
//     )
// }

// export default About;
function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6f1e7] to-[#d8b08c] px-4">
      <div className="max-w-xl text-center bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-[#5e3c28] mb-4">
          Mocha Smart Task Manager ☕
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Built with <span className="font-semibold text-[#5e3c28]">React</span>, 
          styled with <span className="font-semibold text-[#5e3c28]">Tailwind CSS</span>, 
          and powered by a vision to help you do more, focus better, and live clearer. 🧠🔥
        </p>
      </div>
    </div>
  );
}

export default About;
