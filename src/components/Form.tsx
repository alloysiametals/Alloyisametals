import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  backgroundImage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      await axios.post('/api/send-email', formData);
      setStatusMessage('✅ Message sent successfully! We\'ll get back to you soon.');
      setStatusType('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatusMessage('❌ Something went wrong. Please try again.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="order-2 lg:order-1">
            <div className="relative h-72 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={backgroundImage}
                alt="Contact us"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-bold">
                  Let's Start a <span className="block text-blue-500">Conversation</span>
                </h3>
                <div className="pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-gray-200">sales@alloysiametals.com</p>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1">+91-9004965999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-blue-500">Touch</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Have a project in mind? Let's discuss how we can help bring your vision to reality.
              </p>

              {statusMessage && (
                <div
                  className={`mb-4 p-4 rounded-lg text-sm ${
                    statusType === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="space-y-5">
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+1 (555) 123-4567' }
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-xs sm:text-sm font-semibold mb-1">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleInputChange}
                      className={`w-full border rounded-lg text-sm sm:text-base px-3 py-2 sm:py-3 transition duration-300 focus:outline-none ${
                        errors[field.name as keyof FormData]
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder={field.placeholder}
                    />
                    {errors[field.name as keyof FormData] && (
                      <p className="text-xs text-red-500 mt-1">{errors[field.name as keyof FormData]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg text-sm sm:text-base px-3 py-2 sm:py-3 transition duration-300 focus:outline-none ${
                      errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell us about your project, ideas, or any questions you have!"
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  🔒 Your information is secure and will never be shared.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;