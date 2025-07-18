import React, { useState, useEffect, useRef } from "react";

import OilGasImg from "../assets/oil gas.jpg";
import AerospaceImg from "../assets/aerospace.jpg";
import ChemicalImg from "../assets/chemical.jpg";
import PharmaImg from "../assets/pharama.jpg";
import DefenceImg from "../assets/bg5.jpg";
import NuclearImg from "../assets/bg6.jpg";
import PumpsValvesImg from "../assets/pumps.jpg";
import ProcessEquipImg from "../assets/bg2.jpg";
import PowerGenImg from "../assets/power.jpg";

// Counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

// Stats
const statsData = [
  { number: 200, suffix: "+", label: "Clients Served" },
  { number: 25, suffix: "+", label: "Countries Reached" },
  { number: 15, suffix: "+", label: "Industries Covered" },
  { number: 99, suffix: "%", label: "Customer Satisfaction" },
];

// Industry data
const industries = [
  { title: "Oil & Gas", image: OilGasImg },
  { title: "Aerospace", image: AerospaceImg },
  { title: "Chemical Manufacturing", image: ChemicalImg },
  { title: "Pharmaceutical Manufacturing", image: PharmaImg },
  { title: "Defence Manufacturing", image: DefenceImg },
  { title: "Nuclear Manufacturing", image: NuclearImg },
  { title: "Pumps & Valves", image: PumpsValvesImg },
  { title: "Process Equipment", image: ProcessEquipImg },
  { title: "Power Generation", image: PowerGenImg },
];

// Card
const IndustryCard: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => (
  <div
    className="h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden relative group shadow-md sm:shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300" />
    <div className="absolute inset-0 flex items-center justify-center text-center px-3">
      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold font-montserrat tracking-wide">
        {title}
      </h3>
    </div>
  </div>
);

// Stat
const AnimatedStat: React.FC<{
  number: number;
  suffix: string;
  label: string;
}> = ({ number, suffix, label }) => {
  const { count, ref } = useCounter(number);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 font-montserrat">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300 text-xs sm:text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};

// Section
const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-dark1 text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 font-lato">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Industries We Serve
            </span>
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Global Expertise Across Sectors
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We serve a wide range of industries all over the world, delivering top-quality materials and components to support mission-critical operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-dark2 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
