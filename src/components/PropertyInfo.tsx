import { motion } from 'framer-motion';
import Head from 'next/head';

export default function PropertyInfo() {
  return (
    <>
      <Head>
        <title>Housyy | Property Verification Services</title>
       
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="x-round-card h-container"
      >
        <div className="mx-auto flex flex-col gap-12">
          {/* Hero Section */}
          <section className="flex flex-col gap-12">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h1 className="font-poppins text-4xl font-bold leading-[1.02] tracking-[-1.08px] text-[#050F27] sm:text-5xl lg:text-[70px] lg:tracking-[-2.1px]">
                Secure Your Dream Property with Confidence
              </h1>
            </motion.div>

            <div className="flex flex-col gap-4 max-w-[1094px]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-inter text-xl leading-8 text-[#060606] sm:text-2xl sm:leading-9 lg:text-[28px] lg:leading-[40px]"
              >
                <span className="font-normal">
                  Imagine finding the perfect home—beautiful, spacious, and in the ideal location. You are ready to take the next step, but a lingering question remains:{' '}
                </span>
                <span className="font-bold">
                  Is this property truly safe to invest in? At Housyy
                </span>
                <span className="font-normal">
                  , we believe that every property transaction should be stress-free and secure. Thats why our{' '}
                </span>
                <span className="font-bold">Property Verification Services</span>
                <span className="font-normal">
                  {' '}ensure you buy with complete confidence, protecting your hard-earned money from legal, financial, and ownership risks.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="font-plus-jakarta-sans text-3xl font-bold leading-[1.2] text-[#18181B] sm:text-4xl lg:text-[38px] lg:leading-[43.44px]">
                  The Hidden Risks Behind Property Deals
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-inter text-xl font-normal leading-8 text-[#060606] sm:text-2xl sm:leading-9 lg:text-[28px] lg:leading-[40px]"
              >
                A dream home or a lucrative investment can quickly turn into a nightmare if not verified properly. From hidden legal disputes to unclear ownership records, a single mistake can cost you millions. Our experts conduct comprehensive checks to uncover any hidden red flags—so you do not have to.
              </motion.p>
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-[700px]">
                <h3 className="font-poppins text-2xl font-bold text-[#050F27] sm:text-3xl lg:text-4xl">
                  Ready to verify your property?
                </h3>
                <p className="font-inter mt-2 text-lg text-[#060606] sm:text-xl">
                  Get started today and protect your investment with our comprehensive verification process.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-[#050F27] px-8 py-4 font-inter text-lg font-bold text-white transition-all hover:bg-[#050F27]/90"
              >
                Verify Property Now
              </motion.button>
            </div>
          </motion.section>
        </div>
      </motion.main>
    </>
  );
}