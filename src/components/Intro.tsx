import { FaGlobeAmericas } from "react-icons/fa";

const BriefIntroduction = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-lato text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        
        {/* Left Icon & Tagline */}
        <div className="flex flex-col items-center md:items-start md:w-2/5 space-y-4 sm:space-y-5">
          <div className="p-5 sm:p-6 rounded-xl border-2 border-[#00A0FF] bg-white/10 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-110">
            <FaGlobeAmericas className="text-3xl sm:text-5xl text-[#00A0FF]" />
          </div>
          <h3 className="text-xs sm:text-sm md:text-base font-montserrat font-semibold uppercase tracking-widest text-[#00A0FF] text-center md:text-left">
            Global Quality Since 2023
          </h3>
          <p className="max-w-xs text-center md:text-left text-xs sm:text-sm md:text-base font-normal opacity-90 leading-relaxed">
            Trusted worldwide for innovative and reliable metals solutions.
          </p>
        </div>

        {/* Right Text Content */}
        <div className="md:w-3/5 md:ml-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-extrabold mb-3 sm:mb-4 leading-tight relative inline-block">
            Welcome to Alloysia Metals
            <span className="block h-1 w-16 sm:w-20 bg-[#00A0FF] rounded-full mt-2"></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-lato opacity-90">
            Founded in 2023, Alloysia Metals is dedicated to producing superior quality metal products
            that exceed industry standards. Our global reach and customer-centric approach ensure that
            we meet diverse demands with cutting-edge technology and sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BriefIntroduction;
