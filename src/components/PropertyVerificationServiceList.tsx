import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Title Verification",
    subtitle: "Is Your Property Legally Yours?",
    description: "A property's title tells its true story. Our legal experts verify its ownership history, detect any disputes, and confirm its authenticity before you invest.",
    features: [
      "Avoid future legal battles",
      "Gain full ownership confidence",
      "Ensure the title is 100% legitimate"
    ],
    whatItIs: "Title verification is the process of thoroughly checking property ownership records to confirm that the seller has the legal right to sell the property.",
    whyItMatters: "This crucial step protects buyers from potential disputes or fraud arising from unclear or disputed ownership, ensuring a smooth and secure transaction."
  },
  {
    title: "Encumbrance Check",
    subtitle: "Hidden Financial Liabilities?",
    description: "Uncover any hidden loans, mortgages, or legal claims against the property that could become your responsibility after purchase.",
    features: [
      "Identify undisclosed loans",
      "Check for legal attachments",
      "Verify financial clearance"
    ],
    whatItIs: "An encumbrance check reveals any financial or legal liabilities tied to the property that might affect your ownership rights.",
    whyItMatters: "Discovering hidden liabilities before purchase prevents unexpected debts or legal issues from transferring to you as the new owner."
  },
  {
    title: "Land Records Check",
    subtitle: "Does Everything Match?",
    description: "We cross-verify all land records with physical documents to ensure no discrepancies in measurements, boundaries, or ownership details.",
    features: [
      "Verify property dimensions",
      "Check boundary agreements",
      "Confirm zoning regulations"
    ],
    whatItIs: "Land records verification ensures all official documents match the physical property characteristics and legal descriptions.",
    whyItMatters: "Accurate land records prevent boundary disputes and ensure the property you're buying matches its legal description."
  },

  {
    title: "Compliance Verification",
    subtitle: "Is It Legally Approved?",
    description: "We cross-verify all land records with physical documents to ensure no discrepancies in measurements, boundaries, or ownership details.",
    features: [
      "Verify property dimensions",
      "Check boundary agreements",
      "Confirm zoning regulations"
    ],
    whatItIs: "Land records verification ensures all official documents match the physical property characteristics and legal descriptions.",
    whyItMatters: "Accurate land records prevent boundary disputes and ensure the property you're buying matches its legal description."
  }
];

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-shrink-0">
    <rect width="24" height="24" rx="12" fill="#D1FADF"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.096 7.38967L9.93602 14.2997L8.03602 12.2697C7.68602 11.9397 7.13602 11.9197 6.73602 12.1997C6.34602 12.4897 6.23602 12.9997 6.47602 13.4097L8.72602 17.0697C8.94602 17.4097 9.32601 17.6197 9.75601 17.6197C10.166 17.6197 10.556 17.4097 10.776 17.0697C11.136 16.5997 18.006 8.40967 18.006 8.40967C18.906 7.48967 17.816 6.67967 17.096 7.37967V7.38967Z" fill="#12B76A"/>
  </svg>
);

const InfoSection = ({ whatItIs, whyItMatters }) => (
  <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-200">
    <div>
      <h3 className="text-[#333] font-poppins text-xl md:text-2xl font-bold mb-3 md:mb-4">
        What It Is?
      </h3>
      <p className="text-[#3B3B3B] font-poppins text-base">
        {whatItIs}
      </p>
    </div>
    
    <div>
      <h3 className="text-[#333] font-poppins text-xl md:text-2xl font-bold mb-3 md:mb-4">
        Why It Matters?
      </h3>
      <p className="text-[#3B3B3B] font-poppins text-base">
        {whyItMatters}
      </p>
    </div>
  </div>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="flex flex-col lg:flex-row gap-8 x-round-card shadow-sm"
  >
    <div className="flex-1">
      <div className="mb-6">
        <h3 className="text-[#050F27] font-poppins text-base sm:text-lg font-semibold uppercase tracking-wide">
          {service.title}
        </h3>
        <h2 className="text-[#050F27] font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight mt-2">
          {service.subtitle}
        </h2>
      </div>
      
      <p className="text-[#333] font-inter text-base lg:text-lg mb-6">
        {service.description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[#000] font-inter text-base lg:text-lg">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <InfoSection whatItIs={service.whatItIs} whyItMatters={service.whyItMatters} />
    </div>
    
    <div className="lg:w-[412px] lg:pl-8">
    
       <Image className='rounded-[53px] w-full h-[350]  object-cover' src="/long-house.jpg" alt="" />
      
    </div>
  </motion.div>
);

export default function PropertyVerificationServiceList() {
  return (
    <>
   
      <div className="">
        <div className="h-container mx-auto space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}