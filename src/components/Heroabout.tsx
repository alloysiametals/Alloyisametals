const SimpleHero = () => {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark1/70"></div>

      {/* Animated Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white animate-fade-in-up px-4">
          <span className="inline-block animate-slide-in-left animation-delay-200">
            A
          </span>
          <span className="inline-block animate-slide-in-left animation-delay-400">
            B
          </span>
          <span className="inline-block animate-slide-in-left animation-delay-600">
            O
          </span>
          <span className="inline-block animate-slide-in-left animation-delay-800">
            U
          </span>
          <span className="inline-block animate-slide-in-left animation-delay-1000">
            T
          </span>
          <span className="inline-block mx-1 sm:mx-2 animate-pulse text-primary">
            •
          </span>
          <span className="inline-block animate-slide-in-right animation-delay-1200">
            U
          </span>
          <span className="inline-block animate-slide-in-right animation-delay-1400">
            S
          </span>
        </h1>
      </div>

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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1.0s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
      `}</style>
    </section>
  );
};

export default SimpleHero;
