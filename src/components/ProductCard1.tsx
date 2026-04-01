// components/ProductCard1.tsx
import React from "react";
import Image from "next/image";
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

interface Props {
  property: PropertyDeal;
  cardWidth: number;
}

const ProductCard1: React.FC<Props> = ({ property, cardWidth }) => {
  return (
    <div style={{ width: `${cardWidth}px` }} className="px-2 flex-shrink-0">
      <div className="flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
        <div className="relative p-3 pb-2">
          <Image
            src={property.image}
            alt={property.title}
            className="h-[170px] w-full rounded-[20px] object-cover sm:h-[184px]"
            width={600}
            height={400}
          />
          {property.isLimitedTimeOffer && (
            <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#10B981] px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                limited time offer
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-grow flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
          <div className="min-h-[68px] sm:min-h-[76px]">
            <h3 className="font-inter text-[1.08rem] font-semibold leading-[1.12] tracking-[-0.035em] text-[#050F27] sm:text-[1.38rem]">
              {property.title}
            </h3>
            <p className="mt-1 text-[13px] font-medium tracking-[0.01em] text-[#050F27]/55 sm:text-[14px]">
              {property.location}
            </p>
          </div>
          <div className="mt-4 min-h-[76px] border-t border-slate-100 pt-3">
            <div className="flex flex-wrap gap-x-2 gap-y-2">
            {property.isVerified && (
              <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-[#050F27]/70 sm:text-[12px]">
                ✅ Title Verified
              </span>
            )}
            {property.isReraRegistered && (
              <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-[#050F27]/70 sm:text-[12px]">
                🏛️ RERA Registered
              </span>
            )}
            {property.isPhysicalSurveyDone && (
              <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-[#050F27]/70 sm:text-[12px]">
                📸 Physical Survey Done
              </span>
            )}
            </div>
          </div>
          <div className="mt-3 min-h-[120px] rounded-[20px] border border-slate-100 bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(241,245,249,0.75))] px-4 py-3">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200/70 pb-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#050F27]/42">
                Deal Price
              </span>
              <span className="font-poppins text-[1.28rem] font-semibold leading-none tracking-[-0.04em] text-[#050F27] sm:text-[1.5rem]">
                {property.price}
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-4 text-sm">
              <span className="text-[#050F27]/52">Market range</span>
              <span className="font-medium text-[#050F27]/75">{property.marketPrice}</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between gap-4 text-sm">
              <span className="text-[#050F27]/52">Potential Savings</span>
              <span className="text-right font-semibold text-emerald-700">
                {property.savings}
              </span>
            </div>
          </div>
          <div className="mt-auto pt-4">
            <Link
              href="/property-verification"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#050F27] shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 sm:text-[15px]"
            >
              Get Deal Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
