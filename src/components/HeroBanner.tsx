const HeroBanner = ({ image, name }: { image: string; name: string }) => (
  <div className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 transform scale-110">
      <img
        src={image}
        alt={`${name} product showcase`}
        className="w-full h-full object-cover brightness-40 transition-transform duration-700 hover:scale-105"
        loading="eager"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/30 to-black/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
            {name}
          </span>
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-200 font-lato max-w-3xl mx-auto leading-relaxed">
          Premium Engineering Materials
        </p>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent rounded-full"></div>
    </div>
  </div>
);
export default HeroBanner;
