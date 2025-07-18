import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Product {
id: string;
name: string;
image?: string;
description?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
return (
<motion.div
className="group bg-white shadow-md overflow-hidden border hover:shadow-lg transition-all "
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
viewport={{ once: true }}
>
{/* Product Image */}
<div className="aspect-[4/3] overflow-hidden bg-gray-100">
{product.image ? (
<img
src={product.image}
alt={product.name || 'Product Image'}
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
) : (
<div className="flex items-center justify-center h-full text-gray-400 text-sm">No Image</div>
)}
</div>
  {/* Product Content */}
  <div className="p-6">
    <h3 className="text-lg font-bold mb-3 text-gray-900">{product.name}</h3>
    <p className="text-sm text-gray-700 mb-4 whitespace-pre-line line-clamp-4">
      {product.description || "Explore the features and specifications of this product."}
    </p>
    <Link to={`/products/${product.id}`}>
      <button
        className="px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition text-sm font-medium"
        aria-label={`View details for ${product.name}`}
      >
        View Details
      </button>
    </Link>
  </div>
</motion.div>
);
};
export default ProductCard;