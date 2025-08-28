import React from "react";
import { FiPhone } from "react-icons/fi";

export default function CallCTA({ inline = false, phone = "+18632297347" }) {
  const pos = inline ? "relative z-10" : "absolute top-6 right-6 z-20";
  const classes = `${pos} inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/20`;

  return (
    <a
      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
      className={classes}
      aria-label="Call Us"
    >
      <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/10 text-white/90">
        <FiPhone className="w-4 h-4" />
      </span>
      <span className="whitespace-nowrap">Call Us</span>
    </a>
  );
}
