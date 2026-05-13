"use client";
import { useState, useEffect, useRef } from "react";
import {
  Bold,
  Italic,
  Underline,
  Link,
  List,
  ListOrdered,
  Image as ImageIcon,
  Quote,
  RotateCcw,
  RotateCw,
  Type,
} from "lucide-react";

const sections = [
  { id: "contact-literary-palace", label: "Contact Literary<br />Palace" },
  { id: "before-contact", label: "Before You<br />Contact Us" },
  { id: "troubleshoot", label: "Having Trouble<br />Downloading?" },
  { id: "how-contact", label: "How to<br />Contact Us?" },
  { id: "general-inquiries", label: "General<br />Inquiries" },
  { id: "technical-support", label: "Technical<br />Support" },
  { id: "business-inquiries", label: "Business<br />Inquiries" },
  { id: "research-articles", label: "Research Articles<br />& Academic" },
  { id: "collaborations", label: "Collaborations" },
  { id: "refund-payment", label: "Refund or<br />Payment Issues" },
  { id: "feedback", label: "Your Feedback<br />Matters" },
];

const ContactUsMain = () => {
  const editorRef = useRef(null);
  const savedSelection = useRef(null); // <-- store selection range
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    description: '',
    message: '',
    attachments: [],
  });

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const updateMessageFromEditor = () => {
    const html = editorRef.current?.innerHTML ?? '';
    const normalized = html === '<br>' ? '' : html;
    setFormData(prev => ({ ...prev, message: normalized }));
  };

  // ----- Selection helpers -----
  const saveSelection = () => {
    try {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        savedSelection.current = sel.getRangeAt(0).cloneRange();
      }
    } catch (err) {
      // ignore
    }
  };

  const restoreSelection = () => {
    try {
      const sel = window.getSelection();
      if (!sel) return;
      sel.removeAllRanges();
      if (savedSelection.current) {
        sel.addRange(savedSelection.current);
      } else {
        // place caret at end if nothing saved
        if (editorRef.current) {
          const range = document.createRange();
          range.selectNodeContents(editorRef.current);
          range.collapse(false);
          sel.addRange(range);
        }
      }
    } catch (err) {
      // ignore
    }
  };

  // Exec command that restores selection first and saves after
  const execCommandWithSync = (command, value = null) => {
    restoreSelection(); // restore cursor/selection before execCommand
    try {
      document.execCommand(command, false, value);
    } catch (err) {
      console.warn("execCommand failed:", err);
    }
    updateMessageFromEditor();
    saveSelection(); // save new state
  };

  const insertList = (ordered) => {
    restoreSelection();
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    const selectedText = range.toString();
    if (!selectedText.trim()) return;
    const lines = selectedText.split('\n').filter(line => line.trim());
    if (!lines.length) return;
    const listTag = ordered ? 'ol' : 'ul';
    const listHTML = `<${listTag}>${lines.map(line => `<li>${line.trim()}</li>`).join('')}</${listTag}>`;
    range.deleteContents();
    const fragment = range.createContextualFragment(listHTML);
    range.insertNode(fragment);
    updateMessageFromEditor();
    saveSelection();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    if (editorRef.current) {
      editorRef.current.innerHTML = '';
    }
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      description: '',
      message: '',
      attachments: [],
    });
    alert('Thank you for contacting us! We will get back to you soon.');
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
                        block w-full px-4 py-2 text-[0.85rem] text-left transition cursor-pointer
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

              <div className="contact-us-blog mb-30">

                {/* CONTACT */}
                <h1 id="contact-literary-palace" className="text-3xl font-bold mb-6 text-[#07294e]">
                  Contact Literary Palace
                </h1>
                <p className="text-lg mb-4">
                  Thank you for visiting Literary Palace, your trusted source for academic resources, study materials, and literary guidance. Whether you&rsquo;re a student, teacher, researcher, or literature enthusiast, we&rsquo;re here to help and listen.
                </p>

                <h2 id="before-contact" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Before You Contact Us
                </h2>
                <p className="text-lg mb-4">
                  We have compiled a list of frequently asked questions (FAQs) where we&rsquo;ve answered some of the most common questions. Check our FAQ page first—you might find your answer there!
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Visit our <strong>FAQ section</strong> for quick answers</li>
                  <li className="text-lg mb-2">Check our <strong>Help Center</strong> for common issues</li>
                  <li className="text-lg mb-2">Browse our <strong>Knowledge Base</strong> for tutorials</li>
                </ul>

                {/* TROUBLESHOOT */}
                <h2 id="troubleshoot" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Having Trouble Downloading a PDF or File?
                </h2>
                <p className="text-lg mb-4">
                  If you&rsquo;ve purchased a PDF or document and cannot download it, here&rsquo;s what you can try:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Clear your browser cache and cookies</li>
                  <li className="text-lg mb-2">Try a different browser or incognito mode</li>
                  <li className="text-lg mb-2">Check your email for a direct download link</li>
                  <li className="text-lg mb-2">Verify your internet connection is stable</li>
                </ul>
                <p className="text-lg mb-4">
                  If the download button doesn&rsquo;t work or the file is missing, contact our support team immediately. We&rsquo;ll investigate your order and resend the file if needed.
                </p>

                {/* HOW TO CONTACT */}
                <h2 id="how-contact" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  How to Contact Us?
                </h2>
                <p className="text-lg mb-4">
                  We encourage you to use the contact form below. Please include as much detail as possible. Our team responds to most inquiries within 24 hours. For urgent matters, please reach out over the weekend. We currently offer support via:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2"><strong>Contact Form</strong> (below) - Best for general inquiries</li>
                  <li className="text-lg mb-2"><strong>Email</strong> - For detailed issues</li>
                  <li className="text-lg mb-2"><strong>Phone</strong> - For urgent matters</li>
                </ul>

                {/* GENERAL INQUIRIES */}
                <h2 id="general-inquiries" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  General Inquiries
                </h2>
                <p className="text-lg mb-4">
                  Have a question about our services, content, resources, or how Literary Palace works? Use the contact form or email us directly at:
                </p>
                <p className="text-lg mb-4 font-semibold text-[#07294e]">Email: contact@literarypalace.com</p>

                {/* TECHNICAL SUPPORT */}
                <h2 id="technical-support" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Technical Support
                </h2>
                <p className="text-lg mb-4">
                  If you&rsquo;re facing an issue with logging in, payments, account access, or site technical issues, we&rsquo;re here to help! Please contact:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">A short description of the issue</li>
                  <li className="text-lg mb-2">Screenshots (if applicable)</li>
                  <li className="text-lg mb-2">Your browser and device information</li>
                  <li className="text-lg mb-2">Your browsing details (if you can)</li>
                </ul>
                <p className="text-lg mb-4">
                  This helps us diagnose and resolve your issue quickly and accurately.
                </p>

                {/* BUSINESS INQUIRIES */}
                <h2 id="business-inquiries" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Business Inquiries
                </h2>
                <p className="text-lg mb-4">
                  For partnership inquiries, advertising proposals, or submitting research articles please contact:
                </p>
                <p className="text-lg mb-4">
                  We review every proposal and reply within 3-5 business days if there&rsquo;s a fit with our platform and audience.
                </p>

                {/* RESEARCH ARTICLES */}
                <h2 id="research-articles" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Research Articles & Academic Collaborations
                </h2>
                <p className="text-lg mb-4">
                  Are you a scholar, researcher interested in contributing expert content, Research Articles for submission guidelines or send your pitch to our email listed below.
                </p>
                <p className="text-lg mb-4 font-semibold text-[#07294e]">Email: research@literarypalace.com</p>

                {/* COLLABORATIONS */}
                <h2 id="collaborations" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Collaborations
                </h2>
                <p className="text-lg mb-4">
                  Are you a scholar, researcher, educator, or author interested in contributing to Literary Palace? We welcome partnerships that align with our mission. Contact our team and let&rsquo;s explore opportunities together!
                </p>

                {/* REFUND */}
                <h2 id="refund-payment" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Refund or Payment Issues
                </h2>
                <p className="text-lg mb-4">
                  We do not issue refunds on most items unless there&rsquo;s a defect, duplicate purchase, or issue with the product. In case of an accidental or duplicate purchase, please contact us with your order details:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="text-lg mb-2">Order number</li>
                  <li className="text-lg mb-2">Payment receipt</li>
                  <li className="text-lg mb-2">Reason for the request</li>
                </ul>
                <p className="text-lg mb-4">
                  We review and process refund requests within 5 to 7 business days, as outlined in our Terms & Conditions.
                </p>

                {/* FEEDBACK */}
                <h2 id="feedback" className="text-2xl font-semibold mt-8 mb-4 text-[#07294e]">
                  Your Feedback Matters
                </h2>
                <p className="text-lg mb-4">
                  We&rsquo;re constantly working to improve Literary Palace if you have suggestions, criticism, or gratitude you want to share, tell us! Your feedback matters and will help us serve you better.
                </p>

              </div>

              {/* CONTACT FORM */}
              <div className="-mt-14 mb-30 p-0 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#07294e]">Contact Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#07294e] font-semibold mb-2">Enter your full name *</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#c3e26e] rounded-lg focus:outline-none focus:border-[#07294e] text-[#07294e]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#07294e] font-semibold mb-2">&nbsp;</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#c3e26e] rounded-lg focus:outline-none focus:border-[#07294e] text-[#07294e]"
                      />
                    </div>
                  </div>

                  {/* Email Row */}
                  <div>
                    <label className="block text-[#07294e] font-semibold mb-2">Your Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#c3e26e] rounded-lg focus:outline-none focus:border-[#07294e] text-[#07294e]"
                    />
                  </div>

                  {/* Subject Row */}
                  <div>
                    <label className="block text-[#07294e] font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#c3e26e] rounded-lg focus:outline-none focus:border-[#07294e] text-[#07294e]"
                    />
                  </div>

                  {/* Description Row */}
                  <div>
                    <label className="block text-[#07294e] font-semibold mb-2">Write a short title for your inquiry *</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#c3e26e] rounded-lg focus:outline-none focus:border-[#07294e] text-[#07294e]"
                    />
                  </div>

                  {/* Message Row */}
                  <div>
                    <label className="block text-[#07294e] font-semibold mb-1">Description*</label>
                    <p className="text-sm text-[#6b7280] mb-2">Please provide the details of your question or request so we can assist you accurately.</p>

                    {/* Rich text toolbar and editable message box */}
                    <div className="border border-[#c3e26e] rounded-lg">
                      <div className="rich-toolbar flex items-center justify-between px-3 py-2 bg-white border-b border-[#e6f1d6]">
                        <div className="flex items-center gap-2">
                          <Type className="text-[#07294e]" size={16} />
                          <select
                            className="text-sm px-2 py-1 border rounded text-[#07294e]"
                            onChange={(e) => execCommandWithSync('formatBlock', e.target.value)}
                            defaultValue="<p>"
                            title="Paragraph style"
                          >
                            <option value="<p>">Paragraph</option>
                            <option value="<h2>">Heading 2</option>
                            <option value="<h3>">Heading 3</option>
                            <option value="<blockquote>">Quote</option>
                          </select>
                        </div>
                        <div className="flex items-center gap-1 text-[#07294e]">
                          <button
                            type="button"
                            aria-label="Bold"
                            title="Bold"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('bold')}
                            className="rich-toolbar-button"
                          >
                            <Bold size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Italic"
                            title="Italic"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('italic')}
                            className="rich-toolbar-button"
                          >
                            <Italic size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Underline"
                            title="Underline"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('underline')}
                            className="rich-toolbar-button"
                          >
                            <Underline size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Insert link"
                            title="Insert link"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              const url = prompt('Enter URL:');
                              if (url) execCommandWithSync('createLink', url);
                            }}
                            className="rich-toolbar-button"
                          >
                            <Link size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Unordered list"
                            title="Unordered list"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => insertList(false)}
                            className="rich-toolbar-button"
                          >
                            <List size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Ordered list"
                            title="Ordered list"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => insertList(true)}
                            className="rich-toolbar-button"
                          >
                            <ListOrdered size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Insert image"
                            title="Insert image"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              const imageUrl = prompt('Enter image URL:');
                              if (imageUrl) execCommandWithSync('insertImage', imageUrl);
                            }}
                            className="rich-toolbar-button"
                          >
                            <ImageIcon size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Quote"
                            title="Quote"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('formatBlock', '<blockquote>')}
                            className="rich-toolbar-button"
                          >
                            <Quote size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Undo"
                            title="Undo"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('undo')}
                            className="rich-toolbar-button"
                          >
                            <RotateCcw size={16} />
                          </button>
                          <button
                            type="button"
                            aria-label="Redo"
                            title="Redo"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => execCommandWithSync('redo')}
                            className="rich-toolbar-button"
                          >
                            <RotateCw size={16} />
                          </button>
                        </div>
                      </div>

                      <div
                        id="rich-editor"
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={updateMessageFromEditor}
                        onMouseUp={saveSelection}
                        onKeyUp={saveSelection}
                        onBlur={saveSelection}
                        onFocus={restoreSelection}
                        role="textbox"
                        aria-label="Message"
                        className="rich-editor min-h-[160px] px-4 py-4 text-[#07294e] outline-none"
                        data-placeholder="Your Message"
                      />
                    </div>
                  </div>

                  {/* Attachments Row */}
                  <div>
                    <label className="block text-[#07294e] font-semibold mb-2">Attachments</label>
                    <div className="border-2 border-dashed border-[#c3e26e] rounded-lg p-6 text-center cursor-pointer hover:bg-[#f0f0f0] transition">
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <p className="text-[#07294e] font-semibold">Choose a file or drag and drop here</p>
                      </label>
                    </div>

                    {/* Display attached files */}
                    {formData.attachments.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {formData.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-[#f0f0f0] p-3 rounded-lg border border-[#c3e26e]"
                          >
                            <span className="text-[#07294e] font-medium truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="ml-2 text-red-500 hover:text-red-700 font-bold text-lg"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="bg-[#07294e] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#051f38] transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMain;
