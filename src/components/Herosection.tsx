import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";


import img1 from '../assets/bg6.jpg';
import img2 from '../assets/bg5.jpg';
import img3 from '../assets/bg2.jpg';

interface Banner {
  img: string;
  titleSmall: string;
  titleBig: string;
  description: string;
}

const banners: Banner[] = [
  {
    img: img1,
    titleSmall: 'Experts in',
    titleBig: 'High-Performance Alloys',
    description: `Alloysia Metals is a trusted distributor of high-temperature, corrosion-resistant, and controlled-expansion Nickel, Cobalt, Titanium, and Austenitic Stainless Steel alloys. We deliver quality materials globally with quick turnaround times.`,
  },
  {
    img: img2,
    titleSmall: 'Serving Critical',
    titleBig: 'Industries Worldwide',
    description: `With an extensive inventory of sheets, plates, bars, pipes & tubes, we support aerospace, petrochemical, oil & gas, chemical, and pharmaceutical industries with fast, reliable supply of hard-to-find metals.`,
  },
  {
    img: img3,
    titleSmall: 'Serving Critical',
    titleBig: 'Industries Worldwide',
    description: `With an extensive inventory of sheets, plates, bars, pipes & tubes, we support aerospace, petrochemical, oil & gas, chemical, and pharmaceutical industries with fast, reliable supply of hard-to-find metals.`,
  },
];

const BannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: () => (
      <div className="w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full bg-white bg-opacity-60 hover:bg-opacity-100 transition-all duration-300 cursor-pointer"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <>
      <style>{`
        .custom-dots { bottom: 15px !important; display: flex !important; justify-content: center !important; list-style: none !important; padding: 0 !important; margin: 0 !important; }
        .custom-dots li.slick-active div { background-color: rgba(255,255,255,1) !important; transform: scale(1.3); }
        @media (min-width: 640px) { .custom-dots { bottom: 20px !important; } .custom-dots li.slick-active div { transform: scale(1.4); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-slide-in-up { animation: slideInUp 1s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 1s ease-out 0.3s forwards; }
        .animate-slide-in-right { animation: slideInRight 1s ease-out 0.6s forwards; }
        .animate-fade-in-scale { animation: fadeInScale 1.2s ease-out forwards; }
        .hover-grow:hover { transform: scale(1.05) translateY(-2px); }
        .parallax-bg { transform: scale(1.1); transition: transform 8s ease-out; }
        .slide-active .parallax-bg { transform: scale(1); }
        .text-content { opacity: 0; }
        .slide-active .text-content { opacity: 1; }
        .floating-particles { position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
        .particle { position: absolute; background: rgba(255, 255, 255, 0.1); border-radius: 50%; animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; } 10%, 90% { opacity: 1; } 100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; } }
        .title-small { color: #00A0FF !important; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 160, 255, 0.3) !important; font-weight: 600 !important; }
        .title-big { color: #FFFFFF !important; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(255, 255, 255, 0.2) !important; font-weight: 700 !important; }
        .description-text { color: #F8F9FA !important; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important; background: rgba(0, 0, 0, 0.4) !important; backdrop-filter: blur(8px) !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; }
        .cta-button { background: #00A0FF !important; color: #FFFFFF !important; border: 2px solid #FFFFFF !important; font-weight: 600 !important; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important; }
        .cta-button:hover { background: #0080CC !important; transform: scale(1.05) translateY(-2px) !important; box-shadow: 0 10px 25px rgba(0, 160, 255, 0.4) !important; }
      `}</style>

      <div className={`relative w-full h-screen overflow-hidden ${isLoaded ? 'animate-fade-in-scale' : ''}`}>
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className={`relative w-full h-screen ${index === currentSlide ? 'slide-active' : ''}`}>
              <div className="floating-particles">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      animationDelay: `${Math.random() * 6}s`,
                      animationDuration: `${Math.random() * 4 + 4}s`
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={banner.img}
                  alt={banner.titleBig}
                  className="parallax-bg w-full h-full object-cover z-0 filter brightness-90"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-gray-900/50 to-black/70 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent z-15"></div>

              <div className="relative z-20 flex flex-col justify-center items-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto w-full">
                <div className={`text-content ${index === currentSlide ? 'animate-slide-in-left' : ''} w-full`}>
                  <h2 className="title-small text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider mb-3 hover-grow">
                    {banner.titleSmall}
                  </h2>
                </div>
                <div className={`text-content ${index === currentSlide ? 'animate-slide-in-up' : ''} w-full`}>
                  <h1 className="title-big text-xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase mb-5 hover-grow leading-tight tracking-wide max-w-4xl">
                    <span className="inline-block transition-all duration-300 hover:scale-110">
                      {banner.titleBig}
                    </span>
                  </h1>
                </div>
                <div className={`text-content ${index === currentSlide ? 'animate-slide-in-right' : ''} w-full`}>
                  <p className="description-text text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed p-5 rounded-lg mb-6 font-medium">
                    {banner.description}
                  </p>
                </div>
                <div className={`text-content ${index === currentSlide ? 'animate-slide-in-up' : ''}`}>
                  <Link
  to="/services"
  className="cta-button px-5 py-2 text-sm rounded-full transition-all duration-300"
>
  Explore More
</Link>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerCarousel;
