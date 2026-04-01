"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WhatsAppSticky = () => {
  const pathname = usePathname();
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!rawNumber) {
    return null;
  }

  const message =
    pathname === "/property-verification"
      ? "Hi, I want help with property verification."
      : pathname === "/hot-deals"
        ? "Hi, I want to know more about your hot deals."
        : pathname.startsWith("/property-single")
          ? "Hi, I am interested in this property and want more details."
          : "Hi, I want to know more about Housyy's hot deals.";

  const href = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex min-h-14 items-center gap-3 rounded-full border border-[#128C7E] bg-[#25D366] px-5 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(18,140,126,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:bottom-6 md:right-6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/16">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2.25c-5.33 0-9.65 4.2-9.65 9.39 0 1.72.48 3.4 1.38 4.86L2.5 21.75l5.45-1.2a9.86 9.86 0 0 0 4.05.86c5.32 0 9.64-4.2 9.64-9.38 0-2.5-1.02-4.86-2.86-6.63A9.74 9.74 0 0 0 12 2.25Z"
            fill="white"
          />
          <path
            d="M12 4.15c-4.26 0-7.72 3.36-7.72 7.5 0 1.58.5 3.11 1.43 4.39l-.83 3.15 3.27-.8a7.9 7.9 0 0 0 3.85.99c4.26 0 7.71-3.36 7.71-7.5 0-2-.82-3.89-2.28-5.31A7.82 7.82 0 0 0 12 4.15Z"
            fill="#25D366"
          />
          <path
            d="M9.31 7.82c-.15 0-.4.05-.62.3-.21.25-.8.78-.8 1.9 0 1.1.82 2.18.93 2.33.11.15 1.6 2.57 3.98 3.5 1.97.77 2.37.62 2.8.58.42-.04 1.36-.54 1.55-1.08.2-.54.2-1 .14-1.08-.06-.1-.23-.15-.49-.28-.25-.12-1.45-.72-1.68-.8-.23-.07-.4-.12-.56.12-.17.23-.64.8-.79.96-.15.17-.3.18-.53.06-.25-.12-1.04-.39-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.15-.24-.02-.36.11-.49.12-.12.24-.3.37-.44.12-.15.16-.24.24-.42.08-.17.04-.32-.02-.44-.06-.12-.55-1.31-.77-1.8-.17-.37-.34-.38-.5-.39h-.43Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </Link>
  );
};

export default WhatsAppSticky;
