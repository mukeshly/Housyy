"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "When should I get a property verified?",
    answer:
      "Ideally before token payment, agreement signing, or any major negotiation decision. The earlier you review the documents, the more leverage you keep.",
  },
  {
    question: "What documents do you usually need to start?",
    answer:
      "Whatever you already have is enough to begin the conversation. Buyers usually share title papers, allotment or sale documents, approvals, demand letters, and seller-provided IDs or ownership records.",
  },
  {
    question: "Can you help even if I have only shortlisted the property?",
    answer:
      "Yes. We can tell you what to ask for, what to verify first, and where the key risk signals usually sit before you move money.",
  },
  {
    question: "Do you verify resale as well as builder inventory?",
    answer:
      "Yes. The exact checks change by deal type, but both resale and builder-side purchases can benefit from title, document, and approval review.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us the property details on WhatsApp and we’ll tell you the best first step based on the location, stage of the deal, and documents available.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="h-container x-round-card">
      <h2 className="mb-12 text-center text-4xl font-bold font-poppins text-[#050F27] md:text-6xl">
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer border-b border-[#EAECF0] pb-4"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#101828] font-inter md:text-xl">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="text-[#050F27]" />
              ) : (
                <ChevronDown className="text-[#050F27]" />
              )}
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 text-base font-inter text-[#667085]">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
