import React from "react";
import Link from "next/link";

const WhyUsSection = () => {
  const features = [
    {
      title: "Curated opportunities",
      desc: "We shortlist properties with stronger value, cleaner details, and better buyer fit."
    },
    {
      title: "Verification support",
      desc: "We help review title, paperwork, and key risk points before you commit."
    },
    {
      title: "Buyer guidance",
      desc: "From shortlisting to paperwork, you get help at the stages where mistakes are expensive."
    },
    {
      title: "Local market understanding",
      desc: "Our focus on the Chandigarh tricity market helps buyers move with more clarity and speed."
    }
  ];

  return (

      <div className="x-round-card transition-all duration-300 ease-in-out  h-container">
        <div className="max-w-[583px] mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.4264 2.5267L20.9458 0.0461426L18.4651 2.5267L20.9458 5.00726L23.4264 2.5267ZM0.322754 2.95635H20.9458V2.09706H0.322754V2.95635Z" fill="#050F27" />
            </svg>
            <p className="font-hanken text-sm text-[#050F27]">Why Us</p>
          </div>
          <h2 className="title">
            Why Serious Buyers Trust Housyy
          </h2>
          <p className="text-lg text-[#050F27]/70">
            Better information, practical support, and a smoother buying journey from enquiry to closing.
          </p>
        </div>

        <div className="flex gap-8 justify-between flex-wrap transition-all duration-500 ease-in-out">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[200px] max-w-[280px] flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative mb-6">
                <div className="w-[89px] h-[89px] rounded-full bg-[#1D234F]/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#1D234F] flex items-center justify-center shadow-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#050F27] font-poppins text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#050F27] font-poppins text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
          <Link
            href="/hot-deals"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#ED1C24] px-8 py-4 text-center text-lg font-semibold text-white shadow-md transition hover:bg-[#c4121b] hover:shadow-lg"
          >
            See Hot Deals
          </Link>
          <Link
            href="/property-verification"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#050F27]/15 bg-white px-8 py-4 text-center text-lg font-semibold text-[#050F27] shadow-sm transition hover:border-[#050F27]/35 hover:bg-slate-50"
          >
            Verify a Property
          </Link>
        </div>
      </div>
 
  );
};

export default WhyUsSection;
