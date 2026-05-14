"use client";


import { BookOpen, FileText, Globe, Lightbulb, Heart, Library } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Character and About Us Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Character Illustration */}
          <div
            className="flex justify-center lg:justify-start"
          >
            <div className="mb-6 flex justify-center lg:justify-start">
              <img src="/images/AboutUs.png" alt="Person reading a book" className="w-full max-w-[420px] md:max-w-[520px] h-auto object-contain" />
            </div>
          </div>

          {/* About Us Text */}
          <div
            className="pl-0 lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#07294e] mb-6">About Us</h2>
            <p className="text-[#334155] mb-6 leading-relaxed max-w-[55ch]">
              At Literary Palace, we make literature clear, reliable, and accessible for everyone. Our curated summaries, analyses, literary terms, and critical perspectives are designed to help students, teachers, and researchers study with confidence. Rooted in expertise and academic integrity, we connect classic works, modern thought, and world literature to give you resources you can trust. We aim to inspire a deeper understanding of literature while making learning simple and enjoyable.
            </p>

            <button
              aria-label="About Us"
              className="bg-[#07294e] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#0a3a6b] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => window.location.href = 'src/about-us'}
            >
              About Us
            </button>
          </div>
        </div>

  {/* Redesigned Statistics Bar */}
        <div
          className="w-full overflow-hidden relative z-10 -mb-25"
        >
          <div className="w-full bg-[#b5d56a] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-[#07294e] items-center">
                <div className="md:pr-6 md:border-r md:border-[#07294e] md:border-opacity-90 md:py-2">
                  <dt className="sr-only">Literature Insights</dt>
                  <img src="/Literature Insights (Reviews).svg" alt="" aria-hidden="true" className="mx-auto w-12 h-12 mb-3" />
                  <dd>
                    <div className="stat-count text-5xl md:text-6xl font-bold">2k+</div>
                    <div className="text-sm font-medium">Literature Insights</div>
                    <span className="sr-only">2,000+ Literature Insights</span>
                  </dd>
                </div>

                <div className="md:px-6 md:border-r md:border-[#07294e] md:border-opacity-90 md:py-2">
                  <dt className="sr-only">Literary Terms</dt>
                  <img src="/Literary Terms icon (Reviews)-01.svg" alt="" aria-hidden="true" className="mx-auto w-12 h-12 mb-3" />
                  <dd>
                    <div className="stat-count text-5xl md:text-6xl font-bold">100+</div>
                    <div className="text-sm font-medium">Literary Terms</div>
                    <span className="sr-only">100+ Literary Terms</span>
                  </dd>
                </div>

                <div className="md:px-6 md:border-r md:border-[#07294e] md:border-opacity-90 md:py-2">
                  <dt className="sr-only">Critical Insights</dt>
                  <img src="/Criticle Insights (Reviews).svg" alt="" aria-hidden="true" className="mx-auto w-12 h-12 mb-3" />
                  <dd>
                    <div className="stat-count text-5xl md:text-6xl font-bold">1k+</div>
                    <div className="text-sm font-medium">Critical Insights</div>
                    <span className="sr-only">1,000+ Critical Insights</span>
                  </dd>
                </div>

                <div className="md:pl-6 md:py-2">
                  <dt className="sr-only">World Literature</dt>
                  <img src="/World Literature (Reviews)-01.svg" alt="" aria-hidden="true" className="mx-auto w-12 h-12 mb-3" />
                  <dd>
                    <div className="stat-count text-5xl md:text-6xl font-bold">500+</div>
                    <div className="text-sm font-medium">World Literature</div>
                    <span className="sr-only">500+ World Literature entries</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

          </div>

      {/* Full-width Dark Navy Guides / Hero-like Block */}
  <div
        className="w-full bg-[#07294e] rounded-none pt-36 py-16 px-4 sm:px-6 lg:px-8 text-white shadow-lg relative z-0"
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[#b5d56a] uppercase text-sm tracking-wide mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Literature simplified</p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Explore Literature<br />Like Never Before</h3>
            
            {/* Category Items - Responsive Layout */}
            <div className=" mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
              
              {/* Category 1: Expert Analysis Made Simple */}
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#b5d56a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/Expert Analysis Made Simple icon-01.svg" alt="" aria-hidden="true" className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="category-heading font-semibold text-white text-base lg:text-lg leading-snug">
                    Expert Analysis Made Simple
                  </p>
                </div>
              </div>

              {/* Category 2: Every Work You Need */}
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#b5d56a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/Every Work You Need Icon-01.svg" alt="" aria-hidden="true" className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="category-heading font-semibold text-white text-base lg:text-lg leading-snug">
                    Every Work You Need
                  </p>
                </div>
              </div>

              {/* Category 3: For Every Reading Lover */}
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#b5d56a] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/For Every Reading Lover Icon-01.svg" alt="" aria-hidden="true" className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p className="category-heading font-semibold text-white text-base lg:text-lg leading-snug">
                    For Every Reading Lover
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="max-w-sm p-4 rounded-md text-white bg-transparent">
              We explain books, poems, and plays in plain English so you can learn faster and enjoy reading more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
