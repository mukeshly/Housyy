import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShoppingCart, School, HeartPulse, Train } from "lucide-react";

const ConnectivitySection = () => {
  const connectivityCards = [
    {
      title: "Corporate Hubs & IT Parks",
      icon: <MapPin className="text-blue-600" size={24} />,
      items: [
        { name: "Dmart: IT Park", distance: "" },
        { name: "All India IT Park", distance: "" },
      ],
      color: "bg-blue-50",
    },
    {
      title: "Google Maps Link for Virtual Location Preview",
      icon: <MapPin className="text-red-500" size={24} />,
      items: [{ name: "Google Map Link", distance: "", link: true }],
      color: "bg-red-50",
    },
    {
      title: "Shopping Malls & Entertainment Centers",
      icon: <ShoppingCart className="text-purple-600" size={24} />,
      items: [
        { name: "Dmart", distance: "10km" },
        { name: "All India Mart", distance: "15km" },
      ],
      color: "bg-purple-50",
    },
    {
      title: "Schools & Educational Institutes Nearby",
      icon: <School className="text-green-600" size={24} />,
      items: [
        { name: "Freehold/Leasehold Property", distance: "" },
        { name: "Land Title Clear (Yes/No)", distance: "" },
        { name: "Approval by Local Development Authority", distance: "" },
      ],
      color: "bg-green-50",
    },
    {
      title: "Hospitals & Clinics Nearby",
      icon: <HeartPulse className="text-amber-600" size={24} />,
      items: [
        { name: "Freehold/Leasehold Property", distance: "" },
        { name: "Land Title Clear (Yes/No)", distance: "" },
        { name: "Approval by Local Development Authority", distance: "" },
      ],
      color: "bg-amber-50",
    },
    {
      title: "Metro/Bus/Railway Connectivity",
      icon: <Train className="text-indigo-600" size={24} />,
      items: [{ name: "XX km from Nearest Metro/Station", distance: "" }],
      color: "bg-indigo-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {connectivityCards.map((card, index) => (
          <motion.div key={index} variants={cardVariants} whileHover="hover" className={`rounded-2xl p-6 ${card.color} border border-gray-100 shadow-sm`}>
            <div className="flex items-start gap-4 mb-4">
              <motion.div variants={iconVariants} className="p-2 rounded-lg bg-white shadow-sm">
                {card.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
            </div>

            <ul className="space-y-3 pl-2">
              {card.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.05 * i }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className={"link" in item ? "text-blue-600 underline" : ""}>{item.name}</span>
                  {item.distance && <span className="text-sm text-gray-500 ml-1">({item.distance})</span>}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ConnectivitySection;
