
import { Link } from "react-router-dom";

const NotFoundState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center max-w-md mx-auto p-8">
        {/* Display a search icon */}
        <div className="text-8xl mb-6 animate-bounce">🔍</div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-dark1 mb-6 font-montserrat">
          Product Not Found
        </h1>
        
        {/* Description */}
        <p className="text-dark2 text-xl font-lato mb-8 leading-relaxed">
          The product you're looking for doesn't exist or may have been moved.
        </p>
        
        {/* Back button */}
        <Link
          to="/products"
          className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-montserrat font-semibold hover:from-blue-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          ← Go Back to Products
        </Link>
      </div>
    </div>
  );
};

export default NotFoundState;
