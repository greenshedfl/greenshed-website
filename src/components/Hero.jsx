import React from "react";
import greenshedLogo from "../assets/greenshed_logo.png";
import NeonOpenSign from "./NeonOpenSign";
import InstagramCTA from "./InstagramCTA";
import heroBackground from "../assets/background image.jpg";

function Hero() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Full-size blurred + feathered background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover filter blur-sm"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Feather overlay (softens top & bottom edges) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero container */}
        <div className="relative rounded-2xl p-8 min-h-[550px] md:min-h-[650px] flex flex-col items-center justify-center">
          {/* Top-left OPEN/CLOSED neon sign */}
          <div className="absolute top-6 left-6 z-20">
            <NeonOpenSign showHours={true} />
          </div>

          {/* Top-right Instagram CTA aligned with the Open sign */}
          <div className="absolute top-6 right-6 z-20">
            <InstagramCTA />
          </div>

          {/* Centered logo with subtle feathered backdrop */}
          <div className="relative flex flex-col items-center z-10 bg-black/70 hover:bg-black/90 text-white rounded-2xl px-6 py-4 shadow-lg hover:scale-105 transition-all duration-300">
            {/* Feathered backdrop behind logo */}
            <div className="absolute z-0 w-[480px] h-[240px] rounded-full bg-white/15 blur-[120px]" />

            {/* Logo */}
            <img
              src={greenshedLogo}
              alt="Green Shed Logo"
              className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[420px] object-contain transform-gpu scale-95 hover:scale-105 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Flavor text */}
          <div className="mt-8 flex justify-center z-10  bg-black/70 hover:bg-black/90 text-white rounded-2xl px-6 py-4 shadow-lg hover:scale-105 transition-all duration-300">
            <p className="text-lg sm:text-xl md:text-2xl text-header text-center max-w-2xl leading-snug tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Your one-stop shop for premium products and local glass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
