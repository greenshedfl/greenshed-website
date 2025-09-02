import React from 'react';
import { FiPhone } from 'react-icons/fi';

export default function CallCTA({ phone = '+18632297347' }) {
  return (
    <a
      href={`tel:${phone}`}
      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm sm:text-base font-medium w-full"
    >
      <FiPhone className="text-lg sm:text-xl shrink-0" />
      <span className="truncate">Call Us</span>
    </a>
  );
}
