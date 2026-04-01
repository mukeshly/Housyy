import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function PropertyInfo() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const consultationHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I want to discuss property verification for a property I am considering."
      )}`
    : "/#contact";

  return (
    <>
      <Head>
        <title>Housyy | Property Verification Services</title>
       
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-container overflow-hidden rounded-[53px] border border-white/60 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] px-8 py-10 shadow-[0_18px_48px_rgba(15,23,42,0.07)] sm:px-12 sm:py-12 md:px-16"
      >
        <div className="mx-auto flex flex-col gap-8">
          <section className="flex flex-col gap-6">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Buyer-side clarity</p>
              <h2 className="mt-3 font-poppins text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#050F27] sm:text-4xl lg:text-[48px]">
                What buyers usually want checked before they commit
              </h2>
            </motion.div>

            <div className="flex max-w-[1094px] flex-col gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid gap-4 pt-1 md:grid-cols-3"
              >
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                  <div className="mb-3 inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#405585]">
                    Risk 01
                  </div>
                  <h3 className="text-lg font-semibold text-[#050F27]">Title & ownership</h3>
                  <p className="mt-2 text-[15px] leading-6 text-slate-600">
                    Confirm who owns it and can sell it.
                  </p>
                </div>
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                  <div className="mb-3 inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#405585]">
                    Risk 02
                  </div>
                  <h3 className="text-lg font-semibold text-[#050F27]">Approvals & dues</h3>
                  <p className="mt-2 text-[15px] leading-6 text-slate-600">
                    Check approvals, charges, and hidden dues.
                  </p>
                </div>
                <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                  <div className="mb-3 inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#405585]">
                    Risk 03
                  </div>
                  <h3 className="text-lg font-semibold text-[#050F27]">Next-step clarity</h3>
                  <p className="mt-2 text-[15px] leading-6 text-slate-600">
                    Know what looks clean and what to pause on.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4"
          >
            <div className="flex flex-col items-start gap-8 rounded-[28px] border border-slate-200 bg-[#F8FAFF] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-[700px]">
                <h3 className="font-poppins text-2xl font-bold text-[#050F27] sm:text-3xl">
                  Have a property in hand?
                </h3>
                <p className="font-inter mt-2 text-base text-[#060606] sm:text-lg">
                  Share the location and documents. We’ll tell you what to check first.
                </p>
              </div>
              <Link
                href={consultationHref}
                target={whatsappNumber ? "_blank" : undefined}
                rel={whatsappNumber ? "noreferrer" : undefined}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#25D366]/30 bg-white px-8 py-4 text-center text-lg font-semibold text-[#128C7E] shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition hover:border-[#25D366]/50 hover:bg-[#F2FFF7]"
              >
                Book Consultation
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
}
