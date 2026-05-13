"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Bookmark } from 'lucide-react';
import Image from 'next/image';

const LiteratureInsights = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSubFilter, setActiveSubFilter] = useState('Title');

  const filters = ['All', 'History', 'Poetry', 'Authors', 'Novels', 'Dramas/Plays', 'Short Stories', 'Prose/Essays'];
  const subFilters = ['Title', 'Author'];

  const literatureItems = Array(16).fill(null).map((_, i) => ({
    id: i + 1,
    title: "A Gateway to the world of Literature A Gateway to the",
    author: 'Literary Palace',
    excerpt: 'A concise guide to explore classic texts and modern criticism.',
    category: 'Lit Guide'
  }));

  const itemsToShow = 8;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const [selectedSort, setSelectedSort] = useState('All');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);
  const sortOptions = ['All', '#', ...alphabet];

  useEffect(() => {
    function handleClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Insight-request Banner */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#b5d56a] mb-6">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center py-3 md:py-4 gap-3 sm:gap-4">
              <p className="text-[#07294e] text-base md:text-lg font-medium text-center sm:text-left">
                Can&apos;t find the insight you need?
              </p>
              <button
                type="button"
                className="bg-[#07294e] text-white px-4 py-2 rounded-md text-sm md:text-base font-medium hover:opacity-95 transition cursor-pointer whitespace-nowrap"
              >
                Request for Insight
              </button>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#07294e] mb-4">
            2k+ Literature Insights
          </h2>

          {/* ✅ FIXED: Category filter bar — responsive, no breakout overflow */}
          <div className="bg-[#f4f4f4] w-full rounded-md mb-7">
            <div
              className="overflow-x-auto py-3 px-2"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-2 whitespace-nowrap min-w-max">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`inline-flex items-center text-sm px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                      activeFilter === filter
                        ? 'bg-[#b5d56a] text-[#07294e] shadow-inner border-transparent font-semibold'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* ✅ Scrollbar indicator (visible on mobile) */}
            <style>{`
              .filter-scroll::-webkit-scrollbar { height: 4px; }
              .filter-scroll::-webkit-scrollbar-track { background: #e5e7eb; border-radius: 9999px; }
              .filter-scroll::-webkit-scrollbar-thumb { background: #b5d56a; border-radius: 9999px; }
            `}</style>
          </div>

          {/* Sub filters and Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              {subFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveSubFilter(filter)}
                  className={`text-sm px-3 py-1.5 rounded-md border cursor-pointer transition-colors ${
                    activeSubFilter === filter
                      ? 'bg-[#b5d56a] text-[#07294e] border-[#9cc35a] font-semibold'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 hidden sm:inline">Sort:</span>

              <div className="relative" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen((s) => !s)}
                  aria-haspopup="listbox"
                  aria-expanded={isSortOpen}
                  className="flex items-center gap-2 justify-center w-20 px-3 py-1.5 bg-white rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors text-[#191919] cursor-pointer"
                >
                  {selectedSort}
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>

                {isSortOpen && (
                  <ul
                    role="listbox"
                    aria-label="Sort options"
                    className="absolute right-0 mt-2 w-21 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-50 text-sm text-[#191919] text-center"
                  >
                    {sortOptions.map((opt) => (
                      <li
                        key={opt}
                        role="option"
                        aria-selected={selectedSort === opt}
                        onClick={() => {
                          setSelectedSort(opt);
                          setIsSortOpen(false);
                        }}
                        className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                          selectedSort === opt ? 'font-semibold bg-gray-50' : ''
                        } text-[#191919] text-center`}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Alphabetic header # */}
        <div className="bg-[#b5d56a] rounded-lg py-3 px-4 mb-6 w-full flex items-center justify-center text-[#07294e] font-semibold shadow-sm">
          #
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {literatureItems.slice(0, itemsToShow).map((item) => (
            <div
              key={`alpha-${item.id}`}
              className="relative rounded-lg border-2 border-[#b5d56a] bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl h-full flex flex-col max-h-[240px] overflow-hidden"
            >
              <div className="absolute -right-4 bottom-4 opacity-10 pointer-events-none">
                <Image
                  src="/Logo Icons/Literary Palace SVG Icon-01.svg"
                  alt=""
                  width={220}
                  height={220}
                  className="w-44 h-44 md:w-52 md:h-52"
                />
              </div>
              <span className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-2 rounded-bl-2" aria-hidden="true" />
              <div className="flex-1 flex flex-col pl-6 relative pb-12">
                <div className="mb-2">
                  <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">{item.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#07294e] mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {item.author}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 overflow-hidden">{item.excerpt}</p>
              </div>
              <div className="absolute right-4 bottom-4 z-20">
                <button aria-label="Bookmark" className="p-2 rounded-md hover:bg-gray-100 bg-white/0">
                  <Bookmark className="w-5 h-5 text-[#07294e] cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Alphabetic header A */}
        <div className="bg-[#b5d56a] rounded-lg py-3 px-4 mb-8 w-full flex items-center justify-center text-[#07294e] font-semibold shadow-sm">
          A
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {literatureItems.slice(0, itemsToShow).map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg border-2 border-[#b5d56a] bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl h-full flex flex-col max-h-[240px] overflow-hidden"
            >
              <div className="absolute -right-4 bottom-4 opacity-10 pointer-events-none">
                <Image
                  src="/Logo Icons/Literary Palace SVG Icon-01.svg"
                  alt=""
                  width={220}
                  height={220}
                  className="w-44 h-44 md:w-52 md:h-52"
                />
              </div>
              <span className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-2 rounded-bl-2" aria-hidden="true" />
              <div className="flex-1 flex flex-col pl-6 relative pb-12">
                <div className="mb-2">
                  <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">{item.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#07294e] mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {item.author}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 overflow-hidden">{item.excerpt}</p>
              </div>
              <div className="absolute right-4 bottom-4 z-20">
                <button aria-label="Bookmark" className="p-2 rounded-md hover:bg-gray-100 bg-white/0">
                  <Bookmark className="w-5 h-5 text-[#07294e]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More */}
        <div className="flex justify-center">
          <button className="px-8 py-3 mb-25 border-2 border-[#07294e] text-[#07294e] rounded-lg font-medium hover:bg-[#07294e] hover:text-white transition-colors">
            Browse More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiteratureInsights;