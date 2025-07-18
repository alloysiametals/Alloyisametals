import React from 'react';
import contactBgImage from '../assets/bg.jpg'; // You can change this to a relevant product banner image

interface ProductBannerProps {
  backgroundImage?: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({ backgroundImage = contactBgImage }) => {
  return (
    <section className="relative h-96 md:h-[32rem] flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark1/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white animate-fade-in-up">
          PRODUCTS
        </h1>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProductBanner;
