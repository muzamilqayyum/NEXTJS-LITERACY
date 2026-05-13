"use client";

import { motion } from 'framer-motion';

const tiles = [
  {
    id: 1,
    img: "/Personalized Literature Membership Icon-01.svg",
    title: "Personalized Literature Mentorship",
    desc: "Master complex texts with one-on-one guidance from literary experts.",
    bg: "bg-[#07294e]",
    textColor: "text-white"
  },
  {
    id: 2,
    img: "/Literary Term & Theory Simplification Icon-01.svg",
    title: "Literary Term & Theory Simplification",
    desc: "Learn complex literary terms through simple explanations and real examples.",
    bg: "bg-[#b5d56a]",
    textColor: "text-[#07294e]"
  },
  {
    id: 3,
    img: "/Academic Writing Help (Literature Only)-01.svg",
    title: "Academic Writing Help (Literature Only)",
    desc: "Professional essay and research paper support from qualified literature specialists.",
    bg: "bg-[#b5d56a]",
    textColor: "text-[#07294e]"
  },
  {
    id: 4,
    img: "/Literary Career & research Consultation-01.svg",
    title: "Literary Career & Research Consultation",
    desc: "Turn your literature degree into teaching, publishing, or research careers.",
    bg: "bg-[#07294e]",
    textColor: "text-white"
  }
];

export default function LiteraryPalaceServices() {
  return (
    <section className="py-16" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left text column */}
          <div
            className="pr-4 lg:pr-12"
          >
            <p className="text-sm text-[#b5d56a] uppercase tracking-wide mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Literary Palace Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#07294e] leading-tight mb-6">Guidance From Literary Experts</h2>

            <p className="text-[#334155] mb-6 max-w-[58ch]">
              Get genuine understanding, not just answers. Our literature specialists with advanced degrees provide personalized support to help you master texts, write with confidence, and achieve your academic goals. We build the critical thinking skills that turn students into scholars.
            </p>

            <button className="bg-[#07294e] text-white px-6 py-2 rounded-md shadow-md hover:brightness-95 transition cursor-pointer">Our Services</button>
          </div>

          {/* Right tiles */}
          <div
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            {/* First group - vertical stack */}
            <div className="flex flex-col gap-4 md:gap-6">
              {tiles.slice(0, 2).map(({ id, img, title, desc, bg, textColor }) => (
                <div
                  key={id}
                  className={`${bg} ${textColor} rounded-lg w-full max-w-xs md:w-56 h-48 md:h-56 flex flex-col p-4 md:p-6 items-center justify-center text-center shadow-md cursor-pointer`}
                  tabIndex={0}
                  role="button"
                  aria-label={title}
                  onClick={() => { /* Add navigation or modal logic here if needed */ }}
                >
                  <img src={img} alt="" className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 object-contain mx-auto" />
                  <h3 className="font-semibold text-sm md:text-base leading-tight mb-1 md:mb-2">{title}</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${textColor === 'text-white' ? 'text-white/90' : 'text-[#07294e]/90'}`}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Second group - vertical stack */}
            <div className="flex flex-col gap-4 md:gap-6 md:-mt-8">
              {tiles.slice(2, 4).map(({ id, img, title, desc, bg, textColor }) => (
                <div
                  key={id}
                  className={`${bg} ${textColor} rounded-lg w-full max-w-xs md:w-56 h-48 md:h-56 flex flex-col p-4 md:p-6 items-center justify-center text-center shadow-md cursor-pointer`}
                  tabIndex={0}
                  role="button"
                  aria-label={title}
                  onClick={() => { /* Add navigation or modal logic here if needed */ }}
                >
                  <img src={img} alt="" className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 object-contain mx-auto" />
                  <h3 className="font-semibold text-sm md:text-base leading-tight mb-1 md:mb-2">{title}</h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${textColor === 'text-white' ? 'text-white/90' : 'text-[#07294e]/90'}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
