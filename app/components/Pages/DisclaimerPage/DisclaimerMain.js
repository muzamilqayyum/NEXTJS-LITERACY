"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "general-disclaimer", label: "General Disclaimer" },
  { id: "content-accuracy", label: "Content Accuracy" },
  { id: "educational-purpose", label: "Educational Purpose" },
  { id: "external-links", label: "External Links" },
  { id: "user-responsibility", label: "User Responsibility" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "changes-to-disclaimer", label: "Changes to Disclaimer" },
  { id: "contact-information", label: "Contact Information" },
];

const DisclaimerMain = () => {
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

              <div className="disclaimer mb-30">

                {/* GENERAL DISCLAIMER */}
                <h1 id="general-disclaimer" className="text-3xl font-bold mb-6 text-[#07294e]">
                  General Disclaimer
                </h1>
                <p className="text-lg mb-4">
                  The information provided on Literary Palace is for general informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                </p>
                <p className="text-lg mb-4">
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>

                {/* CONTENT ACCURACY */}
                <h2 id="content-accuracy" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Content Accuracy</h2>
                <p className="text-lg mb-4">
                  Literary Palace provides literary analysis, study guides, and educational content based on established literary works and scholarly interpretations. However, interpretations of literature can vary, and our content represents our analysis and understanding at the time of publication.
                </p>
                <p className="text-lg mb-4">
                  We do not guarantee that our content is error-free, complete, or up-to-date. Literature is subject to ongoing scholarly debate, and new interpretations may emerge over time.
                </p>

                {/* EDUCATIONAL PURPOSE */}
                <h2 id="educational-purpose" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Educational Purpose</h2>
                <p className="text-lg mb-4">Our content is intended for educational and informational purposes only. It should not be considered as professional advice or a substitute for:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Academic research or scholarly work</li>
                  <li className="text-lg mb-2">Professional literary criticism</li>
                  <li className="text-lg mb-2">Legal or medical advice</li>
                  <li className="text-lg mb-2">Financial or investment guidance</li>
                  <li className="text-lg mb-2">Any other professional services</li>
                </ul>
                <p className="text-lg mb-4">Always consult with qualified professionals for advice in these areas.</p>

                {/* EXTERNAL LINKS */}
                <h2 id="external-links" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">External Links</h2>
                <p className="text-lg mb-4">
                  Literary Palace may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                <p className="text-lg mb-4">
                  The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                </p>

                {/* USER RESPONSIBILITY */}
                <h2 id="user-responsibility" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">User Responsibility</h2>
                <p className="text-lg mb-4">
                  By using Literary Palace, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">You are responsible for your own use of the website and any content you access</li>
                  <li className="text-lg mb-2">You will use the information appropriately and in accordance with applicable laws</li>
                  <li className="text-lg mb-2">You will not rely solely on our content for academic or professional purposes without verification</li>
                  <li className="text-lg mb-2">You understand that literature study requires critical thinking and personal analysis</li>
                </ul>

                {/* LIMITATION OF LIABILITY */}
                <h2 id="limitation-of-liability" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Limitation of Liability</h2>
                <p className="text-lg mb-4">
                  In no event shall Literary Palace, its directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website or any content therein.
                </p>
                <p className="text-lg mb-4">
                  This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                </p>

                {/* CHANGES TO DISCLAIMER */}
                <h2 id="changes-to-disclaimer" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Changes to Disclaimer</h2>
                <p className="text-lg mb-4">
                  We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of Literary Palace after any such changes constitutes your acceptance of the new disclaimer.
                </p>
                <p className="text-lg mb-4">
                  We encourage you to review this disclaimer periodically to stay informed of any updates.
                </p>

                {/* CONTACT INFORMATION */}
                <h2 id="contact-information" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">Contact Information</h2>
                <p className="text-lg mb-4">If you have any questions about this disclaimer, please contact us at:</p>
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

export default DisclaimerMain;