import { motion } from "framer-motion";
import ProductCard from "../components/ProductCrad";

interface Product {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 font-sans bg-gradient-to-br from-gray-50 to-white">
      {/* Section title */}
      <div className="text-center mb-16">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase tracking-wider mb-4">
  {title}
</h2>


        </motion.div>
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.length > 0 ? (
          items.map((product, _index) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No products available</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
