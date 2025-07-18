import { useState } from 'react';
import { Settings, Zap, BarChart3, Phone, FileText, Factory, Shield, Truck, ChevronDown, ChevronRight, Calculator, Star, Download } from 'lucide-react';

const ServicesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Plate Cutting",
      icon: <Settings className="w-6 h-6" />,
      shortDesc: "Precision cutting with 17 plate saws",
      features: [
        "Cut to size blanks ±0.2mm tolerance",
        "Up to 6m length & 600mm thick",
        "Profiled shapes & rectangles",
        "Hard stamped identification"
      ],
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "CNC Machining",
      icon: <Zap className="w-6 h-6" />,
      shortDesc: "Advanced CNC facilities",
      features: [
        "Surface machining 4m x 2m",
        "Full billet preparation",
        "Drilling, tapping, counter-boring",
        "Nesting for optimization"
      ],
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Waterjet Cutting",
      icon: <BarChart3 className="w-6 h-6" />,
      shortDesc: "High-precision waterjet technology",
      features: [
        "Up to 200mm thick material",
        "4m x 3m cutting bed",
        "Virtually any shape",
        "Improved material utilization"
      ],
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
    }
  ];

  const industries = [
    { name: "Aerospace", icon: "✈️", projects: "500+", description: "Critical components for aviation industry" },
    { name: "Automotive", icon: "🚗", projects: "1200+", description: "Precision parts for vehicle manufacturing" },
    { name: "Medical", icon: "🏥", projects: "300+", description: "High-grade medical device components" },
    { name: "Marine", icon: "🚢", projects: "200+", description: "Corrosion-resistant marine parts" },
    { name: "Defense", icon: "🛡️", projects: "150+", description: "Military-grade specifications" },
    { name: "Energy", icon: "⚡", projects: "400+", description: "Power generation components" }
  ];

  const processSteps = [
    { step: 1, title: "Consultation", desc: "Technical discussion and requirements analysis", icon: <Phone className="w-6 h-6" /> },
    { step: 2, title: "Quote", desc: "Detailed pricing and timeline proposal", icon: <FileText className="w-6 h-6" /> },
    { step: 3, title: "Production", desc: "Precision manufacturing with quality control", icon: <Factory className="w-6 h-6" /> },
    { step: 4, title: "Quality Check", desc: "Comprehensive testing and certification", icon: <Shield className="w-6 h-6" /> },
    { step: 5, title: "Delivery", desc: "Secure packaging and on-time shipping", icon: <Truck className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "AeroTech Industries",
      role: "Chief Engineer",
      content: "Outstanding precision and reliability. Their CNC machining capabilities exceeded our aerospace standards.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      company: "MedDevice Corp",
      role: "Quality Manager",
      content: "Exceptional quality control and documentation. Perfect for our medical device requirements.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c75b?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      company: "AutoParts Ltd",
      role: "Production Director",
      content: "Consistently delivering on time with zero defects. Our go-to manufacturing partner.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "What materials can you work with?",
      answer: "We work with aluminum, steel, titanium, stainless steel, and various specialty alloys. Our material expertise spans aerospace-grade to commercial-grade materials."
    },
    {
      question: "What are your typical lead times?",
      answer: "Lead times vary by complexity and quantity. Simple cutting jobs: 3-5 days, Complex machining: 1-2 weeks, Large orders: 2-4 weeks. Rush orders available."
    },
    {
      question: "Do you provide quality certifications?",
      answer: "Yes, we provide complete quality documentation including material certificates, dimensional reports, and compliance certifications for aerospace and medical standards."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept all major CAD formats including DWG, DXF, STEP, IGES, SolidWorks, and PDF technical drawings."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Precision Manufacturing Services</h1>
          <p className="text-xl mb-8 opacity-90">25+ Years of Excellence | 50,000+ Projects Completed | ±0.1mm Precision</p>
          <div className="flex gap-4 justify-center">
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Capabilities
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge manufacturing solutions delivering precision and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-[1.02] bg-white">
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                       style={{
                         backgroundImage: `url(${service.image})`,
                         filter: 'brightness(0.7) contrast(1.1)'
                       }}>
                  </div>
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/30 transition-all duration-500"></div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {service.icon}
                  </div>

                  <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-white/95 text-sm drop-shadow">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {service.title}
                      </h3>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                              style={{ transitionDelay: `${idx * 0.1 + 0.2}s` }}>
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="leading-relaxed text-left">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">From concept to delivery in 5 simple steps</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {processSteps.map((step, index) => (
              <div key={step.step} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-4 text-white shadow-lg">
                  {step.icon}
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Trusted by leading companies across multiple sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:bg-blue-50">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{industry.projects} Projects</p>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {expandedFaq === index ? 
                    <ChevronDown className="w-5 h-5 text-gray-500" /> : 
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  }
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your manufacturing needs. Our experts are ready to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Get Instant Quote
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +1-800-PRECISION
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Capabilities
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
