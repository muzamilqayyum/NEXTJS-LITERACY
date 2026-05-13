"use client";

const ContactUsHero = () => {
  return (
    <section
      className="
        relative text-white 
        flex items-center justify-center 
        min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]
        text-center
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(7, 41, 78, 0.8) 0%, 
            rgba(10, 58, 107, 0.8) 50%, 
            rgba(7, 41, 78, 0.8) 100%
            ), 
            url('/images/LiteraturePageHeroBg.png')
          `,
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24 flex flex-col items-center">

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-heading-noto mb-3 sm:mb-4 md:mb-6">
          <span className="text-white font-merriweather">Contact Us</span>
        </h1>

        {/* Tagline */}
        <p className="
          text-sm sm:text-base md:text-lg lg:text-xl
          text-white leading-relaxed text-center
          whitespace-normal sm:whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap
        ">
          We&rsquo;re here to help. Reach out to us anytime for quick and reliable support.
        </p>

      </div>
    </section>
  );
};

export default ContactUsHero;
