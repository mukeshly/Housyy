import { motion } from "framer-motion";
import { CheckCircle, FileText, ShieldCheck, ClipboardList, Compass } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Consultation",
    description: "Share the property, location, and your current deal stage.",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Document Review",
    description: "We identify what documents are available and what is still missing.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Risk Checks",
    description: "Title, approvals, dues, ownership chain, and compliance are reviewed.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-white" />,
    title: "Findings",
    description: "You get a clear view of the red flags and the open questions.",
  },
  {
    icon: <Compass className="w-6 h-6 text-white" />,
    title: "Next Step Advice",
    description: "We tell you what to negotiate, verify further, or pause on.",
  },
];

export default function VerificationSection() {
  return (
      <section className="h-container rounded-[53px] bg-[#050F27] px-8 py-12 sm:px-12 sm:py-14 md:px-16">
        <div className="mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Verification Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
            A simple consultation-led workflow so you know what deserves scrutiny before you move money.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-[24px] border border-white/8 bg-white/[0.04] p-5 text-center transition-all duration-300 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] shadow-lg">
                {step.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
  );
}
