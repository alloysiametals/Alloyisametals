import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import CursorEffect from './components/CursorEffect';

import NickelAlloys from './pages/Products/NickelAlloys';
import ProductDetail from './pages/Products/ProductDetails';
import StainlessSteel from './pages/Products/StainlessSteel';
import AerospaceAlloys from './pages/Products/AerospaceAlloys';
import AusteniticStainlessDuplexAlloys from './pages/Products/AusteniticStainlessDuplexAlloys';
import TitaniumAlloys from './pages/Products/TitaniumAlloys';
import OtherMiscellaneousAlloys from './pages/Products/OtherMiscellaneousAlloys';

import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CursorEffect />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        {/* Product Category Route */}
        <Route path="/nickel-alloys" element={<NickelAlloys />} />
         <Route path="/products/stainless-steel" element={<StainlessSteel />} />
         <Route path="/aerospace-alloys" element={<AerospaceAlloys />} />
        <Route path="/austenitic-stainless-duplex-alloys" element={<AusteniticStainlessDuplexAlloys />} />
        <Route path="/products/other-miscellaneous-alloys" element={<OtherMiscellaneousAlloys />} />


     {/* Product Detail Route */}
     <Route path="/products/:id" element={<ProductDetail />} />
     <Route path="/products/titanium-alloys" element={<TitaniumAlloys />} />


      </Routes>
    </Router>
  );
};

export default App;
