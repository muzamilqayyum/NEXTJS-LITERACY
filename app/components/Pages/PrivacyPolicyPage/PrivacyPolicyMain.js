"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We<br />Collect" },
  { id: "how-we-use", label: "How We Use Your<br />Information" },
  { id: "data-security", label: "Data Security" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "third-party", label: "Third-Party<br />Services" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact-us", label: "Contact Us" },
];

const PrivacyPolicyMain = () => {
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

              <div className="privacy-policy-blog mb-30">

                {/* INTRODUCTION */}
                <h1 id="introduction" className="text-3xl font-bold mb-6 text-[#07294e]">
                  Introduction
                </h1>
                <p className="text-lg mb-4">
                  At Literary Palace, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-lg mb-4">
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our platform. Your continued use of Literary Palace indicates your acceptance of this Privacy Policy.
                </p>

                {/* INFORMATION WE COLLECT */}
                <h2 id="information-we-collect" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Information We Collect
                </h2>
                <p className="text-lg mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Personal Data:</strong> When you register, subscribe, or contact us, we may collect your name, email address, phone number, and other contact details.</li>
                  <li className="text-lg mb-2"><strong>Account Information:</strong> Login credentials, profile information, preferences, and activity history.</li>
                  <li className="text-lg mb-2"><strong>Payment Information:</strong> Credit card details and billing information (processed securely through third-party payment gateways).</li>
                  <li className="text-lg mb-2"><strong>Usage Data:</strong> Pages visited, time spent, links clicked, and interactions with our content.</li>
                  <li className="text-lg mb-2"><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                  <li className="text-lg mb-2"><strong>Communication Data:</strong> Messages, feedback, and inquiries you send to us.</li>
                </ul>

                {/* HOW WE USE */}
                <h2 id="how-we-use" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  How We Use Your Information
                </h2>
                <p className="text-lg mb-4">We use the information we collect for various purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">To provide, maintain, and improve our services.</li>
                  <li className="text-lg mb-2">To process transactions and send transaction confirmations.</li>
                  <li className="text-lg mb-2">To send promotional emails, newsletters, and updates (with your consent).</li>
                  <li className="text-lg mb-2">To respond to your inquiries and provide customer support.</li>
                  <li className="text-lg mb-2">To personalize your experience and tailor content to your interests.</li>
                  <li className="text-lg mb-2">To analyze usage patterns and improve our website design and functionality.</li>
                  <li className="text-lg mb-2">To enforce our terms of service and other agreements.</li>
                  <li className="text-lg mb-2">To comply with legal obligations and protect our rights.</li>
                </ul>

                {/* DATA SECURITY */}
                <h2 id="data-security" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Data Security
                </h2>
                <p className="text-lg mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">SSL/TLS encryption for secure data transmission.</li>
                  <li className="text-lg mb-2">Secure password storage using industry-standard hashing.</li>
                  <li className="text-lg mb-2">Regular security audits and vulnerability assessments.</li>
                  <li className="text-lg mb-2">Limited access to personal data by authorized personnel only.</li>
                </ul>
                <p className="text-lg mb-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security.
                </p>

                {/* COOKIES */}
                <h2 id="cookies" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Cookies & Tracking Technologies
                </h2>
                <p className="text-lg mb-4">
                  Literary Palace uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Remember your preferences and login information.</li>
                  <li className="text-lg mb-2">Track website usage and performance.</li>
                  <li className="text-lg mb-2">Deliver personalized content and advertisements.</li>
                  <li className="text-lg mb-2">Improve our services based on your behavior.</li>
                </ul>
                <p className="text-lg mb-4">
                  You can control cookie settings through your browser preferences. Disabling cookies may limit certain site functionality.
                </p>

                {/* THIRD-PARTY */}
                <h2 id="third-party" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Third-Party Services
                </h2>
                <p className="text-lg mb-4">
                  We may use third-party service providers to assist with our operations, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Payment processors for secure transaction handling.</li>
                  <li className="text-lg mb-2">Analytics platforms to understand user behavior.</li>
                  <li className="text-lg mb-2">Email service providers for communications.</li>
                  <li className="text-lg mb-2">Hosting providers for website infrastructure.</li>
                </ul>
                <p className="text-lg mb-4">
                  These third parties are contractually obligated to use your data only as necessary to provide services and to maintain confidentiality. We recommend reviewing their privacy policies as well.
                </p>

                {/* YOUR RIGHTS */}
                <h2 id="your-rights" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Your Rights
                </h2>
                <p className="text-lg mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
                  <li className="text-lg mb-2"><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data.</li>
                  <li className="text-lg mb-2"><strong>Right to Erasure:</strong> You can request deletion of your personal data under certain circumstances.</li>
                  <li className="text-lg mb-2"><strong>Right to Restrict Processing:</strong> You can limit how we process your data.</li>
                  <li className="text-lg mb-2"><strong>Right to Withdraw Consent:</strong> You can withdraw consent for data processing at any time.</li>
                  <li className="text-lg mb-2"><strong>Right to Opt-Out:</strong> You can unsubscribe from promotional communications.</li>
                </ul>
                <p className="text-lg mb-4">
                  To exercise any of these rights, please contact us using the information provided in the Contact Us section.
                </p>

                {/* CONTACT US */}
                <h2 id="contact-us" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Contact Us
                </h2>
                <p className="text-lg mb-4">
                  If you have questions about this Privacy Policy, your data, or our privacy practices, please contact us at:
                </p>
                <ul className="list-none mb-4">
                  <li className="text-lg mb-2"><strong>Email:</strong> privacy@literarypalace.com</li>
                  <li className="text-lg mb-2"><strong>Official Email:</strong> official@literarypalace.com</li>
                  <li className="text-lg mb-2"><strong>Address:</strong> Literary Palace, [Your Address Here]</li>
                </ul>
                <p className="text-lg mb-4">
                  We will respond to your inquiry within 30 days. Thank you for trusting Literary Palace with your information.
                </p>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyMain;
