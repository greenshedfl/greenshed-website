import React from "react";
import { FaPhoneAlt, FaYelp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Social() {
  return (
    <section className="py-16 w-full">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-start gap-10 mb-10">
        {/* Instagram Banner */}
        <div className="w-full flex flex-col items-start bg-card rounded-2xl shadow-xl py-4 px-4 mb-4 hover:scale-105 transition-all duration-200">
          <a
            href="https://www.instagram.com/greenshedsmokeshop/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 hover:scale-105 transition-transform"
            aria-label="Instagram"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md">
              <AiFillInstagram size={22} color="#E1306C" />
            </span>
            <span className="text-base md:text-lg font-bold text-body">
              Follow us on Instagram
            </span>
          </a>
        </div>

        {/* Yelp Section */}
        <div className="w-full flex flex-col items-start bg-card rounded-2xl shadow-xl py-4 px-4 hover:scale-105 transition-all duration-200">
          <a
            href="https://www.yelp.com/biz/greenshed-smokeshop-winter-haven"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 hover:scale-105 transition-transform"
            aria-label="Yelp"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md">
              <FaYelp size={22} color="#d32323" />
            </span>
            <span className="text-base md:text-lg font-bold text-body">
              Review us on Yelp
            </span>
          </a>
        </div>

        {/* Phone / Contact */}
        <div className="w-full flex flex-col items-start bg-card rounded-2xl shadow-xl py-4 px-4 hover:scale-105 transition-all duration-200">
          <a
            href="tel:8632297347"
            className="flex items-center gap-5 hover:scale-105 transition-transform"
            aria-label="Phone"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md">
              <FaPhoneAlt size={20} className="text-title-primary" />
            </span>
            <span className="text-base md:text-lg font-bold text-body">
              Call us: (863) 229-7347
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Social;
