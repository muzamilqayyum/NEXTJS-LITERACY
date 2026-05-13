"use client";


import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      {/* Hero Section */}

      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-between border-b border-black">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/herobg.jpg')`
          }}
        />

        {/* Main Content Area - Centered */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-2 sm:px-4 lg:px-6">
          <div className="max-w-6xl mx-auto text-center pt-12 md:pt-20 lg:pt-28">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight hero-heading-noto"
            >
              A Gateway to the world of Literature
            </h1>

            <div
              className="text-base md:text-lg lg:text-xl text-white opacity-90 max-w-[70ch] mx-auto leading-tight space-y-1"
            >
              <p>
                Explore clear, reliable guides to thousands of literary works and ideas, designed to help you read deeply, learn better, and teach with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar at Bottom */}
        <div className="relative z-10 pb-0 -mb-6 px-2 sm:px-4 lg:px-6">
          <div
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-6xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search authors, poems, plays, theories, terms, and more..."
                className="w-full px-6 py-4 pr-20 text-gray-800 bg-white rounded-xl shadow-md focus:outline-none focus:ring-0 focus:border-none text-base placeholder-gray-500 border border-transparent"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Literary Palace insights Section */}
      <section className="bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Header */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12"
          >
            {/* Left Column - Heading */}
            <div>
              <p className="text-[#b5d56a] font-medium text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>LITERATURE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#07294e] leading-tight">
                Literary Palace
                <br />Insights
              </h2>
            </div>

            {/* Right Column - Description Text */}
            <div className="text-[#334155] text-base leading-relaxed lg:pt-6">
              <p className="mb-2 max-w-[34ch] mx-auto lg:mx-0 lg:ml-8">Simple, organized resources to help you explore, learn, and enjoy literature effortlessly.</p>
            </div>
          </div>

          {/* Four Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { iconSrc: '/LiteratureBlue%20icon.svg', title: 'Literature', desc: 'Summaries, themes, characters, symbols, quotes, and analysis of novels, plays, essays and more.', link: 'src/literature' },
              { iconSrc: '/Criticle%20Perspective%20icon.svg', title: 'Critical Perspectives', desc: 'Major literary theories, criticism, and philosophical ideas, explained with context and practical insights.', link: 'src/critical-perspectives' },
              { iconSrc: '/Literary%20Terms%20icon-01.svg', title: 'Literary Terms', desc: 'Clear definitions with examples, explanations, and resources to make complex concepts easy to learn.', link: 'src/literary-terms' },
              { iconSrc: '/World%20Literature-01.svg', title: 'World Literature', desc: 'Comparative studies, cross-cultural analysis, and insights into global texts, traditions, and movements.', link: 'src/world-literature' }
            ].map((card, index) => (
              <div
                key={index}
                className="group"
              >
                <Link
                  href={card.link}
                  className="block bg-[#b5d56a] text-[#07294e] p-6 rounded-xl shadow-sm hover:scale-102 hover:shadow-lg duration-200 active:scale-100 focus:outline-none focus-visible:ring-0 h-full"
                >
                  <div className="text-center h-full flex flex-col">
                    <div className="w-20 h-15 flex items-center justify-center mx-auto mb-6">
                      <img src={card.iconSrc} alt={card.title} className="w-15 h-15 object-contain -mb-3" />
                    </div>

                    <h3 className="relative inline-block w-fit mx-auto font-bold text-[#07294e] mb-3 text-xl md:text-1xl text-center">
                      {card.title}

                      <span
                        className="absolute left-0 -bottom-1 h-[2px] bg-[#07294e]
               w-0 transition-all duration-200 ease-out group-hover:w-full"
                      ></span>
                    </h3>




                    <p className="text-[#0f172a] text-sm leading-relaxed opacity-90 mb-4">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;