interface SectionProps {
  title: string;
  children: React.ReactNode;
  bg?: boolean;
  icon?: string;
}

const Section = ({ title, children, bg = false, icon }: SectionProps) => (
  <section className={`py-16 ${bg ? "bg-gradient-to-br from-gray-50 to-gray-100" : ""} transition-all duration-300`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center mb-8 group">
        {icon && (
          <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-dark1 font-montserrat border-l-4 border-primary pl-6 relative">
            {title}
            <div className="absolute -bottom-2 left-6 w-20 h-1 bg-gradient-to-r from-primary via-blue-400 to-transparent rounded-full"></div>
          </h2>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 text-dark2 font-lato hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
        {children}
      </div>
    </div>
  </section>
);

export default Section;
