"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";

export default function PropertyVerificationHero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const consultationHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I want a property verification consultation."
      )}`
    : "/#contact";

  return (
    <div className="relative overflow-hidden bg-[#1D234F]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-24 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-[-10%] top-16 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute bottom-[-8%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>
      <Header />
      <motion.section
        className="relative flex w-full flex-col bg-[#1D234F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-container mx-auto grid gap-10 py-10 md:grid-cols-[minmax(0,1.1fr)_420px] md:items-center md:py-14">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Property Verification
            </span>
            <div className="mt-6 flex max-w-[860px] flex-col gap-5">
              <motion.h1
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-5xl text-white font-rubik text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-[42px] md:text-[58px]"
              >
                Verify the property before you pay the token.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl text-base leading-7 text-gray-300 sm:text-lg md:text-[1.15rem]"
              >
                Title, approvals, and document risks, reviewed before you move ahead.
              </motion.p>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href={consultationHref}
                target={whatsappNumber ? "_blank" : undefined}
                rel={whatsappNumber ? "noreferrer" : undefined}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-center text-lg font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              >
                Book Consultation
              </Link>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-sm text-white/70 sm:text-base"
            >
              Best before token payment or final negotiation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="mx-auto w-full max-w-[420px]"
          >
            <div className="rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-4 shadow-[0_24px_60px_rgba(5,15,39,0.32)] backdrop-blur-xl">
              <div className="rounded-[26px] border border-white/10 bg-[#10173c]/80 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Verification Scope
                  </p>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Consultation-first
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Title chain", "Ownership history, transfer-right review"],
                    ["Approvals", "Permissions, plans, compliance flags"],
                    ["Money risk", "Charges, loans, dues, open questions"],
                  ].map(([label, copy]) => (
                    <div
                      key={label}
                      className="rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-white/65">{copy}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">Best stage</p>
                    <p className="mt-1 text-sm font-semibold text-white">Before token</p>
                  </div>
                  <div className="rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">Outcome</p>
                    <p className="mt-1 text-sm font-semibold text-white">Clear next step</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
