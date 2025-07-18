import { useState, useEffect } from 'react';

const OurCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  useEffect(() => {
    setIsVisible(true);

    const timer1 = setTimeout(() => setCardAnimations(prev => [true, prev[1], prev[2]]), 300);
    const timer2 = setTimeout(() => setCardAnimations(prev => [prev[0], true, prev[2]]), 600);
    const timer3 = setTimeout(() => setCardAnimations(prev => [prev[0], prev[1], true]), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">

                {/* Vision */}
                <div className={`bg-black rounded-xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl ${cardAnimations[0] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ border: '3px solid #E53E3E' }}>
                  <div className="h-16 transition-all duration-300 hover:h-20" style={{ backgroundColor: '#E53E3E' }}></div>
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <svg className="w-12 h-12 text-gray-400 transition-colors duration-300 hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                          <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
                          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-6 transform transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Montserrat, sans-serif', color: '#E53E3E' }}>Vision</h3>
                    <p className="text-gray-400 leading-relaxed text-center hover:text-gray-300">
                      To be a global leader in supplying high-performance alloys that meet the evolving needs of industries such as aerospace, oil & gas, petrochemical, and pharmaceuticals. We aim to provide rapid, customized solutions with precision cutting and global standards.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className={`bg-black rounded-xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl ${cardAnimations[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ border: '3px solid #00A0FF' }}>
                  <div className="h-16 transition-all duration-300 hover:h-20" style={{ backgroundColor: '#00A0FF' }}></div>
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-rotate-6">
                        <svg className="w-12 h-12 text-gray-400 transition-colors duration-300 hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeWidth={1.5} />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12l2 2 4-4" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8h2v8h-2" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-6 transform transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Montserrat, sans-serif', color: '#00A0FF' }}>Mission</h3>
                    <p className="text-gray-400 leading-relaxed text-center hover:text-gray-300">
                      We strive to meet global demands for Nickel Alloy raw materials by delivering premium, certified products as per ASTM, AMS, and API specifications. Through fast deliveries, in-house processing, and an extensive stock of sheets, plates, round bars, pipes, and tubes, we ensure unmatched efficiency and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Our Values */}
                <div className={`bg-black rounded-xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl ${cardAnimations[2] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ border: '3px solid #F6AD55' }}>
                  <div className="h-16 transition-all duration-300 hover:h-20" style={{ backgroundColor: '#F6AD55' }}></div>
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-45">
                        <svg className="w-12 h-12 text-gray-400 transition-colors duration-300 hover:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-7 4 7M12 2v12" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-6 transform transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6AD55' }}>Our Values</h3>
                    <p className="text-gray-400 leading-relaxed text-center hover:text-gray-300">
                      Founded in 2023, Alloysia Metals was built on the pillars of integrity, precision, and customer-first service. We value quality, reliability, and continuous improvement while offering custom sizing and cutting options. We serve with responsibility and build long-term partnerships across industries.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
