import React from "react";
import { Link } from "react-router-dom";

const DarkBannerCTA: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-16 sm:py-24 px-4 sm:px-6 font-sans text-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-white leading-tight">
            Discover Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Alloys Tailored for You
            </span>
          </h2>

          <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our curated selection of high-quality metal solutions or request a 
            personalized quote tailored to your specific requirements.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-10 text-gray-400 text-xs sm:text-sm">
            <div>ISO 9001:2015 Certified</div>
            <div>5+ Years Experience</div>
            <div>200+ Satisfied Clients</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
          {/* Primary Button */}
          <Link
            to="/nickel-alloys"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 shadow-2xl 
              hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-400 before:to-blue-500 
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              View Our Products
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative border-2 border-blue-500 text-blue-400 font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 
              hover:bg-blue-500 hover:text-white transition-all duration-300 w-full sm:w-auto
              before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:scale-x-0 before:origin-left 
              hover:before:scale-x-100 before:transition-transform before:duration-300 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              Request a Quote
              <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </section>
  );
};

export default DarkBannerCTA;
