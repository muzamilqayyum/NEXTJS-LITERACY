"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "how-we-use-cookies", label: "How We Use Cookies" },
  { id: "types-of-cookies", label: "Types of Cookies" },
  { id: "third-party-cookies", label: "Third-Party Cookies" },
  { id: "managing-cookies", label: "Managing Cookies" },
  { id: "cookie-retention", label: "Cookie Retention" },
  { id: "updates-to-policy", label: "Updates to Policy" },
  { id: "contact-us", label: "Contact Us" },
];

const CookiePolicyMain = () => {
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

              <div className="cookie-policy mb-30">

                {/* WHAT ARE COOKIES */}
                <h1 id="what-are-cookies" className="text-3xl font-bold mb-6 text-[#07294e]">
                  What Are Cookies
                </h1>
                <p className="text-lg mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our website. They allow us to remember your preferences, improve your browsing experience, and provide personalized content.
                </p>
                <p className="text-lg mb-4">
                  Cookies do not contain personal information such as your name or email address, but they can help us identify your device and track how you use our website.
                </p>

                {/* HOW WE USE COOKIES */}
                <h2 id="how-we-use-cookies" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">How We Use Cookies</h2>
                <p className="text-lg mb-4">Literary Palace uses cookies for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Essential Cookies:</strong> Required for the website to function properly, such as remembering your login status and preferences.</li>
                  <li className="text-lg mb-2"><strong>Analytics Cookies:</strong> Help us understand how visitors use our website, which pages are most popular, and how we can improve our content.</li>
                  <li className="text-lg mb-2"><strong>Functional Cookies:</strong> Remember your choices and preferences to provide enhanced features and personalized content.</li>
                  <li className="text-lg mb-2"><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.</li>
                </ul>

                {/* TYPES OF COOKIES */}
                <h2 id="types-of-cookies" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Types of Cookies We Use</h2>
                <p className="text-lg mb-4">We use the following types of cookies on Literary Palace:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser. They help us maintain your session and remember your actions during your visit.</li>
                  <li className="text-lg mb-2"><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences and provide personalized experiences.</li>
                  <li className="text-lg mb-2"><strong>First-party Cookies:</strong> Cookies set directly by Literary Palace on your device.</li>
                  <li className="text-lg mb-2"><strong>Third-party Cookies:</strong> Cookies set by third-party services we use, such as analytics providers or social media platforms.</li>
                </ul>

                {/* THIRD-PARTY COOKIES */}
                <h2 id="third-party-cookies" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Third-Party Cookies</h2>
                <p className="text-lg mb-4">
                  We may use third-party services that set their own cookies on your device. These services include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Google Analytics:</strong> For website analytics and performance monitoring.</li>
                  <li className="text-lg mb-2"><strong>Social Media Platforms:</strong> For social sharing buttons and integration with platforms like Facebook, Twitter, and Instagram.</li>
                  <li className="text-lg mb-2"><strong>Content Delivery Networks:</strong> To improve website loading speeds and performance.</li>
                </ul>
                <p className="text-lg mb-4">
                  These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they use cookies.
                </p>

                {/* MANAGING COOKIES */}
                <h2 id="managing-cookies" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Managing Cookies</h2>
                <p className="text-lg mb-4">
                  You have control over cookies and can manage them through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">View what cookies are stored on your device</li>
                  <li className="text-lg mb-2">Delete existing cookies</li>
                  <li className="text-lg mb-2">Block cookies from specific websites</li>
                  <li className="text-lg mb-2">Block all cookies from being placed</li>
                  <li className="text-lg mb-2">Clear cookies when you close your browser</li>
                </ul>
                <p className="text-lg mb-4">
                  Please note that disabling cookies may affect the functionality of our website and limit your user experience. Some features may not work properly without cookies.
                </p>

                {/* COOKIE RETENTION */}
                <h2 id="cookie-retention" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Cookie Retention</h2>
                <p className="text-lg mb-4">
                  The length of time a cookie remains on your device depends on its type:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li className="text-lg mb-2"><strong>Persistent Cookies:</strong> Remain until their expiration date or until you delete them</li>
                  <li className="text-lg mb-2"><strong>Essential Cookies:</strong> Typically expire after 1 year</li>
                  <li className="text-lg mb-2"><strong>Analytics Cookies:</strong> Usually expire after 2 years</li>
                </ul>

                {/* UPDATES TO POLICY */}
                <h2 id="updates-to-policy" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Updates to This Policy</h2>
                <p className="text-lg mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes by posting the updated policy on our website.
                </p>
                <p className="text-lg mb-4">
                  Your continued use of Literary Palace after any such changes constitutes your acceptance of the updated Cookie Policy.
                </p>

                {/* CONTACT US */}
                <h2 id="contact-us" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Contact Us</h2>
                <p className="text-lg mb-4">If you have any questions about our use of cookies, please contact us at:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Email: official@literarypalace.com</li>
                  <li className="text-lg mb-2">Address: Literary Palace, Thal University Bhakkar</li>
                </ul>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicyMain;