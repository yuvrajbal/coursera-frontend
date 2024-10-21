"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams"
import { useNavigate } from "react-router-dom";
export default function HomePage() {

  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate("/courses");
  }
  return (
    <div
      className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="pointer-events-none" />
      
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          100xDevs
        </h1>
        
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A beginner-friendly platform for mastering programming skills.
        </p>

        <div className="flex justify-center">
          <button className="py-2 px-4 bg-violet-700 rounded-md text-gray-200 mt-2" 
            onClick={handleExploreClick}>
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}
