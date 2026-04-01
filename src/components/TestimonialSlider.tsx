"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


const testimonials = [
  {
    id: 1,
    quote: "We got a better entry price than the other brokers were quoting, and the paperwork support helped us move with confidence.",
    author: "Rahul S.",
    role: "Buyer, Mohali",
    avatar: "/avatars/rahul.svg",
  },
  {
    id: 2,
    quote: "The best part was not just the deal. It was knowing what we were signing and where the actual risks were.",
    author: "Neha A.",
    role: "End-user buyer",
    avatar: "/avatars/neha.svg",
  },
  {
    id: 3,
    quote: "Most people just forward inventory. Housyy helped us compare the opportunity and sanity-check the documents before committing.",
    author: "Amit K.",
    role: "Investor",
    avatar: "/avatars/amit.svg",
  },
  {
    id: 4,
    quote: "Response time was quick, the communication was clear, and the deal discussion felt much more transparent than usual.",
    author: "Simran P.",
    role: "Buyer, Chandigarh",
    avatar: "/avatars/simran.svg",
  },
  {
    id: 5,
    quote: "We came in for one deal and stayed because the support after shortlisting was actually useful.",
    author: "Karan M.",
    role: "Repeat buyer",
    avatar: "/avatars/karan.svg",
  },
];

const CARD_WIDTH = 340; // card width + margin

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = () => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden x-round-card h-container">
      <div className="max-w-7xl mx-auto">
        
          <h2 className="mb-4 text-4xl font-bold leading-tight text-[#050F27] md:text-5xl">
            What Buyers Say About <span className="text-red-600">Housyy</span>
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-gray-600">
            Feedback from buyers on the deal experience, the verification support, and the confidence they felt while moving ahead.
          </p>
       

        {/* Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden py-2">
            <motion.div
              className="flex gap-4"
              animate={{ x: -index * CARD_WIDTH }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) handleNext();
                else if (info.offset.x > 50) handlePrev();
              }}
            >
              {testimonials.concat(testimonials).map((testimonial, i) => (
                <div
                  key={i}
                  style={{ minWidth: CARD_WIDTH }}
                  className="bg-white rounded-2xl shadow-md p-6 hover:scale-[1.02] transition-transform"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl text-red-600 font-serif">&quot;</span>
                    {renderStars()}
                  </div>
                  <p className="text-gray-700 text-sm mb-10">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full mr-3"
                     width={600} height={400}
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-4 gap-4">
          
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#050F27]/15 bg-white text-[#050F27] shadow-sm transition hover:border-[#050F27]/35 hover:bg-slate-50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#050F27]/15 bg-white text-[#050F27] shadow-sm transition hover:border-[#050F27]/35 hover:bg-slate-50"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
