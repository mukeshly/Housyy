import Link from "next/link";

const consultationPoints = [
  {
    title: "Share the property",
    description: "Send the project name, location, and whatever documents you already have.",
  },
  {
    title: "We review the risk areas",
    description: "We tell you what needs checking first: title, dues, approvals, ownership chain, or financeability.",
  },
  {
    title: "Get a clear next step",
    description: "You’ll know whether to move ahead, ask more questions, or pause before paying a token.",
  },
];

export default function PricingSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const consultationHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I want a consultation for property verification."
      )}`
    : "/#contact";

  return (
    <section className="x-round-card h-container">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold font-poppins text-[#050F27] leading-tight md:text-6xl">
          How the consultation works
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          This page is for buyers who want expert review before they move money. Start with a consultation, then we’ll tell you which checks matter for your property.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {consultationPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Step
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#050F27]">
              {point.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={consultationHref}
          target={whatsappNumber ? "_blank" : undefined}
          rel={whatsappNumber ? "noreferrer" : undefined}
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
        >
          Book Verification Consultation
        </Link>
      </div>
    </section>
  );
}
