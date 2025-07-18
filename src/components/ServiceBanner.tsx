import React from 'react';
import bgImage from '../assets/bg.jpg';

const ServicesBanner: React.FC = () => {
  return (
    <section 
      className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(71, 68, 75, 0.75), rgba(71, 68, 75, 0.75)), url(${bgImage})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark1/60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-4 md:mb-6 leading-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Our <span className="text-primary animate-pulse">Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-lato font-light leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
            Comprehensive solutions tailored to meet your business needs
          </p>
          <div className="mt-4 md:mt-8 w-16 sm:w-24 h-1 bg-primary mx-auto rounded-full opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] hover:w-20 sm:hover:w-32 transition-all duration-500"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 border-2 border-primary opacity-30 rounded-full animate-pulse hover:opacity-60 transition-opacity duration-300"></div>
      <div 
        className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 border-2 border-primary opacity-20 rounded-full animate-pulse hover:opacity-50 transition-opacity duration-300"
        style={{ animationDelay: '1s' }}
      ></div>
      <div 
        className="absolute top-1/2 left-10 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full opacity-40 animate-bounce hover:opacity-80 transition-opacity duration-300"
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full opacity-60 animate-bounce hover:opacity-100 transition-opacity duration-300"
        style={{ animationDelay: '1.5s' }}
      ></div>

      {/* Animated Sparks */}
      <div 
        className="absolute top-12 sm:top-20 right-12 sm:right-20 w-1 h-1 bg-primary rounded-full opacity-70 animate-ping"
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute bottom-12 sm:bottom-20 left-1/3 w-1 h-1 bg-primary rounded-full opacity-50 animate-ping"
        style={{ animationDelay: '3s' }}
      ></div>
      <div 
        className="absolute top-1/4 left-1/2 w-1 h-1 bg-primary rounded-full opacity-60 animate-ping"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-12 sm:top-16 right-1/4 w-3 sm:w-4 h-3 sm:h-4 border border-primary opacity-20 rotate-45 animate-[spin_8s_linear_infinite]"></div>
      <div 
        className="absolute bottom-16 sm:bottom-24 left-1/4 w-4 sm:w-6 h-4 sm:h-6 border border-primary opacity-15 animate-[spin_8s_linear_infinite]"
        style={{ animationDelay: '2s' }}
      ></div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
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

export default ServicesBanner;
