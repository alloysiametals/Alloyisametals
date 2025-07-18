import Header from '../components/Header'; // adjust path if needed
import Footer from '../components/Footer';

import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/Form';
import MapSection from '../components/MapSection';

const Contact = () => {
    return (
        <>
            <Header />
        <ContactBanner/>
        <ContactForm/>
           <MapSection/>
            <Footer/> 
        </>
    );
};

export default Contact;

