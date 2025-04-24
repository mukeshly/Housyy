// components/ProductCard1.tsx
import React from "react";
import Image from "next/image";
import p1 from "@/assets/houses/p1.jpg";

interface PropertyDeal {
  id: number;
  title: string;
  location: string;
  image: string;
  isLimitedTimeOffer: boolean;
  isVerified: boolean;
  isReraRegistered: boolean;
  isPhysicalSurveyDone: boolean;
  isLockDeal: boolean;
  price: string;
  marketPrice: string;
  savings: string;
  savingsPercentage: string;
}

interface Props {
  property: PropertyDeal;
  cardWidth: number;
}

const ProductCard1: React.FC<Props> = ({ property, cardWidth }) => {
  return (
    <div style={{ width: `${cardWidth}px` }} className="px-2 flex-shrink-0">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full flex flex-col">
        <div className="relative p-3">
          <Image
            src={p1}
            alt={property.title}
            className="w-full h-[180px] sm:h-[200px] object-cover rounded-xl"
            layout="responsive"
            width={600}
            height={400}
          />
          {property.isLimitedTimeOffer && (
            <div className="absolute top-4 left-4 bg-[#00B579] px-2 py-1 rounded-full">
              <span className="text-white text-xs uppercase tracking-wider font-inter">
                limited time offer
              </span>
            </div>
          )}
        </div>
        <div className="p-4 sm:p-6 flex-grow flex flex-col relative justify-between">
          <h3 className="text-black text-lg sm:text-xl font-medium font-inter leading-tight">
            {property.title}
          </h3>
          <p className="text-black text-opacity-40 text-sm font-inter mt-1">
            {property.location}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {property.isVerified && (
              <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                ✅ Title Verified
              </span>
            )}
            {property.isReraRegistered && (
              <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                🏛️ RERA Registered
              </span>
            )}
            {property.isPhysicalSurveyDone && (
              <span className="text-black text-opacity-70 text-xs sm:text-sm font-inter">
                📸 Physical Survey Done
              </span>
            )}




          </div>
          <div className="mt-4 pt-3 border-t border-dashed border-[#C7C7C7]">
            <p className="font-poppins text-sm sm:text-base">Price: {property.price}</p>
            <p className="font-poppins text-sm sm:text-base mt-1">
              Market Price: {property.marketPrice}
            </p>
            <p className="text-black text-opacity-80 font-poppins text-xs sm:text-sm mt-1">
              Save {property.savings} ({property.savingsPercentage})
            </p>
          </div>
          <div>
                      
{property.isLockDeal && (
  <button
    className="mt-6 px-4 py-2 bg-[#ED1C24] hover:bg-[#c4121b] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 self-end"
    onClick={() => alert(`You locked the deal for: ${property.title}`)}
  >
    <span>🔐 Lock This Deal</span>
  </button>
)}
          </div>
          {/* <button className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#ED1C24] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
            <svg
              width="18"
              height="18"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8439 3.65547C19.8439 3.46197 19.7713 3.29265 19.6262 3.14752C19.481 3.00239 19.3117 2.92983 19.1182 2.92983H10.991C10.7975 2.92983 10.6282 3.00239 10.4831 3.14752C10.3379 3.29265 10.2654 3.46197 10.2654 3.65547C10.2654 3.84898 10.3379 4.0062 10.4831 4.12714C10.6282 4.24808 10.7975 4.30855 10.991 4.30855H17.4492L3.66203 18.0958C3.5169 18.2409 3.44434 18.4102 3.44434 18.6037C3.44434 18.7972 3.5169 18.9665 3.66203 19.1117C3.80716 19.2568 3.97647 19.3293 4.16998 19.3293C4.36348 19.3293 4.5328 19.2568 4.67793 19.1117L18.4651 5.32445V11.7827C18.4651 11.9762 18.5256 12.1455 18.6465 12.2906C18.7675 12.4357 18.9247 12.5083 19.1182 12.5083C19.3117 12.5083 19.481 12.4357 19.6262 12.2906C19.7713 12.1455 19.8439 11.9762 19.8439 11.7827V3.65547Z"
                fill="white"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
