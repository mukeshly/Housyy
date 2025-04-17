// components/ProductCard2.tsx
import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

interface ProductCard2Props {
  title: string;
  location: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  isFeatured?: boolean;
}

const ProductCard2: React.FC<ProductCard2Props> = ({ title, location, image, price, bedrooms, bathrooms, isFeatured = false }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in">
      <div className="relative">
        <Image src={image} alt={title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200" aria-label="Add to favorites">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </button>

        {isFeatured && <div className="absolute bottom-3 left-3 bg-primary px-3 py-1 rounded-full text-white text-xs font-medium">Featured</div>}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-1">{location}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-primary font-bold">₹{price.toLocaleString()}</p>
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <span>{bedrooms} Beds</span>
            <span>{bathrooms} Baths</span>
          </div>
        </div>
        <button
          className="mt-6 px-4 py-2 border border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 self-end"
          onClick={() => alert(`You locked the deal for: ${property.title}`)}
        >
          <span>🔐 Lock This Deal</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard2;
