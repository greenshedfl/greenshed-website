import React from 'react';
import { FaYelp } from 'react-icons/fa';

export default function YelpCTA({ handle = 'greenshed-smokeshop-winter-haven' }) {
  return (
    <a
      href={`https://yelp.com/biz/${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm sm:text-base font-medium w-full"
    >
      <FaYelp className="text-lg sm:text-xl shrink-0" />
      <span className="truncate">Yelp</span>
    </a>
  );
}
