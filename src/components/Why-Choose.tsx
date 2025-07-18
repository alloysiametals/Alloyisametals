import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const usps = [
  "Extensive inventory of rare alloys",
  "In-house cutting and processing capabilities",
  "Material in stock as per ASTM, AMS, and API specifications",
  "Rapid global delivery",
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 font-lato overflow-hidden">
      {/* Floating blurred circles */}
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-30 blur-3xl top-10 left-10 animate-pulse-slow" />
      <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-30 blur-2xl bottom-10 right-10 animate-pulse-slow" />

      {/* Abstract shape */}
      <svg
        className="pointer-events-none absolute -top-24 -right-20 w-52 sm:w-72 h-52 sm:h-72 opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="url(#grad1)"
          d="M43.3,-75.9C56.4,-67.1,61.7,-53.4,67.6,-40.6C73.5,-27.9,80.2,-16.1,81.1,-3.4C82,9.3,77.2,22,70,33.1C62.9,44.1,53.3,53.6,42.3,60.8C31.3,68,18.8,72.9,6.5,67.3C-5.9,61.7,-11.8,45.6,-22.1,38.9C-32.3,32.2,-46.9,34.8,-54.4,29.3C-61.9,23.8,-62.3,10.2,-59.8,-1.8C-57.3,-13.8,-51.9,-24.7,-45.7,-36.5C-39.5,-48.3,-32.5,-61,-22.1,-66.5C-11.8,-72.1,2.1,-70.6,14.7,-69.6C27.3,-68.5,38.7,-67.6,43.3,-75.9Z"
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A0FF" />
            <stop offset="100%" stopColor="#005FCC" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm tracking-wide uppercase font-semibold text-[#00A0FF] bg-blue-50 px-3 py-1 rounded-full mb-3 shadow">
            Our Strengths
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-extrabold text-gray-900 tracking-tight mb-3">
            Why Choose Us
          </h2>
          <span className="block h-1 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-[#00A0FF] to-[#005FCC] rounded-full mt-2 mx-auto animate-pulse"></span>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-medium px-2 sm:px-0 mt-4">
            Discover what makes{" "}
            <span className="text-[#00A0FF] font-semibold">Alloysia Metals</span> 
            a trusted partner in sourcing specialty materials worldwide.
          </p>
        </div>

        {/* Grid of USP cards */}
        <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {usps.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 sm:gap-5 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group animate-fade-slide-up"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#00A0FF] to-[#005FCC] flex items-center justify-center text-white text-lg sm:text-2xl shadow-md group-hover:from-[#008FE5] group-hover:to-[#004B99] transition-all duration-300">
                <FaCheckCircle aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
