// "use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams"
import { useNavigate } from "react-router-dom";
export default function HomePage() {

  const navigate = useNavigate()
  const handleCreateCourse = () => {
    navigate("/admin/createCourse");
  }
  return (
    <div
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="pointer-events-none" />
      
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          100xDevs Creator Studio
        </h1>
        
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Helping educators transform ideas into engaging learning experiences.
        </p>

        <div className="flex justify-center">
          <button className="mt-6 sm:py-4 sm:px-6 px-4 py-2 bg-violet-700  hover:from-blue-400 hover:to-cyan-300 rounded-lg text-gray-200  text-md sm:text-xl sm:font-semibold shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105" 
            onClick={handleCreateCourse}>
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
}
