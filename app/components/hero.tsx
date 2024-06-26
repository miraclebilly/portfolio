'use client';
import Image from 'next/image';
import profilePic from './profilePic.jpg';
import HeroImage from '../../public/background.jpg';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
// import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

export default function Hero() {
  useEffect(() => {
    const typed = new Typed('.heroName', {
      strings: ['Miracle Billy', 'a Frontend Developer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        className="bg-gray-100 py-32 px-24 relative"
        style={{ backgroundImage: `url(${HeroImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mt-6 text-black dark:text-white">
            Hello, I'm <span className=" text-blue-700 text-3xl sm:text-4xl md:text-5xl lg:text-7xl heroName"></span>
          </h1>
          <p className="text-xl mt-4 text-black dark:text-white">
            I provide Tech Solutions on the Web using Next.js, TypeScript, Tailwind, and Supabase.
          </p>
          <div className="mt-8">
         
            <button
              className="dark:text-white text-black  hover:font-bold text-lg font-medium border m-8 p-3 border-solid dark:border-white border-black inline-flex items-center group"
            >
              <a href="#section3">About Me</a>
              <GoArrowRight className="ml-2 transition-transform transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-10 z-0 hover:opacity-20 dark:opacity-90"></div>
      </section>
    </div>
  );
}
