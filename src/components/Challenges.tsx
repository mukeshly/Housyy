"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const FraudReportSection = () => {
  const challenges = [
    {
      id: 1,
      number: "01",
      title: "Misleading Details",
      description: "You don't get the full picture about property conditions or legal status."
    },
    {
      id: 2,
      number: "02",
      title: "Overpriced",
      description: "Prices are inflated for extra commission with hidden markups."
    },
    {
      id: 3,
      number: "03",
      title: "Legal Risks",
      description: "Fake NOCs, missing approvals, and hidden property disputes."
    },
    {
      id: 4,
      number: "04",
      title: "No After-Support",
      description: "Left struggling with paperwork, loans & resale on your own."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br h-container x-round-card">
      {/* Floating background elements */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 rounded-full bg-gradient-to-r from-[#1D234F] to-[#31498F]"
              />
              <span className="text-lg font-medium text-gray-700 uppercase tracking-wider">
                Fraud Report
              </span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              3.5M+ Victims
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              People have fallen victim to real estate scams, losing their hard-earned money to fraudulent companies.
              Scammers lure buyers with fake property deals and false promises of high returns.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative text-center md:text-left"
            >
            
              <Link
                href="/hot-deals"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ED1C24] px-8 py-4 text-center text-lg font-semibold text-white shadow-md transition-all hover:bg-[#c4121b] hover:shadow-lg"
              >
                See Hot Deals
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="title mb-5"
            >
              Have You Faced These Challenges With Property Dealers?
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`rounded-2xl p-6 shadow-lg transition-all hover:shadow-xl h-full ${
                    challenge.id === 1
                      ? "bg-gradient-to-br from-slate-900 to-slate-800"
                      : challenge.id === 2
                        ? "bg-gradient-to-br from-slate-800 to-slate-700"
                        : challenge.id === 3
                          ? "bg-gradient-to-br from-slate-900 to-zinc-800"
                          : "bg-gradient-to-br from-zinc-900 to-slate-900"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-2xl font-bold text-white">{challenge.number}</span>
                    <h4 className="text-2xl font-bold text-white">{challenge.title}</h4>
                    <p className="text-gray-200">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className=""
              >
                <h4 className="mb-4 text-2xl font-bold text-slate-300">The List Goes On...</h4>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudReportSection;
