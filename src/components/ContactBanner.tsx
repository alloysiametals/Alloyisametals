import React from 'react';
import contactBgImage from '../assets/contact.jpg';

interface ContactBannerProps {
  backgroundImage?: string;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  backgroundImage = contactBgImage,
}) => {
  return (
    <section className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark1/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white animate-fade-in-up">
          CONTACT US
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

export default ContactBanner;
