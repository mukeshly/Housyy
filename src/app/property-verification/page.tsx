"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyVerificationServiceList from "@/components/PropertyVerificationServiceList";
import PropertyVerificationHero from "@/components/PropertyVerificationHero";
import VerificationProcess from "@/components/VerificationProcess";
import FaqSection from "@/components/FaqSection";

export default function PropertyVerificationPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const consultationHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I want a property verification consultation."
      )}`
    : "/#contact";

  return (
    <div>
      <section className="">
        <PropertyVerificationHero />
      </section>
      <section className="my-5">
        <PropertyInfo />
      </section>
      <section className="my-5">
        <PropertyVerificationServiceList />
      </section>
      <section className="my-20">
        <VerificationProcess />
      </section>
      <section className="my-5">
        <FaqSection />
      </section>
      <section className="my-5">
        <div className="h-container x-round-card text-center">
          <h2 className="text-3xl font-bold text-[#050F27] sm:text-4xl md:text-5xl">
            Ready to verify a property before you move ahead?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Send the property name, location, and whatever documents you already have. We’ll tell you the best first step.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={consultationHref}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
}
