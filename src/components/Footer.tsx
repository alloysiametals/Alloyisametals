import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const productCategories = [
    { name: "Nickel Alloys", path: "/nickel-alloys" },
    { name: "Stainless Steel", path: "/products/stainless-steel" },
    { name: "Austenitic Stainless & Duplex Alloys", path: "/austenitic-stainless-duplex-alloys" },
    { name: "Aerospace Alloys", path: "/aerospace-alloys" },
    { name: "Titanium Alloys", path: "/products/titanium-alloys" },
    { name: "Other Miscellaneous Alloys", path: "/products/other-miscellaneous-alloys" },
  ];

  return (
    <footer className="bg-dark1 text-gray-200 py-16 px-6 font-lato">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="Alloysia Metals Logo"
                className="h-12 w-auto object-contain mb-4"
              />
              <h3 className="text-white font-montserrat text-xl font-bold">
                Alloysia Metals
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading provider of premium metal solutions with decades of expertise
              in quality manufacturing and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/alloysia-metals"
                className="w-10 h-10 bg-dark2 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-montserrat text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Products", "Contact"].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page === "Home" ? "" : page.toLowerCase()}`}
                    onClick={handleScrollToTop}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-montserrat text-lg">
              Categories
            </h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    onClick={handleScrollToTop}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-montserrat text-lg">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3 flex-shrink-0"></i>
                <div className="text-gray-400 leading-relaxed">
                  2001, Shanti Kamal Wing A<br />
                  Dr Babasaheb Ambedkar Marg<br />
                  Chinchpokli East, Mumbai, Maharashtra, 400012
                </div>
              </div>

              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3 flex-shrink-0"></i>
                <a
                  href="tel:+91004965999"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  +91-9004965999
                </a>
              </div>

              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3 flex-shrink-0"></i>
                <a
                  href="mailto:sales@alloysiametals.com"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  sales@alloysiametals.com
                </a>
              </div>

              <div className="flex items-center">
                <i className="fas fa-clock text-primary mr-3 flex-shrink-0"></i>
                <div className="text-gray-400">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark2 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Alloysia Metals. All rights reserved.
            </div>

            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300 text-sm group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
