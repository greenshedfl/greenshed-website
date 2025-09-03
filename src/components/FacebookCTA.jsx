import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

export default function FacebookCTA({
  url = 'https://www.facebook.com/share/19eyjsanxH/?mibextid=wwXIfr',
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 items-center gap-2 px-4 py-2.5 sm:px-4 sm:py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-xs sm:text-sm md:text-base font-medium w-full min-h-[44px]"
    >
      <FaFacebookF className="text-base sm:text-lg md:text-xl shrink-0" />
      <span className="whitespace-nowrap leading-tight">Facebook</span>
    </a>
  );
}
