"use client";

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

interface HotHeroProps {
  whatsappHref: string;
}

const HotDealsSection = ({ whatsappHref }: HotHeroProps) => {
  return (
    <div className="w-full">
      <Header />
      <section className="h-container pt-8 md:px-20 md:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Chandigarh Tricity Hot Deals
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Real local hot deals. Reviewed before you move.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            A few curated examples from Chandigarh, Mohali, Panchkula, and Zirakpur. Best live inventory is shared directly on WhatsApp.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              Ask For Live Deals on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotDealsSection;
