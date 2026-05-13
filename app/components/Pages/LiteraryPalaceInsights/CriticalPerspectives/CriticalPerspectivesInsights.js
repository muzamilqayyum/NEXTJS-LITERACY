"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Bookmark } from 'lucide-react';
import Image from 'next/image';

const CriticalPerspectivesInsights = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Criticism', 'Theories', 'Philosophies'];

  const criticalItems = Array(16).fill(null).map((_, i) => ({
    id: i + 1,
    title: "A Gateway to the world of Critical Perspectives A Gateway to the",
    author: 'Literary Palace',
    excerpt: 'A concise guide to explore major criticism, theories, and philosophies.',
    category: 'Critical Guide',
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

  const CardGrid = ({ prefix }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {criticalItems.slice(0, itemsToShow).map((item) => (
        <motion.div
          key={`${prefix}-${item.id}`}
          whileTap={{ scale: 0.98 }}
          className="relative rounded-lg border-2 border-[#b5d56a] bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col max-h-[240px] overflow-hidden"
        >
          {/* Watermark */}
          <div className="absolute -right-4 bottom-4 opacity-10 pointer-events-none">
            <Image src="/Logo Icons/Literary Palace SVG Icon-01.svg" alt="" width={220} height={220} className="w-44 h-44 md:w-52 md:h-52" />
          </div>

          {/* Left stripe */}
          <span className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-sm rounded-bl-sm" aria-hidden="true" />

          <div className="flex-1 flex flex-col pl-6 relative pb-12">
            <div className="mb-2">
              <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">
                {item.category}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-[#07294e] mb-1 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by {item.author}</p>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
          </div>

          <div className="absolute right-4 bottom-4 z-20">
            <button aria-label="Bookmark" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-[#07294e] cursor-pointer" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const AlphaHeader = ({ label }) => (
    <div className="bg-[#b5d56a] rounded-lg py-3 px-4 mb-6 w-full flex items-center justify-center text-[#07294e] font-semibold shadow-sm tracking-widest">
      {label}
    </div>
  );

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#b5d56a] mb-8">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center py-3 gap-3 sm:gap-4">
              <p className="text-[#07294e] text-base md:text-lg font-medium text-center sm:text-left">
                Can&apos;t find the insight you need?
              </p>
              <button
                type="button"
                className="bg-[#07294e] text-white px-4 py-2 rounded-md text-sm md:text-base font-medium hover:opacity-90 transition cursor-pointer whitespace-nowrap"
              >
                Request for Insight
              </button>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#07294e] mb-5">
          2k+ Critical Perspectives Insights
        </h2>

        {/* ✅ Filter + Sort bar — fully responsive */}
        <div className="bg-[#f4f4f4] w-full rounded-md mb-7">
          <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-3 flex-wrap">

            {/* Filter pills */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#b5d56a] text-[#07294e] border-transparent font-semibold shadow-inner'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm text-gray-500 hidden sm:inline">Sort:</span>
              <div className="relative" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen((s) => !s)}
                  aria-haspopup="listbox"
                  aria-expanded={isSortOpen}
                  className="flex items-center gap-2 w-20 px-3 py-1.5 bg-white rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors text-[#191919] cursor-pointer"
                >
                  {selectedSort}
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>

                {isSortOpen && (
                  <ul
                    role="listbox"
                    aria-label="Sort options"
                    className="absolute right-0 mt-2 w-20 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-50 text-sm text-center"
                  >
                    {sortOptions.map((opt) => (
                      <li
                        key={opt}
                        role="option"
                        aria-selected={selectedSort === opt}
                        onClick={() => { setSelectedSort(opt); setIsSortOpen(false); }}
                        className={`px-3 py-2 hover:bg-gray-100 cursor-pointer text-[#191919] ${selectedSort === opt ? 'font-semibold bg-gray-50' : ''}`}
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

        {/* Cards sections */}
        <AlphaHeader label="#" />
        <CardGrid prefix="hash" />

        <AlphaHeader label="A" />
        <CardGrid prefix="alpha" />

        {/* Browse More */}
        <div className="flex justify-center mt-4 mb-12">
          <button className="px-8 py-3 border-2 border-[#07294e] text-[#07294e] rounded-lg font-medium hover:bg-[#07294e] hover:text-white transition-colors duration-200">
            Browse More
          </button>
        </div>

      </div>
    </section>
  );
};

/* ─── Upgrade Card (used separately in a grid) ─────────────────────────────── */
export const UpgradeCard = () => (
  <div className="relative h-full bg-[#f4f4f4] border-2 border-[#b5d56a] rounded-xl p-6 flex flex-col justify-between overflow-hidden">

    {/* A+ badge */}
    <img src="/A+ Icon-01.svg" alt="A+" className="absolute top-3 right-3 w-10 h-10 z-30" />

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#07294e] text-center mt-4 mb-1">
        Upgrade to
      </h3>

      <div className="flex items-center justify-center mb-3">
        <div className="relative inline-block">
          <img
            src="/Logo Icons/Literary Palace SVG Icon-01.svg"
            alt="Literary Palace"
            className="h-11 object-contain"
          />
          <span className="absolute top-2 right-3 text-[10px] font-bold text-[#07294e] uppercase tracking-wide">
            PLUS
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center mb-5 leading-relaxed px-2">
        Download clear Critical Perspectives insights — PDFs, summaries, themes, and analysis for quick study.
      </p>

      <div className="flex items-center justify-center mb-4">
        <img
          src="/UpgradeToLP-01.svg"
          alt="Upgrade illustration"
          className="w-40 h-auto object-contain"
        />
      </div>
    </div>

    <div className="text-center">
      <button className="bg-[#07294e] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#0a3a6b] transition-colors cursor-pointer w-full sm:w-auto">
        Download
      </button>
    </div>
  </div>
);

export default CriticalPerspectivesInsights;