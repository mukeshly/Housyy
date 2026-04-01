import Footer from "@/components/Footer";
import LiveHotDeals from "@/components/LiveHotDeals";
import ProductCard2 from "@/components/ProductCard2";
import HotHero from "./HotHero";
import { p1, p2, p3, p4, p5, p6 } from "@/assets/houses";
import Link from "next/link";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

const makeWhatsAppHref = (message: string) =>
  whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "/#contact";

const bankAuctionDeals = [
  {
    id: "auction-1",
    title: "3 BHK Apartment - VIP Road",
    location: "Zirakpur",
    image: p1,
    priceLabel: "₹68 Lakhs",
    marketPriceLabel: "₹78-82 Lakhs",
    savingsLabel: "₹10-14 Lakhs lower",
    summary:
      "Suitable for buyers who can move quickly on a cleaner pricing window and want title checks before token payment.",
    badges: ["Bank-led lead", "Title review advised"],
    href: makeWhatsAppHref("Hi, I want details for the VIP Road Zirakpur bank-led hot deal."),
  },
  {
    id: "auction-2",
    title: "2 BHK Builder Floor - Sector 20",
    location: "Panchkula",
    image: p2,
    priceLabel: "₹44 Lakhs",
    marketPriceLabel: "₹50-54 Lakhs",
    savingsLabel: "Approx. ₹6-10 Lakhs lower",
    summary:
      "A value-first lead for end users looking at Panchkula inventory with more realistic pricing than portal-listed stock.",
    badges: ["Entry-ticket deal", "Local demand area"],
    href: makeWhatsAppHref("Hi, I want details for the Panchkula Sector 20 hot deal."),
  },
  {
    id: "auction-3",
    title: "4 BHK Kothi Plot Package - Aerocity",
    location: "Mohali",
    image: p3,
    priceLabel: "₹1.18 Cr",
    marketPriceLabel: "₹1.28-1.35 Cr",
    savingsLabel: "Approx. ₹10-17 Lakhs lower",
    summary:
      "For buyers comparing larger-ticket inventory and wanting support on pricing sanity, paperwork, and next-step diligence.",
    badges: ["Higher-ticket", "Buyer-side support"],
    href: makeWhatsAppHref("Hi, I want details for the Mohali Aerocity hot deal."),
  },
];

const resaleDeals = [
  {
    id: "resale-1",
    title: "3 BHK Society Flat - Airport Road",
    location: "Mohali",
    image: p4,
    priceLabel: "₹72 Lakhs",
    marketPriceLabel: "₹80-84 Lakhs",
    savingsLabel: "Approx. ₹8-12 Lakhs lower",
    summary:
      "An urgent resale-style lead for serious buyers who want to understand the real upside before moving to token stage.",
    badges: ["Urgent resale", "Fast-moving lead"],
    href: makeWhatsAppHref("Hi, I want details for the Mohali Airport Road resale deal."),
  },
  {
    id: "resale-2",
    title: "3 BHK Independent Floor - Sector 117",
    location: "Mohali",
    image: p5,
    priceLabel: "₹59 Lakhs",
    marketPriceLabel: "₹64-69 Lakhs",
    savingsLabel: "Approx. ₹5-10 Lakhs lower",
    summary:
      "Works well for owner-occupier buyers who want a practical resale option instead of recycled broker inventory.",
    badges: ["End-user fit", "Verification recommended"],
    href: makeWhatsAppHref("Hi, I want details for the Sector 117 Mohali resale deal."),
  },
  {
    id: "resale-3",
    title: "2.5 BHK Apartment - Dhakoli Belt",
    location: "Zirakpur",
    image: p6,
    priceLabel: "₹47 Lakhs",
    marketPriceLabel: "₹52-56 Lakhs",
    savingsLabel: "Approx. ₹5-9 Lakhs lower",
    summary:
      "A practical budget-range opportunity for buyers comparing Zirakpur options and wanting quicker clarity on documents and pricing.",
    badges: ["Budget-focused", "Good comparison lead"],
    href: makeWhatsAppHref("Hi, I want details for the Dhakoli Zirakpur resale deal."),
  },
];

const DealSection = ({
  title,
  description,
  deals,
}: {
  title: string;
  description: string;
  deals: typeof bankAuctionDeals;
}) => (
  <section className="h-container x-round-card !my-5">
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="mb-2 text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600">{description}</p>
      </div>
      <Link
        href={makeWhatsAppHref(`Hi, please share today's ${title.toLowerCase()} in Chandigarh tricity.`)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        Ask for live inventory
      </Link>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {deals.map((property) => (
        <ProductCard2 key={property.id} {...property} />
      ))}
    </div>
  </section>
);

export default function HotDealsPage() {
  return (
    <>
      <HotHero whatsappHref={makeWhatsAppHref("Hi, I want today's live hot deals in Chandigarh tricity.")} />

      <section id="curated-deals" className="my-5">
        <LiveHotDeals />
      </section>

      <DealSection
        title="Bank Auction Opportunities"
        description="Illustrative examples of the kind of bank-led and pricing-dislocation opportunities buyers usually ask us to source and verify."
        deals={bankAuctionDeals}
      />

      <DealSection
        title="Urgent Resale Picks"
        description="A smaller set of resale-style leads where speed, local understanding, and buyer-side verification support matter more than browsing endless listings."
        deals={resaleDeals}
      />

      <section className="h-container x-round-card !my-5 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
          Want today's live inventory instead of brochure examples?
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
          Message us directly on WhatsApp and we will share the current opportunities that match your budget,
          area, and urgency, along with where verification support is most important before you move ahead.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={makeWhatsAppHref("Hi, please share live hot deals based on my budget and preferred area.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
