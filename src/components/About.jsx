import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import NeonOpenSign from './NeonOpenSign';
import { FaHandshake, FaHeart, FaSmile, FaCookie, FaTint, FaLeaf } from 'react-icons/fa';

function About({ className = '' }) {
  const aboutBadges = [
    'Black Owned Business',
    'LGBTQ+ Friendly',
    'Friendly Staff',
    'Delta Edibles',
    'Resin',
    'Rolling Papers',
  ];

  return (
    <section className={`relative py-12 w-full flex-1 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 h-full flex flex-col items-center justify-center">
        {/* Badges - prevent wrapping, allow horizontal scroll on small screens */}
        <div className="mt-6 flex gap-2 sm:gap-3 md:gap-4 items-center justify-center flex-wrap overflow-x-auto overflow-y-visible py-2 -mx-4 px-4">
          {aboutBadges.map((badge, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 bg-primary rounded-full px-3 py-2 animate-badge-pulse max-w-[88vw]"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* lightweight icon mapping by index for visual variety */}
              {i === 0 && <FaHandshake className="text-emerald-300" />}
              {i === 1 && <FaHeart className="text-emerald-300" />}
              {i === 2 && <FaSmile className="text-emerald-300" />}
              {i === 3 && <FaCookie className="text-emerald-300" />}
              {i === 4 && <FaTint className="text-emerald-300" />}
              {i === 5 && <FaLeaf className="text-emerald-300" />}

              <span className="text-sm font-medium text-body whitespace-nowrap">{badge}</span>
            </div>
          ))}
        </div>

        {/* Reviews (left) + Neon sign/hours (right) - constrained under badges width */}
        <div className="mt-10 md:mt-12 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-4 sm:mb-6">
          {/* Reviews aligned left and constrained (slightly narrower to make room) */}
          <div className="w-full md:w-3/5 flex items-stretch">
            <div className="w-full">
              <ReviewsCarousel fullWidth />
            </div>
          </div>

          {/* Neon sign + hours to the right - top-aligned to match carousel top */}
          <div className="w-full md:w-2/5 flex items-start justify-center md:pl-8 mt-2 sm:mt-0">
            <div className="w-full max-w-[420px] flex items-start justify-center transform scale-95">
              {/* keep sign inside a fixed-height box but align to top */}
              <div className="w-4/5 flex items-start justify-center">
                <NeonOpenSign showHours={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
