
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bookmark } from 'lucide-react';

const RecentlyAddedCriticalPerspectives = () => {
  // Sample critical perspectives data - replace with actual data
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left: cards grid (takes 9/12 on lg) */}
          <div className="lg:col-span-9 w-[800px] ml-0"> {/* Set total width of cards grid to 800px and moved to left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Two columns layout */}
              {recentlyAdded.map((item) => (
                <motion.div
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-lg border-2 border-[#b5d56a] bg-white p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl h-full flex flex-col max-h-[230px] overflow-hidden`} /* Adjusted card layout */
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

                  {/* left decorative stripe (match Home) */}
                  <span className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-2 rounded-bl-2" aria-hidden="true" />

                  <div className="flex-1 flex flex-col pl-6 relative pb-16">
                    {/* top tag */}
                    <div className="mb-2">
                      <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">Critical Perspective</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#07294e] mb-1 line-clamp-2">{item.title.length > 60 ? item.title.slice(0,60) + '…' : item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by Literary Palace</p>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">A short summary to help you decide what to read next.</p>

                  </div>

                  {/* bookmark at bottom-right (absolute to avoid layout overflow) */}
                  <div className="absolute right-4 bottom-4 z-20">
                      <button aria-label="Bookmark" className="p-2 rounded-md hover:bg-gray-100 bg-white/0 cursor-pointer">
                      <Bookmark className="w-5 h-5 text-[#07294e]" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: tall upgrade CTA (takes 3/12 on lg) */}
          <div className="lg:col-span-3">
            <motion.div
              className="relative h-full bg-[#f4f4f4] border-2 border-[#b5d56a] p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl md:text-2xl mt-4 -mb-2 font-bold text-[#07294e] text-center">Upgrade to</h3>

                {/* Logo replaces textual name - centered; PLUS label to the right */}
                <div className="flex items-center justify-center mb-3">
                  <div className="relative inline-block">
                    <Image src="/Logo Icons/Literary Palace SVG-01.svg" alt="Literary Palace" width={250} height={60} className="h-12 md:h-12 object-contain" />
                    <span className="absolute top-2 right-4 text-[11px] md:text-[11px] font-merriweather text-[#07294e] uppercase">PLUS</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-2 text-center">Download clear Critical Perspectives PDFs, summaries, themes, characters, quotes, and analysis for quick study.</p>

                {/* A+ icon overlapping the border: no background, no shadow (increased size) */}
                <Image src="/A+ Icon-01.svg" alt="A+" width={56} height={56} className="absolute top-2 right-1 w-11 h-11 z-30" />

                <div className="flex items-center justify-center mb-6">
                  <Image src="/UpgradeToLP-01.svg" alt="Upgrade illustration" width={170} height={170} className="w-55 h-auto object-contain" />
                </div>
              </div>

              <div className="text-center">
                <button className="bg-[#07294e] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0a3a6b] transition-colors cursor-pointer">Download</button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedCriticalPerspectives;
