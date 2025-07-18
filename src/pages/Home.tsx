import Header from '../components/Header'; // adjust path if needed
import Footer from '../components/Footer';
import BriefIntroduction from '../components/Intro';
import Banner from '../components/Herosection';
import IndustriesSection from '../components/collectionGrid';
import ProductCategories from '../components/Categories';
import WhyChooseUs from '../components/Why-Choose';
import CTASection from '../components/Banner_cta';

const Home = () => {
    return (
        <>
            <Header />
            <Banner/>
            <BriefIntroduction/>
            <WhyChooseUs/>
            <IndustriesSection/>
            <ProductCategories/>
            <CTASection/>
            
            <Footer/>
           
        </>
    );
};

export default Home;

