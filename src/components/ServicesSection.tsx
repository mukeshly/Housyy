"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Hot Deals",
      description: "Access selected deals priced below market value.",
      proof: "₹20Cr+ deals closed",
      icon: "🔥",
      colorClass: "from-red-50 to-red-100",
      buttonText: "See Hot Deals",
      href: "/hot-deals",
      buttonVariant: "primary",
    },
    {
      id: 2,
      title: "Property Verification",
      description: "We review title, documents, and key risks before you move ahead.",
      proof: "500+ properties verified",
      icon: "✅",
      colorClass: "from-blue-50 to-blue-100",
      buttonText: "Verify a Property",
      href: "/property-verification",
      buttonVariant: "secondary",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="h-container x-round-card overflow-hidden">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8 px-2"
      >
        <motion.div
          className="mb-2 flex items-center gap-3"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
        </motion.div>
        <h2 className="title">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            How Housyy Helps You
          </motion.span>
        </h2>
        <p className="max-w-2xl text-base text-gray-600">
          Whether you are hunting for a better opportunity or checking a property before paying, we help you move with more confidence.
        </p>
      </motion.header>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : {}}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardAnimation}
              whileHover="hover"
              className="h-full"
            >
              <div className={`flex h-full flex-col rounded-2xl border border-gray-200/50 bg-gradient-to-br ${service.colorClass} p-6 shadow-sm transition-all hover:shadow-lg`}>
                <div className="mb-6 flex-grow">
                  <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-gray-900">
                    <motion.span
                      className="text-3xl"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: service.id * 0.2,
                      }}
                    >
                      {service.icon}
                    </motion.span>
                    <span>{service.title}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                  <div className="mt-4 inline-flex rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-gray-600">
                    {service.proof}
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    href={service.href}
                    className={`flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold shadow-md transition-all hover:shadow-lg ${
                      service.buttonVariant === "primary"
                        ? "bg-[#ED1C24] text-white hover:bg-[#c4121b]"
                        : "border border-[#050F27]/15 bg-white text-[#050F27] shadow-sm hover:border-[#050F27]/35 hover:bg-slate-50"
                    }`}
                  >
                    {service.buttonText}
                    <motion.span
                      className={service.buttonVariant === "primary" ? "" : "text-[#050F27]/70"}
                      animate={{
                        x: [0, 4, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                        },
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
