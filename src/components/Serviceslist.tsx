import { Settings, Package, Zap, Wrench, BarChart3, FlaskConical, Shield, Hammer } from 'lucide-react';

import plateCuttingImage from '../assets/bg6.jpg';
import sheetCuttingImage from '../assets/bg.jpg';
import cncMachiningImage from '../assets/bg5.jpg';
import barCuttingImage from '../assets/barcutting.jpg';
import waterjetCuttingImage from '../assets/waterjet.jpg';
import tubeCuttingImage from '../assets/tube.jpg';
import inspectionImage from '../assets/bg.jpg';
import labTestingImage from '../assets/labtesting.jpg';
import forgingImage from '../assets/foging.jpg';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Plate Cutting",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Precision cutting with 17 plate saws",
      features: [
        "Cut to size blanks ±0.2mm tolerance",
        "Up to 12m length & 600mm thick",
        "Profiled shapes & rectangles",
        "Hard stamped identification"
      ],
      image: plateCuttingImage
    },
    {
      id: 2,
      title: "Cut to Size Sheet",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Aluminium, steel & titanium sheets",
      features: [
        "12m x 3m maximum size",
        "±0.1mm tolerance precision",
        "Shearing up to 5m length",
        "Vacuum handling equipment"
      ],
      image: sheetCuttingImage
    },
    {
      id: 3,
      title: "CNC Machining",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Advanced CNC facilities",
      features: [
        "Surface machining 4m x 2m",
        "Full billet preparation",
        "Drilling, tapping, counter-boring",
        "Nesting for optimization"
      ],
      image: cncMachiningImage
    },
    {
      id: 4,
      title: "Bar Cutting",
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Automatic band saws",
      features: [
        "Up to 400mm diameter",
        "±0.5mm tolerance",
        "Hard stamped billets",
        "Deburring & chamfering"
      ],
      image: barCuttingImage
    },
    {
      id: 5,
      title: "Waterjet Cutting",
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "High-precision waterjet technology",
      features: [
        "Up to 200mm thick material",
        "4m x 3m cutting bed",
        "Virtually any shape",
        "Improved material utilization"
      ],
      image: waterjetCuttingImage
    },
    {
      id: 6,
      title: "Tube Cutting",
      icon: <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Seamless tubes for applications",
      features: [
        "Precision thin wall cutting",
        "Extruded tube sawing",
        "Bore cleaning & deburring",
        "Custom packing & labelling"
      ],
      image: tubeCuttingImage
    },
    {
      id: 7,
      title: "Third Party Inspections",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Professional witness services",
      features: [
        "Independent quality verification",
        "Witness testing protocols",
        "Compliance documentation",
       
      ],
      image: inspectionImage
    },
    {
      id: 8,
      title: "NABL Lab Testing",
      icon: <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "Accredited laboratory testing",
      features: [
        "Material composition analysis",
        "Mechanical property testing",
        "Certified test reports",
      
      ],
      image: labTestingImage
    },
    {
      id: 9,
      title: "Forging",
      icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />,
      shortDesc: "High-quality forging solutions",
      features: [
        "Custom forged components",
        "Heat treatment ",
        "Precision forming processes",
        "Quality assured products"
      ],
      image: forgingImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #374151 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge manufacturing solutions delivering precision and excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative h-60 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-[1.02] bg-white"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    filter: "brightness(0.7) contrast(1.1)",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                {/* Icon */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow">
                  {service.icon}
                </div>

                {/* Basic Info */}
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm drop-shadow">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Detailed Info on Hover */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-blue-600 mb-3 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-gray-700 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionDelay: `${idx * 0.1 + 0.2}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="leading-relaxed text-left">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-10 sm:w-16 h-10 sm:h-16 bg-blue-600/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
