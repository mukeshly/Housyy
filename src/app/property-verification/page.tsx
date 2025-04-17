"use client";

import Footer from "@/components/Footer";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyVerificationServiceList from "@/components/PropertyVerificationServiceList";
import PropertyVerificationHero from "@/components/PropertyVerificationHero";
import VerificationProcess from "@/components/VerificationProcess";
import WhyChooseHousyy from "@/components/WhyChooseHousyy";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";

export default function PropertyVerificationPage() {
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
        <PricingSection />
      </section>
      <section className="my-5">
        <WhyChooseHousyy />
      </section>
      <section className="my-5">
        <FaqSection />
      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
}
