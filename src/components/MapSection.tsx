import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 0,
      title: "Main Office",
      address: "001, Shanti Kamal Wing A",
      city: "Dr Babasaheb Ambedkar Marg, Chinchpokli East, Mumbai, Maharashtra, 400012",
      phone: "+91-9004965999",
      email: "sales@alloysiametals.com",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.832288486858!2d72.83312807536749!3d19.07999735291483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced4e43804d1%3A0x46253c8a7e1521f!2sChinchpokli%2C%20Mumbai%2C%20Maharashtra%20400012!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
    }
    // You can add more locations here if needed
  ];

  const currentLocation = locations[activeLocation];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            OUR LOCATION
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Visit us at our office.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div
                key={location.id}
                onClick={() => setActiveLocation(index)}
                className={`p-4 sm:p-5 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-gray-50 shadow border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 sm:p-3 rounded-lg ${
                    activeLocation === index ? 'bg-white/20' : 'bg-blue-50'
                  }`}>
                    <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      activeLocation === index ? 'text-white' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-semibold ${
                      activeLocation === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {location.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${
                      activeLocation === index ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {location.address}
                    </p>
                    <p className={`text-xs sm:text-sm ${
                      activeLocation === index ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {location.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-200 mt-4">
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">
                Contact Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span className="text-xs sm:text-sm text-gray-800">{currentLocation.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-xs sm:text-sm text-gray-800">{currentLocation.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-xs sm:text-sm text-gray-800">{currentLocation.hours}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={currentLocation.mapUrl}
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${currentLocation.title}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
