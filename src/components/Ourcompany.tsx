import { useState, useEffect } from "react";

const OurCompany = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-dark1 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            
            {/* Title Section */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="relative">
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  Our
                </h1>
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  Company
                </h1>

                {/* Accent line */}
                <div
                  className={`mt-6 sm:mt-8 flex items-center justify-center lg:justify-start transition-all duration-1000 delay-400 ${
                    isVisible
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                >
                  <div className="h-1 sm:h-2 w-20 sm:w-32 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                <p>
                  <span className="text-white font-medium">
                    Alloysia Metals
                  </span>{" "}
                  is a trusted supplier and stockist of high-performance metals
                  including Nickel, Cobalt, Austenitic Stainless Steel, and
                  Titanium alloy grades. We specialize in materials that are
                  corrosion-resistant, high-temperature tolerant, and
                  engineered for critical industries like{" "}
                  <span className="text-white font-medium">
                    aerospace, petrochemical, oil & gas, chemical,
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-medium">
                    pharmaceutical
                  </span>{" "}
                  sectors.
                  <br />
                  <br />
                  Established in{" "}
                  <span className="text-white font-medium">2023 in India</span>,
                  Alloysia Metals was founded to meet the rising global demand
                  for Nickel Alloy raw materials, in accordance with{" "}
                  <span className="text-white font-medium">ASTM, AMS,</span> and{" "}
                  <span className="text-white font-medium">API</span> standards.
                  Our extensive inventory includes sheets, plates, round bars,
                  pipes, and tubes—ensuring we can fulfill both standard and
                  custom size requirements with rapid turnaround.
                  <br />
                  <br />
                  Our in-house processing capabilities—shearing, band sawing,
                  abrasive cutting, and water jet cutting—allow us to prepare
                  and dispatch material as quickly as possible. With quality
                  and reliability at the heart of everything we do, Alloysia
                  Metals is committed to delivering precision materials and
                  building long-term partnerships across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
