import React from "react";
import { AiFillInstagram } from "react-icons/ai";

export default function InstagramCTA() {
  return (
    <a
      href="https://www.instagram.com/greenshedsmokeshop/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-6 right-6 z-20 flex items-center gap-3 bg-black/70 hover:bg-black/90 text-white rounded-xl px-5 py-3 shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-slow whitespace-nowrap"
      aria-label="Follow us on Instagram"
    >
      <AiFillInstagram
        size={24}
        className="text-pink-500 drop-shadow-md flex-shrink-0"
      />
      <span className="font-bold text-base md:text-lg drop-shadow-md flex-shrink-0">
        Follow us
      </span>
    </a>
  );
}
