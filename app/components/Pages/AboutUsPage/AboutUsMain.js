"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "about-literary-palace", label: "About Literary<br />Palace" },
  { id: "our-mission", label: "Our Mission" },
  { id: "what-we-offer", label: "What We Offer" },
  { id: "what-makes-different", label: "What Makes Literary<br />Palace Different" },
  { id: "our-team", label: "Our Team" },
  { id: "trust-integrity", label: "Trust & Academic<br />Integrity" },
  { id: "stay-connected", label: "Stay Connected" },
  { id: "place-trust", label: "A Place You can Trust" },
];

const AboutUsMain = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id);
        if (!el) return { id: section.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: section.id, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <aside className="sm:block sm:sticky sm:top-24 w-full mx-auto order-first sm:order-none">
            <div className="bg-[#c3e26e] rounded-lg shadow-md w-full">
              <ul className="flex flex-col divide-y divide-white">
                {sections.map((section, idx) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => handleClick(section.id)}
                      className={`
                        block w-full px-4 py-2 text-[0.95rem] text-left transition cursor-pointer
                        ${idx === 0 ? "pt-4 pb-2 rounded-t-lg" : ""}
                        ${idx === sections.length - 1 ? "pb-4 pt-2 rounded-b-lg" : ""}
                        ${activeSection === section.id
                          ? "font-semibold text-[#1a3442] bg-[#bada6a] border-l-4 border-[#1a3442]"
                          : "font-medium text-[#1a3442] hover:bg-[#bada6a]"
                        }
                      `}
                      dangerouslySetInnerHTML={{ __html: section.label.replace(/<br \/>/g, ' ') }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="sm:col-span-3 order-last sm:order-none">
            <article className="prose max-w-none text-[#191919]">

              <div className="about-us-blog mb-30">

                {/* ABOUT */}
                <h1 id="about-literary-palace" className="text-3xl font-bold mb-6 text-[#07294e]">
                  About Literary Palace
                </h1>
                <p className="text-lg mb-4">
                  Sometimes literature feels overwhelming. A dense novel, a complex theory, or an essay packed with unfamiliar terms can make studying harder than it should be.
                </p>
                <p className="text-lg mb-4">
                  Literary Palace is here to change that. We make literature simple,
                  engaging, and accessible—whether you’re preparing for an exam,
                  teaching in a classroom, writing research papers, or simply exploring
                  the world of books for pleasure.
                </p>

                {/* MISSION */}
                <h2 id="our-mission" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Our Mission</h2>
                <p className="text-lg mb-4">
                  At Literary Palace, our mission is clear: to make literature understandable, meaningful, and enjoyable for everyone.
                </p>
                <p className="text-lg mb-4">
                  We believe literature isn’t just about passing exams—it’s about discovering human experiences, exploring cultures, and connecting stories across time and space. That’s why we combine clarity with depth, giving you tools that make learning literature less stressful and far more rewarding.
                </p>

                {/* OFFER */}
                <h2 id="what-we-offer" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">What We Offer</h2>
                <p className="text-lg mb-4">We provide multiple ways to learn, teach, and explore literature:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Book Guides & Summaries – Chapter-wise breakdowns, themes, symbols, and character analysis for classics and modern works.</li>
                  <li className="text-lg mb-2">Literary Theories & Criticism – From structuralism to postcolonialism, explained in simple words.</li>
                  <li className="text-lg mb-2">Literary Terms A to Z – Easy definitions with real examples from texts.</li>
                  <li className="text-lg mb-2">Comparative & World Literature – Insights that connect cultures, genres, and periods.</li>
                  <li className="text-lg mb-2">Downloadable PDFs & Study Guides – Well-organized, exam-ready references.</li>
                  <li className="text-lg mb-2">Learning Services – 1-on-1 mentorship, online classes, and personalized study support.</li>
                  <li className="text-lg mb-2">Community Hub – Forums, discussions, and collaborative learning with fellow readers.</li>
                </ul>
                <p className="text-lg mb-4">Whether you’re a beginner or an advanced scholar, our content adapts to your learning needs.</p>

                {/* DIFFERENT */}
                <h2 id="what-makes-different" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  What Makes Literary Palace Different?
                </h2>
                <p className="text-lg mb-4">
                  There are many literature websites out there, but here’s why readers and
                  students choose us:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Clarity with Depth – We go beyond summaries, linking literature to history, philosophy, and culture.</li>
                  <li className="text-lg mb-2">Original Voice – Every guide is written by real experts—educators, researchers, and literature graduates.</li>
                  <li className="text-lg mb-2">Structured for Learning – Content organized by literary periods, authors, genres, and terms for easy navigation.</li>
                  <li className="text-lg mb-2">Printable PDFs – Designed for quick study, teaching, and exam prep.</li>
                  <li className="text-lg mb-2">Interactive Community – Discussions, Q&As, and opportunities to grow with other learners.</li>
                </ul>
                <p className="text-lg mb-4">We don’t just explain literature—we help you experience it.</p>

                {/* TEAM */}
                <h2 id="our-team" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Our Team</h2>
                <p className="text-lg mb-4">
                  The Literary Palace team is built by educators, writers, and literature specialists who are passionate about words and stories. Our contributors include graduates from leading universities, researchers in English literature, and experienced teachers who know the challenges students face.
                </p>
                <p className="text-lg mb-4">
                  We also collaborate with scholars and learners worldwide to make sure our content is authentic, updated, and relevant.
                </p>

                {/* TRUST */}
                <h2 id="trust-integrity" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Trust & Academic Integrity
                </h2>
                <p className="text-lg mb-4">
                  We believe in honesty, transparency, and respect for learning. All our resources are:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Plagiarism-free</li>
                  <li className="text-lg mb-2">Fact-checked and research-based</li>
                  <li className="text-lg mb-2">Regularly updated with new insights</li>
                  <li className="text-lg mb-2">Made for learning, not for shortcuts</li>
                </ul>
                <p className="text-lg mb-4">
                  Our guides are designed to support education, not replace it. We encourage students to use our work as a tool for growth—not as an alternative to original reading or research.
                </p>

                {/* CONNECT */}
                <h2 id="stay-connected" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Stay Connected
                </h2>
                <p className="text-lg mb-4">We’re not just a website—we’re a growing community of readers, students, and teachers. Stay in touch with us:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Facebook: @literarypalace</li>
                  <li className="text-lg mb-2">Instagram: @literarypalace</li>
                  <li className="text-lg mb-2">Twitter/X: @literarypalace_</li>
                  <li className="text-lg mb-2">YouTube: @literarypalace</li>
                  <li className="text-lg mb-2">WhatsApp Channel: Join Here</li>
                  <li className="text-lg mb-2">Email: official@literarypalace.com</li>
                </ul>
                <p className="text-lg mb-4">Share your feedback, suggest topics, or simply join us in celebrating literature.</p>

                {/* FINAL */}
                <h2 id="place-trust" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  A Place You Can Trust
                </h2>
                <p className="text-lg mb-4">
                  Literary Palace is built on expertise, driven by passion, and guided by a commitment to real learning. Here, books meet clarity, ideas meet context, and readers become thinkers.
                </p>
                <p className="text-lg mb-4">
                  Come read with us.<br />Come Learn with us.<br />Come grow with us at Literary Palace.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
