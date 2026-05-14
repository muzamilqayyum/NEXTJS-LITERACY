"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bookmark } from 'lucide-react';

const RecentlyAddedCriticalPerspectives = () => {
  const recentlyAdded = [
    { id: 1, title: "A Glimpse in the world of Critical Perspectives..." },
    { id: 2, title: "A Glimpse in the world of Critical Perspectives..." },
    { id: 3, title: "A Glimpse in the world of Critical Perspectives..." },
    { id: 4, title: "A Glimpse in the world of Critical Perspectives..." },
    { id: 5, title: "A Glimpse in the world of Critical Perspectives..." },
    { id: 6, title: "A Glimpse in the world of Critical Perspectives..." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#07294e] mb-10">
          Recently Added
        </h2>

        {/* Grid Layout — stacks on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">

          {/* Cards Grid — full width on mobile, 9/12 on lg */}
          <div className="w-full lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentlyAdded.map((item) => (
                <motion.div
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-lg border-2 border-[#b5d56a] bg-white p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col overflow-hidden min-h-[200px]"
                >
                  {/* Background logo watermark */}
                  <div className="absolute -right-4 bottom-4 opacity-10 pointer-events-none">
                    <Image
                      src="/Logo Icons/Literary Palace SVG Icon-01.svg"
                      alt=""
                      width={220}
                      height={220}
                      className="w-44 h-44 md:w-52 md:h-52"
                    />
                  </div>

                  {/* Left decorative stripe */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-lg rounded-bl-lg"
                    aria-hidden="true"
                  />

                  <div className="flex-1 flex flex-col pl-6 relative pb-10">
                    {/* Tag */}
                    <div className="mb-2">
                      <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">
                        Critical Perspective
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-[#07294e] mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">by Literary Palace</p>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      A short summary to help you decide what to read next.
                    </p>
                  </div>

                  {/* Bookmark */}
                  <div className="absolute right-4 bottom-4 z-20">
                    <button
                      aria-label="Bookmark"
                      className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <Bookmark className="w-5 h-5 text-[#07294e]" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upgrade CTA — full width on mobile, 3/12 on lg */}
          <div className="w-full lg:col-span-3">
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
                  Download clear Critical Perspectives PDFs, summaries, themes, characters, quotes, and analysis for quick study.
                </p>

                {/* A+ icon */}
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedCriticalPerspectives;