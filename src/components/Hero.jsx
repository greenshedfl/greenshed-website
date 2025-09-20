import React, { useState, useEffect } from 'react';
import greenshedLogo from '../assets/greenshed_logo.png';
import dougPortrait from '../assets/doug.png';
import InstagramCTA from './InstagramCTA';
import YelpCTA from './YelpCTA';
import CallCTA from './CallCTA';
import TikTokCTA from './TikTokCTA';
import FacebookCTA from './FacebookCTA';
import heroBackground from '../assets/background image.jpg';

function Hero() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [showDoug, setShowDoug] = useState(false);

  useEffect(() => {
    if (logoClicks >= 10) {
      setShowDoug(true);
      setLogoClicks(0);
    }
  }, [logoClicks]);

  function onLogoClick() {
    setLogoClicks(c => c + 1);
  }

  function closeDoug() {
    setShowDoug(false);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeDoug();
    }
    if (showDoug) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showDoug]);

  function onDougAnimationEnd() {
    setShowDoug(false);
  }

  return (
    <section className="relative w-full py-16 overflow-visible">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover filter blur-sm"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative rounded-2xl p-6 min-h-[420px] md:min-h-[540px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16">
          <div className="w-full md:w-2/5 md:min-w-0 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center z-10 text-white transition-all duration-300 px-4 py-2 isolate">
              <div className="absolute z-0 w-[90vw] max-w-[680px] h-[46vw] max-h-[360px] rounded-full bg-gradient-to-tr from-black/30 via-black/15 to-transparent blur-[48px] pointer-events-none" />

              <img
                src={greenshedLogo}
                alt="Greenshed Logo"
                onClick={onLogoClick}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onLogoClick()}
                style={{
                  WebkitMaskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)',
                  maskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)',
                }}
                className="relative z-10 w-72 sm:w-[28rem] md:w-[440px] lg:w-[640px] max-w-full object-contain transform-gpu scale-105 hover:scale-110 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer"
              />
            </div>

            <div className="mt-6 md:mt-8 z-10 w-full grid gap-2 sm:gap-3 md:gap-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
              <InstagramCTA inline />
              <YelpCTA inline />
              <TikTokCTA inline handle="greenshed.smokesh" />
              <FacebookCTA />
              {/* Span full width on desktop only, keep natural flow on mobile */}
              <div className="md:col-span-full">
                <CallCTA inline phone="+18632297347" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 md:min-w-0 flex flex-col items-start justify-center z-10 md:pl-2 lg:pl-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Serving Winter Haven with High Quality Products
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                At Greenshed, we have a bit of everything. From custom bongs, resin, Δ 8/9 edibles,
                slushies, and way way more. Friendly staff, reliable recommendations, and a
                welcoming atmosphere — whether you're a longtime regular or just browsing, we're
                here to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showDoug && (
        <div className="absolute left-1/2 top-12 transform -translate-x-1/2 z-40 pointer-events-none">
          <div
            onAnimationEnd={onDougAnimationEnd}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card flex items-center justify-center shadow-2xl transform transition-all duration-700 animate-doug-pop"
          >
            <img
              src={dougPortrait}
              alt="Doug"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
