import React from "react";
import { Link } from "react-router-dom";

import NickelImg from "../assets/Hastelloy C-276.jpg";
import StainlessImg from "../assets/bg4.jpg";
import DuplexImg from "../assets/Hastelloy X.jpg";
import AerospaceImg from "../assets/aerospace.jpg";
import TitaniumImg from "../assets/Inconel 625 625LCF.jpg";
import CarbonImg from "../assets/Inconel 718.jpg";
import AluminumImg from "../assets/Inconel 718.jpg";

interface Category {
  title: string;
  image: string;
  hoverBorder: string;
  accent: string;
  description: string;
  route: string;
}

const categories: Category[] = [
  { 
    title: "Nickel Alloys", 
    image: NickelImg, 
    hoverBorder: "hover:border-yellow-500",
    accent: "bg-yellow-500",
    description: "Superior corrosion resistance",
    route: "/nickel-alloys"
  },
  { 
    title: "Stainless Steel", 
    image: StainlessImg, 
    hoverBorder: "hover:border-green-500",
    accent: "bg-green-500",
    description: "Versatile and durable solutions",
    route: "/products/stainless-steel"
  },
  { 
    title: "Duplex & Super Alloys", 
    image: DuplexImg, 
    hoverBorder: "hover:border-pink-500",
    accent: "bg-pink-500",
    description: "High strength applications",
    route: "/products/duplex-super-alloys"
  },
  { 
    title: "Aerospace Alloys", 
    image: AerospaceImg, 
    hoverBorder: "hover:border-purple-500",
    accent: "bg-purple-500",
    description: "Precision engineering materials",
    route: "/products/aerospace-alloys"
  },
  { 
    title: "Titanium Alloys", 
    image: TitaniumImg, 
    hoverBorder: "hover:border-blue-500",
    accent: "bg-blue-500",
    description: "Lightweight yet strong",
    route: "/products/titanium-alloys"
  },
  { 
    title: "Carbon & Alloy Steel", 
    image: CarbonImg, 
    hoverBorder: "hover:border-red-500",
    accent: "bg-red-500",
    description: "Industrial grade performance",
    route: "/products/carbon-alloy-steel"
  },
  { 
    title: "Aluminum Alloys", 
    image: AluminumImg, 
    hoverBorder: "hover:border-orange-500",
    accent: "bg-orange-500",
    description: "Lightweight excellence",
    route: "/products/aluminum-alloys"
  },
];

const KeyProductCategories: React.FC = () => {
  return (
    <section className="bg-white text-[#1e1e1e] px-6 py-20 font-lato">
      <div>
        {/* Title Section */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl md:text-3xl font-montserrat font-bold mb-4 text-gray-900">
            Key Product Categories
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Engineered for excellence across industries — from aerospace to defense.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((item, idx) => (
            <Link
              key={idx}
              to={item.route}
              className={`group block relative overflow-hidden bg-white border border-gray-200 
                         transition-all duration-300 hover:shadow-lg cursor-pointer 
                         ${item.hoverBorder} hover:border-2`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 
                           group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold font-montserrat text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProductCategories;
