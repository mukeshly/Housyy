"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./Header";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      <Header />

      <div className="w-full bg-blue-950 py-6">
        <section className="m-8 flex flex-col items-center text-center" aria-labelledby="hero-heading">
          <motion.h1
            id="hero-heading"
            className="my-8 max-w-[1017px] text-3xl font-semibold leading-[1.2] text-white sm:text-4xl md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[74px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Better Property Deals. Verified Before You Pay.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-lg text-white/85 md:mb-12 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Real hot deals with title, paperwork, and buyer-side support.
          </motion.p>

          <motion.div
            className="w-full max-w-5xl rounded-[32px] bg-white p-6 shadow-2xl md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="grid gap-5 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div className="text-left">
                <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                  Find the right deal and check it properly.
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Explore current listings or get expert help reviewing a property before you move ahead.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/hot-deals"
                  className="flex min-h-14 items-center justify-center whitespace-nowrap rounded-full bg-[#ED1C24] px-10 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-[#c4121b] hover:shadow-lg"
                >
                  See Hot Deals
                </Link>
                <Link
                  href="/property-verification"
                  className="flex min-h-14 items-center justify-center whitespace-nowrap rounded-full border border-[#050F27]/15 bg-white px-10 py-4 text-center text-lg font-semibold text-[#050F27] shadow-sm transition hover:border-[#050F27]/35 hover:bg-slate-50"
                >
                  Verify a Property
                </Link>
                <div className="rounded-2xl bg-slate-50 px-4 py-4 text-left">
                  <p className="text-2xl font-bold text-slate-900">₹20Cr+</p>
                  <p className="mt-1 text-sm text-slate-600">Hot deals closed</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4 text-left">
                  <p className="text-2xl font-bold text-slate-900">500+</p>
                  <p className="mt-1 text-sm text-slate-600">Properties verified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {isMobile && (
            <div className="mt-4 text-sm text-white opacity-80">
              <p>Explore deals. Verify before you decide.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Hero;
