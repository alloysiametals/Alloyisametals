// src/pages/Products/OtherMiscellaneousAlloys.tsx

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';
import ProductBanner from '../../components/Productbanner';
import rawProducts from '../../data/Products.json';
import { Product } from '../../types/product';

const OtherMiscellaneousAlloys = () => {
  const items = (rawProducts.otherMiscellaneousAlloys as unknown as Product[]).filter(
    (entry): entry is Product =>
      typeof entry === 'object' &&
      entry !== null &&
      'id' in entry &&
      'name' in entry &&
      'category' in entry
  );

  return (
    <>
      <Header />
      <ProductBanner />
      <main className="p-6">
        <ProductList title="Other Miscellaneous Alloys" items={items} />
      </main>
      <Footer />
    </>
  );
};

export default OtherMiscellaneousAlloys;
