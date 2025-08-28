import React from "react";
import greenshedLogo from "../assets/greenshed_logo.png";
import InstagramCTA from "./InstagramCTA";
import YelpCTA from "./YelpCTA";
import CallCTA from "./CallCTA";
import heroBackground from "../assets/background image.jpg";

function Hero() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Full-size background (slightly blurred) */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover filter blur-sm"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Full-section tint (keeps background visible through tint) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero container: stacked on mobile, side-by-side on md+ */}
        <div className="relative rounded-2xl p-8 min-h-[550px] md:min-h-[520px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {/* Left column: larger logo + instagram CTA beneath */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center z-10 text-white transition-all duration-300 px-4 py-2 isolate">
              {/* Neutral feather halo (no color / no green glow) */}
              <div className="absolute z-0 w-[680px] h-[360px] rounded-full bg-gradient-to-tr from-black/30 via-black/15 to-transparent blur-[48px] pointer-events-none" />

              {/* Logo with subtle neutral feathering; no colored glow */}
              <img
                src={greenshedLogo}
                alt="Green Shed Logo"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(circle at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)",
                }}
                className="relative z-10 w-80 sm:w-[28rem] md:w-[540px] lg:w-[640px] object-contain transform-gpu scale-105 hover:scale-110 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Instagram / Yelp / Call CTAs under the logo, inline mode */}
            <div className="mt-6 md:mt-8 z-10 w-full flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-3 items-center">
              <InstagramCTA inline />
              <YelpCTA inline />
              <CallCTA inline phone="+18632297347" />
            </div>
          </div>

          {/* Right column: flavor/about blurb (narrower to compensate) */}
          <div className="w-full md:w-3/5 flex flex-col items-start justify-center z-10">
            <div className="max-w-2xl text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Your one-stop shop for premium products and local glass.
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                At Green Shed, we curate top-quality accessories and locally
                made glassware. Friendly staff, reliable recommendations, and a
                welcoming atmosphere — whether you're a longtime regular or just
                browsing, we're here to help.
              </p>
              {/* optional CTA or small badges could go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
