"use client";

import { motion } from 'framer-motion';
import { BookOpen, Bookmark } from 'lucide-react';
import Image from 'next/image';

const RecentlyAdded = () => {
  const recentContent = [
    {
      id: 1,
      title: "My Name is Emilia del Valle",
      author: "Isabel Allende",
      excerpt: "In San Francisco in 1865, a brief sexual encounter between...",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/10"
    },
    {
      id: 2,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "A concise guide to explore classic texts and modern criticism.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/20"
    },
    {
      id: 3,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Short introductions, summaries, and insights to get you started.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/10"
    },
    {
      id: 4,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Curated reading lists and bite-sized guides for students.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/20"
    },
    {
      id: 5,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Practical study aids and sample analyses for common exam texts.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/10"
    },
    {
      id: 6,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Explore key themes, contexts, and character maps.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/20"
    },
    {
      id: 7,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Accessible explanations of literary terms and devices.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/10"
    },
    {
      id: 8,
      title: "A Gateway to the world of Literature",
      author: "Literary Palace",
      excerpt: "Quick references, summaries, and printable notes.",
      category: "Lit Guide",
      bgColor: "bg-[#b5d56a]/20"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#07294e] mb-8">Recently Added</h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch"
        >
          {recentContent.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-lg border-2 border-[#b5d56a] bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl h-full flex flex-col max-h-[240px] overflow-hidden`}
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

              {/* left decorative stripe */}
              <span className="absolute left-0 top-0 bottom-0 w-4 bg-[#b5d56a] rounded-tl-2 rounded-bl-2" aria-hidden="true" />

              <div className="flex-1 flex flex-col pl-6 relative pb-12">
                {/* top tag */}
                <div className="mb-2">
                  <span className="inline-block bg-[#b5d56a] text-[#07294e] text-xs font-semibold rounded-full px-3 py-1">{item.category}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#07294e] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {item.author}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>

              </div>

              {/* bookmark at bottom-right (absolute to avoid layout overflow) */}
              <div className="absolute right-4 bottom-4 z-20">
                <button aria-label="Bookmark" className="p-2 rounded-md hover:bg-gray-100 bg-white/0 cursor-pointer">
                  <Bookmark className="w-5 h-5 text-[#07294e]" />
                </button>
              </div>
              </div>
          ))}
        </div>

        <div
          className="text-center"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-[#07294e] text-[#07294e] px-8 py-3 rounded-lg font-medium hover:bg-[#07294e] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Browse More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;