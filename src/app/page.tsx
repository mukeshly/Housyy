import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import LiveHotDeals from "@/components/LiveHotDeals";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-blue-950">
      <Hero />
      <section className="my-5">
        <Challenges />
      </section>
      <section className="my-5">
        <WhyUsSection />
      </section>
      <section className="my-5">
        <ServicesSection />
      </section>
      <section className="my-5">
        <LiveHotDeals />
      </section>
      <section className="my-5">
        <TestimonialSlider />
      </section>
      <section className="my-5">
        <BlogSection />
      </section>
      <section className="my-5">
        <Footer />
      </section>
    </div>
  );
}
