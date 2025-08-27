import React from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import { FaBoxOpen, FaGlassMartiniAlt, FaSmile } from "react-icons/fa";

function About({ className = "" }) {
  return (
    <section className={`relative py-12 w-full flex-1 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-body mb-6 text-center drop-shadow-sm">
          Your Friendly Neighborhood Smoke Shop
        </h2>
        <p className="text-body leading-relaxed text-center drop-shadow bg-card rounded-2xl px-6 py-4 inline-block font-semibold text-lg">
          Established in 2024 in Jan Phyl Village, Florida, Green Shed has been
          proudly serving the community with a curated selection of the finest
          smoking accessories. We believe in quality products and knowledgeable,
          friendly service. Our goal is to be more than just a smoke shop; we
          aim to be a welcoming place where customers can find exactly what they
          need with a smile.
        </p>

        {/* Badges */}
        <div className="mt-6 flex gap-3 items-center justify-center flex-wrap">
          <div className="flex items-center gap-2 bg-primary rounded-full px-3 py-2">
            <FaBoxOpen className="text-emerald-300" />
            <span className="text-sm font-medium text-body">Curated Goods</span>
          </div>
          <div className="flex items-center gap-2 bg-primary rounded-full px-3 py-2">
            <FaGlassMartiniAlt className="text-emerald-300" />
            <span className="text-sm font-medium text-body">Local Glass</span>
          </div>
          <div className="flex items-center gap-2 bg-primary rounded-full px-3 py-2">
            <FaSmile className="text-emerald-300" />
            <span className="text-sm font-medium text-body">
              Friendly Staff
            </span>
          </div>
        </div>

        {/* Testimonials carousel (inline, non-duplicating) */}
        <div className="mt-6 flex justify-center">
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
}

export default About;
