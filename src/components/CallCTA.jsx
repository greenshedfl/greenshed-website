import React from 'react';
import { FiPhone } from 'react-icons/fi';

export default function CallCTA({ phone = '+18632297347' }) {
  return (
    <a
      href={`tel:${phone}`}
      className="flex min-w-0 items-center gap-2 px-4 py-2.5 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-xs sm:text-sm md:text-base font-medium w-full min-h-[44px] md:justify-center"
    >
      <FiPhone className="text-base sm:text-lg md:text-xl shrink-0" />
      <span className="whitespace-nowrap leading-tight">Call Us</span>
    </a>
  );
}
