"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I want to know more about your property deals and verification support."
      )}`
    : "/property-verification";

  const links = {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Hot Deals", href: "/hot-deals" },
      { label: "Property Verification", href: "/property-verification" },
    ],
    company: [
      { label: "Book Consultation", href: "/property-verification" },
      { label: "See Hot Deals", href: "/hot-deals" },
      { label: "Buyer Support", href: whatsappHref },
    ],
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-container">
        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="space-y-6">
            <Image src={logo} className="!w-35" alt="Housyy Logo" />
            <p className="text-gray-600 leading-relaxed">
              Housyy helps buyers discover below-market opportunities and move forward with clearer property verification support.
            </p>
          </motion.div>
          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {links.quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={link.href} className="text-gray-600 transition-colors hover:text-[#050F27]">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Company */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Company</h3>
            <ul className="space-y-4">
              {links.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
                    className="text-gray-600 transition-colors hover:text-[#050F27]"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Need Help */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Need Help?</h3>
            <p className="text-gray-600">
              Talk to us directly for hot deals, buyer support, or property verification.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500"
        >
          © {new Date().getFullYear()} Housyy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
