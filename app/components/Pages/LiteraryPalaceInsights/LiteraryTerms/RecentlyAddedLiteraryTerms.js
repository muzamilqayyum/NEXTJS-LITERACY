/**
 * Recently Added Literary Terms Section Component
 */

"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const RecentlyAddedLiteraryTerms = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recentlyAddedRaw, setRecentlyAddedRaw] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/api/terms')
      .then(res => res.json())
      .then((json) => {
        if (!mounted) return;
        setRecentlyAddedRaw(json?.data || []);
      })
      .catch((err) => {
        console.warn('Failed to fetch literary terms', err);
        if (mounted) setRecentlyAddedRaw([]);
      })
      .finally(() => { if (mounted) setLoading(false); });

    return () => { mounted = false; };
  }, []);

  const recentlyAdded = useMemo(() => {
    return recentlyAddedRaw.map(item => {
      const first = (item.title || '').charAt(0).toUpperCase();
      const category = /[A-Z]/.test(first) ? first : '#';
      return { ...item, category };
    });
  }, [recentlyAddedRaw]);

  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(recentlyAdded.map(t => t.category))).sort();
  }, [recentlyAdded]);

  const filteredTerms = selectedCategory === 'All'
    ? recentlyAdded
    : recentlyAdded.filter(term => term.category === selectedCategory);

  const categoriesWithHeaders = selectedCategory === 'All'
    ? uniqueCategories
    : [selectedCategory];

  useEffect(() => {
    const q = searchParams?.get('category');
    if (q) setSelectedCategory(q);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectCategory(char) {
    setSelectedCategory(char);
    const path = '/literary-terms' + (char && char !== 'All' ? `?category=${encodeURIComponent(char)}` : '');
    router.replace(path);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* A–Z Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {['All', '#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map((char) => (
            <button
              key={char}
              onClick={() => handleSelectCategory(char)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 shadow-sm transition-colors text-[#191919] cursor-pointer ${
                selectedCategory === char ? 'bg-[#b5d56a] text-[#07294e]' : 'bg-white'
              }`}
            >
              {char}
            </button>
          ))}
        </div>

        {/* Main Layout — stacks on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">

          {/* Cards Column */}
          <div className="w-full lg:col-span-9">
            {categoriesWithHeaders.map((category) => (
              <div key={category} className="mb-6">

                {/* Category Header */}
                <div className="bg-[#b5d56a] rounded-lg py-3 px-4 mb-6 w-full flex items-center justify-center text-[#07294e] font-semibold shadow-sm">
                  {category}
                </div>

                {/* Term Cards */}
                <div className="grid grid-cols-1 gap-6">
                  {filteredTerms
                    .filter((term) => term.category === category)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/literary-terms/${item.slug}${selectedCategory && selectedCategory !== 'All' ? `?category=${encodeURIComponent(selectedCategory)}` : ''}`}
                        className="relative rounded-lg border-2 border-[#b5d56a] bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full flex flex-col overflow-hidden min-h-[150px]"
                      >
                        {/* Watermark */}
                        <div className="absolute right-5 bottom-1 opacity-10 pointer-events-none">
                          <Image
                            src="/Logo Icons/Literary Palace SVG Icon-01.svg"
                            alt=""
                            width={120}
                            height={120}
                            className="w-32 h-32"
                          />
                        </div>

                        {/* Left stripe */}
                        <span
                          className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-lg rounded-bl-lg"
                          aria-hidden="true"
                        />

                        <div className="flex-1 flex flex-col pl-6 relative pb-10">
                          <h3 className="text-base md:text-lg font-bold text-[#07294e] mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#b5d56a] mb-1">A Gateway to the world of Literature</p>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                          <span className="text-[#07294e] text-sm font-medium hover:underline mt-1">Read More</span>
                        </div>

                        {/* Bookmark */}
                        <div className="absolute right-4 bottom-4 z-20">
                          <button
                            aria-label="Bookmark"
                            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              // Add bookmark functionality here
                            }}
                          >
                            <Bookmark className="w-5 h-5 text-[#07294e]" />
                          </button>
                        </div>
                      </Link>
                    ))}

                  {/* Empty State */}
                  {filteredTerms.filter((term) => term.category === category).length === 0 && (
                    <div className="text-center text-gray-500 mt-4 flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="text-gray-500 mb-4"
                        size="3x"
                      />
                      <p className="text-lg text-gray-700">No insights available for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="flex justify-center mt-10 mb-10">
              <button className="px-8 py-3 border-2 border-[#07294e] text-[#07294e] rounded-lg font-medium hover:bg-[#07294e] hover:text-white transition-colors cursor-pointer">
                Load More
              </button>
            </div>
          </div>

          {/* Sidebar — full width on mobile, 3/12 on lg */}
          <div className="w-full lg:col-span-3">

            {/* Upgrade CTA */}
            <motion.div className="relative bg-[#f4f4f4] border-2 border-[#b5d56a] p-6 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-xl md:text-2xl mt-4 -mb-2 font-bold text-[#07294e] text-center">
                  Upgrade to
                </h3>
                <div className="flex items-center justify-center mb-3">
                  <div className="relative inline-block">
                    <Image
                      src="/Logo Icons/Literary Palace SVG-01.svg"
                      alt="Literary Palace"
                      width={250}
                      height={60}
                      className="h-12 object-contain"
                    />
                    <span className="absolute top-2 right-4 text-[11px] font-merriweather text-[#07294e] uppercase">
                      PLUS
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2 text-center">
                  Download clear Literary Terms PDFs, definitions, examples, and analysis for quick study.
                </p>
                <Image
                  src="/A+ Icon-01.svg"
                  alt="A+"
                  width={56}
                  height={56}
                  className="absolute top-2 right-1 w-11 h-11 z-30"
                />
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/UpgradeToLP-01.svg"
                    alt="Upgrade illustration"
                    width={170}
                    height={170}
                    className="w-44 h-auto object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="bg-[#07294e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0a3a6b] transition-colors cursor-pointer">
                  Download
                </button>
              </div>
            </motion.div>

            {/* Can't find insight */}
            <div className="mt-4 bg-[#b5d56a] py-7 px-6 w-full flex flex-col items-center justify-center text-[#07294e] shadow-sm rounded-lg">
              <p className="text-sm font-medium mb-5">Can&apos;t find the insight you need?</p>
              <button className="bg-[#07294e] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-95 transition cursor-pointer">
                Request for Insight
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedLiteraryTerms;
