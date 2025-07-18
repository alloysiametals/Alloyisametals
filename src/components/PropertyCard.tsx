const PropertyCard = ({
  title,
  value,
  bgColor = "bg-blue-50",
  borderColor = "border-blue-200",
  textColor = "text-blue-800",
  icon = "📊",
}: {
  title: string;
  value: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  icon?: string;
}) => (
  <div
    className={`${bgColor} ${borderColor} border-2 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
  >
    <div className="flex items-center mb-3">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className={`font-semibold ${textColor} font-montserrat`}>{title}</h3>
    </div>
    <p className={`${textColor} text-lg font-medium`}>{value}</p>
  </div>
);

export default PropertyCard;
