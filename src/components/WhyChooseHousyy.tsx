import { motion } from "framer-motion";
import { Scale, FileSearch, MessageSquareText } from "lucide-react";

const reasons = [
  {
    title: "Buyer-side legal review",
    description: "We look at the paperwork from the buyer’s risk point of view, not just the seller’s story.",
    icon: Scale,
  },
  {
    title: "Practical document scrutiny",
    description: "The output is meant to help you make a decision: what looks clean, what is missing, and what needs follow-up.",
    icon: FileSearch,
  },
  {
    title: "Clear communication",
    description: "We help you understand the issue in plain language so you know whether to proceed, negotiate, or pause.",
    icon: MessageSquareText,
  },
];

export default function WhyChooseHousyy() {
  return (
    <section className="h-container x-round-card">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#050F27] text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-tight tracking-tight max-w-5xl"
        >
          Why Choose Housyy for Property Verification?
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[#050F27]/15 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
            >
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#050F27]/6 text-[#050F27]">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#050F27] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
