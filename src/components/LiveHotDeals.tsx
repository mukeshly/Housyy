"use client";
import React, { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import ProductCard1 from "./ProductCard1"; // ✅ Adjust the path if needed
import Link from "next/link";


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

const propertyDeals: PropertyDeal[] = [
  {
    id: 1,
    title: "3 BHK Apartment – Zirakpur",
    location: "Sushma Downtown, VIP Road",
    image: "/long-house.jpg",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: true,
    price: "₹68 Lakhs",
    marketPrice: "₹82 Lakhs",
    savings: "₹14 Lakhs",
    savingsPercentage: "18% below market",
  },
  {
    id: 2,
    title: "4 BHK Villa – Chandigarh",
    location: "Royal Estates, Sector 15",
    image: "/home-1.png",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: false,
    isLockDeal: true,
    price: "₹1.2 Crore",
    marketPrice: "₹1.35 Crore",
    savings: "₹15 Lakhs",
    savingsPercentage: "11% below market",
  },
  {
    id: 3,
    title: "2 BHK Apartment – Panchkula",
    location: "Green Valley Heights, Sector 20",
    image: "/long-house.jpg",
    isLimitedTimeOffer: false,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: false,
    price: "₹45 Lakhs",
    marketPrice: "₹52 Lakhs",
    savings: "₹7 Lakhs",
    savingsPercentage: "13% below market",
  },
  {
    id: 4,
    title: "3 BHK Penthouse – Mohali",
    location: "Sunshine Towers, Phase 8",
    image: "/home-1.png",
    isLimitedTimeOffer: true,
    isVerified: true,
    isReraRegistered: true,
    isPhysicalSurveyDone: true,
    isLockDeal: true,
    price: "₹95 Lakhs",
    marketPrice: "₹1.1 Crore",
    savings: "₹15 Lakhs",
    savingsPercentage: "14% below market",
  },
];

const LiveHotDeals: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardWidth(360);
        setVisibleCount(3);
      } else if (width >= 768) {
        setCardWidth(330);
        setVisibleCount(2);
      } else {
        setCardWidth(width * 0.85);
        setVisibleCount(1);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handleNext = () => {
    if (isDragging) return;
    setCurrentIndex((prev) =>
      prev >= propertyDeals.length - visibleCount ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (isDragging) return;
    setCurrentIndex((prev) =>
      prev <= 0 ? propertyDeals.length - visibleCount : prev - 1
    );
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <div className="x-round-card h-container">
      <div className="flex justify-between items-center w-full">
        <div>
          <h2 className="title mb-2">Featured Hot Deals</h2>
          <p className="max-w-2xl text-base text-gray-600">
            A quick look at the kind of pricing gap and verification signals buyers care about most.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#050F27]/15 bg-white text-[#050F27] shadow-sm transition-all hover:border-[#050F27]/35 hover:bg-slate-50 sm:h-12 sm:w-12"
            aria-label="Previous property"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#050F27]/15 bg-white text-[#050F27] shadow-sm transition-all hover:border-[#050F27]/35 hover:bg-slate-50 sm:h-12 sm:w-12"
            aria-label="Next property"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full py-2">
        <motion.div
          className="flex"
          style={{
            width: `${cardWidth * propertyDeals.length}px`,
          }}
          animate={{
            x: -currentIndex * cardWidth,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{
            left: -((propertyDeals.length - visibleCount) * cardWidth),
            right: 0,
          }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {propertyDeals.map((property) => (
            <ProductCard1
              key={property.id}
              property={property}
              cardWidth={cardWidth}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center md:justify-end">
        <Link
          href="/hot-deals"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ED1C24] px-8 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-[#c4121b] hover:shadow-lg"
        >
          See Hot Deals
        </Link>
      </div>
    </div>
  );
};

export default LiveHotDeals;
