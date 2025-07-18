import Header from '../components/Header'; // adjust path if needed
import Footer from '../components/Footer';
import CTASection from '../components/Banner_cta';
import OurStorySection from '../components/OurStorysection';
import AboutHero from '../components/Heroabout';
import OurCompany from '../components/Ourcompany';
import OurMission from '../components/missionvission';

const About = () => {
    return (
        <>
            <Header />
            <AboutHero/>
            <OurCompany/>
             <OurStorySection/>
             <OurMission/>
           <CTASection/>
            <Footer/>
           
        </>
    );
};

export default About;

