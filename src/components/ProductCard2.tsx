import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCard2Props {
  title: string;
  location: string;
  image: string | StaticImageData;
  priceLabel: string;
  marketPriceLabel?: string;
  savingsLabel?: string;
  summary: string;
  badges?: string[];
  href: string;
  ctaLabel?: string;
}

const ProductCard2: React.FC<ProductCard2Props> = ({
  title,
  location,
  image,
  priceLabel,
  marketPriceLabel,
  savingsLabel,
  summary,
  badges = [],
  href,
  ctaLabel = "Chat on WhatsApp",
}) => {
  const normalizedSavingsLabel = savingsLabel
    ? savingsLabel.replace(/^Approx\.\s*/i, "~").replace(/\s+lower$/i, " savings")
    : undefined;
  const compactSavingsLabel = normalizedSavingsLabel?.replace(/\s+savings$/i, "");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={640}
          height={420}
          className="h-[184px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-[196px]"
        />
        {badges.length > 0 ? (
          <div className="absolute left-4 top-4 flex max-w-[85%] flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/60 bg-white/92 px-3 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <div className="min-h-[76px] sm:min-h-[84px]">
          <h3 className="text-[1.1rem] font-semibold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-[1.28rem]">
            {title}
          </h3>
          <p className="mt-1 text-[13px] font-medium tracking-[0.01em] text-slate-500 sm:text-[14px]">{location}</p>
        </div>

        <p className="min-h-[68px] border-t border-slate-100 pt-3 text-[14px] leading-6 text-slate-600 line-clamp-3 sm:text-[15px] sm:leading-[1.65]">
          {summary}
        </p>

        <div className="mt-3 min-h-[112px] rounded-[20px] border border-slate-100 bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(241,245,249,0.75))] px-4 py-3">
          <div className="flex items-end justify-between gap-4 border-b border-slate-200/70 pb-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Deal Price
            </span>
            <span className="font-poppins text-[1.28rem] font-semibold leading-none tracking-[-0.04em] text-[#050F27] sm:text-[1.55rem]">
              {priceLabel}
            </span>
          </div>
          {marketPriceLabel ? (
            <div className="mt-2.5 flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-500">Market range</span>
              <span className="font-medium text-slate-700">{marketPriceLabel}</span>
            </div>
          ) : null}
          {savingsLabel ? (
            <div className="mt-1.5 flex items-start justify-between gap-4 text-sm">
              <span className="whitespace-nowrap text-slate-500">Potential Savings</span>
              <span className="whitespace-nowrap text-right font-semibold text-emerald-700">{compactSavingsLabel}</span>
            </div>
          ) : null}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#25D366]/30 bg-white px-5 py-3 text-center text-[15px] font-semibold text-[#128C7E] shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition hover:border-[#25D366]/50 hover:bg-[#F2FFF7]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
