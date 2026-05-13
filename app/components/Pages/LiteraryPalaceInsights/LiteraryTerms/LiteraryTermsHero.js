/**
 * Literary Terms Hero Component
 *
 * Duplicated from World Literature Hero for Literary Terms page styling
 *
 * @component
 * @returns {JSX.Element} Literary Terms hero section
 */

"use client";

import { Search } from 'lucide-react';

const LiteraryTermsHero = () => {
  return (
    <section
      className="relative text-white min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-between"
    >
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(7, 41, 78, 0.8) 0%, rgba(10, 58, 107, 0.8) 50%, rgba(7, 41, 78, 0.8) 100%), url('/images/LiteraturePageHeroBg.png')`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:items-end">
          {/* Left Content */}
          <div className="md:pl-6 lg:pl-17 transform translate-y-6 md:translate-y-12 lg:translate-y-24 md:-translate-x-4 lg:-translate-x-12 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight hero-heading-noto whitespace-nowrap">
              <span className="text-white font-merriweather">
                Literary Terms
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-95 mt-8 leading-snug max-w-[80ch]">
              Literary Terms are the words, techniques, and devices like imagery, symbolism, metaphors, and meter that shape poems, stories, plays, and every kind of literature.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 transform translate-y-18 sm:translate-y-20 md:translate-y-28 lg:translate-y-37 md:-translate-x-11 lg:-translate-x-13">
              <img
                src="/Literary Terms icon-b5d56a.svg"
                alt="Literary Terms Illustration"
                className="w-full h-full object-contain"
                style={{ opacity: 100 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar at Bottom */}
      <div className="relative z-10 pb-0 -mb-6 px-2 sm:px-4 lg:px-6">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-6xl mx-auto">
            <input
              type="text"
              placeholder="Search Literary Terms by definition, examples, and usage."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-16 sm:pr-20 text-gray-800 bg-white rounded-xl shadow-md focus:outline-none focus:ring-0 focus:border-none text-sm sm:text-base placeholder-gray-500 border border-transparent"
            />
            <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 sm:p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteraryTermsHero;
