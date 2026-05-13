"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "acceptance-of-terms", label: "Acceptance of Terms" },
  { id: "use-of-service", label: "Use of Service" },
  { id: "user-accounts", label: "User Accounts" },
  { id: "content-ownership", label: "Content Ownership" },
  { id: "prohibited-uses", label: "Prohibited Uses" },
  { id: "termination", label: "Termination" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes-to-terms", label: "Changes to Terms" },
  { id: "contact-information", label: "Contact Information" },
];

const TermsAndConditionsMain = () => {
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

              <div className="terms-and-conditions mb-30">

                {/* INTRODUCTION */}
                <h1 id="introduction" className="text-3xl font-bold mb-6 text-[#07294e]">
                  Introduction
                </h1>
                <p className="text-lg mb-4">
                  Welcome to Literary Palace. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, services, and any content provided by Literary Palace. By accessing or using our platform, you agree to be bound by these Terms.
                </p>
                <p className="text-lg mb-4">
                  If you do not agree to these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of the changes.
                </p>

                {/* ACCEPTANCE */}
                <h2 id="acceptance-of-terms" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Acceptance of Terms</h2>
                <p className="text-lg mb-4">
                  By using Literary Palace, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all users, including visitors, registered users, and subscribers.
                </p>

                {/* USE OF SERVICE */}
                <h2 id="use-of-service" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Use of Service</h2>
                <p className="text-lg mb-4">Literary Palace provides educational content, study guides, and community features for literature enthusiasts. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Access our content for personal, educational, or professional use.</li>
                  <li className="text-lg mb-2">Share content with proper attribution.</li>
                  <li className="text-lg mb-2">Respect intellectual property rights.</li>
                </ul>

                {/* USER ACCOUNTS */}
                <h2 id="user-accounts" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">User Accounts</h2>
                <p className="text-lg mb-4">
                  To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                <p className="text-lg mb-4">
                  You agree to provide accurate and complete information when creating an account and to update it as necessary.
                </p>

                {/* CONTENT OWNERSHIP */}
                <h2 id="content-ownership" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Content Ownership</h2>
                <p className="text-lg mb-4">
                  All content on Literary Palace, including text, images, videos, and study guides, is owned by Literary Palace or our licensors and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-lg mb-4">
                  You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>

                {/* PROHIBITED USES */}
                <h2 id="prohibited-uses" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Prohibited Uses</h2>
                <p className="text-lg mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Use our services for any illegal or unauthorized purpose.</li>
                  <li className="text-lg mb-2">Violate any laws or regulations.</li>
                  <li className="text-lg mb-2">Infringe on the rights of others.</li>
                  <li className="text-lg mb-2">Distribute harmful or malicious content.</li>
                  <li className="text-lg mb-2">Attempt to gain unauthorized access to our systems.</li>
                </ul>

                {/* TERMINATION */}
                <h2 id="termination" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Termination</h2>
                <p className="text-lg mb-4">
                  We reserve the right to terminate or suspend your account and access to our services at our discretion, without prior notice, for conduct that violates these Terms or is harmful to other users or our platform.
                </p>

                {/* DISCLAIMER */}
                <h2 id="disclaimer" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Disclaimer</h2>
                <p className="text-lg mb-4">
                  Literary Palace provides content for educational purposes. While we strive for accuracy, we do not guarantee the completeness or reliability of our content. Use at your own risk.
                </p>

                {/* LIMITATION OF LIABILITY */}
                <h2 id="limitation-of-liability" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Limitation of Liability</h2>
                <p className="text-lg mb-4">
                  In no event shall Literary Palace be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                </p>

                {/* GOVERNING LAW */}
                <h2 id="governing-law" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Governing Law</h2>
                <p className="text-lg mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>

                {/* CHANGES TO TERMS */}
                <h2 id="changes-to-terms" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Changes to Terms</h2>
                <p className="text-lg mb-4">
                  We may update these Terms from time to time. We will notify users of significant changes via email or through our website. Your continued use after changes constitutes acceptance.
                </p>

                {/* CONTACT INFORMATION */}
                <h2 id="contact-information" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Contact Information</h2>
                <p className="text-lg mb-4">If you have any questions about these Terms, please contact us at:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Email: official@literarypalace.com</li>
                  <li className="text-lg mb-2">Address: [Your Address]</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsMain;