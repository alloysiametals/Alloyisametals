import { useState, useEffect } from 'react';

const OurStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('our-story');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Simple counter animation
  const useCounter = (end: number, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return count;
  };

  const yearCounter = useCounter(2023, 1500);
  const projectsCounter = useCounter(50, 2000);

  return (
    <section id="our-story" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Our Story
          </h2>
          <div
            className={`w-16 sm:w-20 h-1 bg-blue-600 mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-4 sm:space-y-6 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="inline-block bg-blue-50 px-3 py-1 rounded-full">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm">
                EST. 2023
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Founded in Mumbai, Built for the World
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                In 2023, Alloysia Metals was founded in Mumbai, India, with a
                clear vision: to revolutionize the global metallurgy industry
                through innovative alloy solutions.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Our team of metallurgical experts and materials scientists
                recognized the critical need for next-generation alloys in
                aerospace, automotive, and emerging technology sectors.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                From our state-of-the-art facility in Mumbai, we integrate
                advanced materials science with precision engineering to deliver
                alloys that exceed industry specifications.
              </p>
            </div>
          </div>

          {/* Stats Panel */}
          <div
            className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl p-6 sm:p-8 text-white transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <h4 className="font-bold text-lg sm:text-xl mb-6">
              Company Milestones
            </h4>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  year: '2023',
                  title: 'Company Founded',
                  desc: 'Established in Mumbai with R&D facility',
                },
                {
                  year: '2024',
                  title: 'Global Expansion',
                  desc: 'International partnerships & supply chain',
                },
                {
                  year: '2025',
                  title: 'Innovation Leader',
                  desc: 'Advanced alloy solutions',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 sm:space-x-4 transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="w-2.5 h-2.5 sm:w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-blue-400 text-sm sm:text-base">
                      {item.year}
                    </div>
                    <div className="font-semibold text-white text-sm sm:text-base">
                      {item.title}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    {isVisible ? yearCounter : 0}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    {isVisible ? projectsCounter : 0}+
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
