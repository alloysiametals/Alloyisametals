import Header from '../components/Header'; // adjust path if needed
import Footer from '../components/Footer';
import CTASection from '../components/Banner_cta';
import ServicesBanner from '../components/ServiceBanner';
import ServicesSection from '../components/Serviceslist';

const Services = () => {
    return (
        <>
            <Header />
        <ServicesBanner/>
        <ServicesSection/>
           <CTASection/>
            <Footer/>
           
        </>
    );
};

export default Services;

