import { motion } from "framer-motion";
import { FileCheck, Landmark, ScrollText, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Title Verification",
    subtitle: "Check whether the seller can legally transfer the property.",
    icon: Landmark,
    features: ["Ownership history", "Claim check"],
  },
  {
    title: "Encumbrance Check",
    subtitle: "Spot loans, charges, or legal claims tied to the property.",
    icon: ShieldCheck,
    features: ["Loan visibility", "Charge review"],
  },
  {
    title: "Land Records Check",
    subtitle: "Match the paperwork with the official land record trail.",
    icon: ScrollText,
    features: ["Record match", "Boundary issues"],
  },
  {
    title: "Compliance Verification",
    subtitle: "Review approvals and permissions before commitment.",
    icon: FileCheck,
    features: ["Approval status", "Plan compliance"],
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0">
    <rect width="24" height="24" rx="12" fill="#D1FADF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z"
      fill="#12B76A"
    />
  </svg>
);

export default function PropertyVerificationServiceList() {
  return (
    <section id="verification-scope" className="h-container x-round-card">
      <div className="mx-auto">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">What we check</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#050F27] sm:text-4xl md:text-5xl">
            The core checks buyers usually ask for
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            A faster overview of the work that usually matters before token payment or agreement signing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
              >
                <div className="p-3 pb-0">
                  <div className="flex h-[190px] w-full items-center rounded-[22px] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_55%,#f1f5f9_100%)] px-7">
                    <div className="max-w-[75%]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {service.title}
                      </p>
                      <h3 className="mt-4 text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.04em] text-[#050F27]">
                        {service.subtitle}
                      </h3>
                    </div>
                    <div className="ml-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-slate-200 bg-white text-[#050F27] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
