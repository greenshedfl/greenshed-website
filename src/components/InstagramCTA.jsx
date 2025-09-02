import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramCTA({ handle = 'greenshed.smokeshop' }) {
  return (
    <a
      href={`https://instagram.com/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm sm:text-base font-medium w-full"
    >
      <FaInstagram className="text-lg sm:text-xl shrink-0" />
      <span className="truncate">Instagram</span>
    </a>
  );
}
