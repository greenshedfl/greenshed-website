import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function ReviewsCarousel({ testimonials = null }) {
  const defaultTestimonials = [
    {
      text: "Chill spot...the owners are great people, great attitudes and the fact that they are open late is a winner. 420 all day",
      author: "— Venus, Google Review",
    },
    {
      text: "Great new spot for all your smoking needs! New products CBD, Deltas, and so much more! Family owned and operated make this place a real community gem! Highly recommend!!!!",
      author: "— Kristi, Google Review",
    },
    {
      text: "I come here quite often with my fiance and the staff is super friendly and personable. Prices are fair and the products are great.",
      author: "— Nicolas, Store Review",
    },
  ];

  const items =
    testimonials && testimonials.length ? testimonials : defaultTestimonials;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, items.length]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  if (!items.length) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className="bg-card rounded-xl p-6 text-body shadow-md relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Review text container (min-height to accommodate longer quotes) */}
        <div
          aria-live="polite"
          className="min-h-32 md:min-h-44 flex flex-col justify-center items-center text-center px-10 sm:px-12 md:px-16"
        >
          <p className="text-base md:text-lg leading-relaxed">
            {items[index].text}
          </p>

          {/* 5 star rating (static) */}
          <div
            className="mt-3 flex items-center gap-1"
            aria-hidden="false"
            aria-label="5 out of 5 stars"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <FaStar
                key={i}
                className="text-amber-400 w-3 h-3 md:w-4 md:h-4"
              />
            ))}
          </div>

          <span className="mt-2 text-sm text-body/80">
            {items[index].author}
          </span>
        </div>

        {/* Arrows (positioned further out to avoid crowding long quotes) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 flex items-center z-10">
          <button
            aria-label="Previous review"
            onClick={prev}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition"
          >
            <FiChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 flex items-center z-10">
          <button
            aria-label="Next review"
            onClick={next}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-emerald-400" : "bg-neutral/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
