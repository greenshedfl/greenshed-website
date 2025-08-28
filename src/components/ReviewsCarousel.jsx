import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function ReviewsCarousel({
  testimonials = null,
  fullWidth = false,
}) {
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
  const [prevIndex, setPrevIndex] = useState(null); // used for crossfade
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  // increased crossfade duration for a smoother transition
  const ANIM_DUR = 800;

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, items.length]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  if (!items.length) return null;

  // animate to new index with crossfade
  const changeTo = (newIndex) => {
    setPrevIndex((prev) => {
      // ensure prevIndex holds the current shown index
      return index;
    });
    // update index
    setIndex(() => newIndex);
    // clear prev after animation
    setTimeout(() => setPrevIndex(null), ANIM_DUR + 20);
  };

  const prev = () => {
    setPrevIndex(index);
    setIndex((i) => {
      const nextI = (i - 1 + items.length) % items.length;
      setTimeout(() => setPrevIndex(null), ANIM_DUR + 20);
      return nextI;
    });
  };

  const next = () => {
    setPrevIndex(index);
    setIndex((i) => {
      const nextI = (i + 1) % items.length;
      setTimeout(() => setPrevIndex(null), ANIM_DUR + 20);
      return nextI;
    });
  };

  const goTo = (i) => {
    if (i === index) return;
    setPrevIndex(index);
    setIndex(i);
    setTimeout(() => setPrevIndex(null), ANIM_DUR + 20);
  };

  return (
    <div className={fullWidth ? "w-full" : "w-full max-w-4xl mx-auto"}>
      {/* small local keyframes for a smooth, professional ease */}
      <style>{`
        @keyframes rsFadeIn {
          0% { opacity: 0; transform: translateY(24px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes rsFadeOut {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-24px) scale(0.995); }
        }
      `}</style>

      <div
        className="bg-card rounded-xl p-6 text-body shadow-md relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* fixed-height area keeps layout stable */}
        <div className="relative h-[160px] md:h-[220px] flex items-center justify-center">
          {/* Previous item (fades out) */}
          {prevIndex !== null && items[prevIndex] && (
            <div
              className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 text-center"
              aria-hidden="true"
              style={{
                animation: `rsFadeOut ${ANIM_DUR}ms cubic-bezier(.22,1,.36,1) both`,
                zIndex: 10,
                pointerEvents: "none",
                willChange: "opacity, transform",
              }}
            >
              <div className="max-w-full">
                <p className="text-sm md:text-lg leading-relaxed">
                  {items[prevIndex].text}
                </p>
                <div className="mt-3 flex items-center gap-1 justify-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <FaStar
                      key={i}
                      className="text-amber-400 w-3 h-3 md:w-4 md:h-4"
                    />
                  ))}
                </div>
                <span className="mt-2 text-sm text-body/80 block">
                  {items[prevIndex].author}
                </span>
              </div>
            </div>
          )}

          {/* Current item (fades in) */}
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 text-center"
            aria-live="polite"
            style={{
              animation: `rsFadeIn ${ANIM_DUR}ms cubic-bezier(.22,1,.36,1) both`,
              zIndex: 15,
              pointerEvents: "none", // make the animated panel non-interactive so controls remain clickable
              willChange: "opacity, transform",
            }}
          >
            <div className="max-w-full">
              <p className="text-sm md:text-lg leading-relaxed">
                {items[index].text}
              </p>
              <div className="mt-3 flex items-center gap-1 justify-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <FaStar
                    key={i}
                    className="text-amber-400 w-3 h-3 md:w-4 md:h-4"
                  />
                ))}
              </div>
              <span className="mt-2 text-sm text-body/80 block">
                {items[index].author}
              </span>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 flex items-center z-40">
          <button
            aria-label="Previous review"
            onClick={prev}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition"
            style={{ pointerEvents: "auto" }}
          >
            <FiChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 flex items-center z-40">
          <button
            aria-label="Next review"
            onClick={next}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition"
            style={{ pointerEvents: "auto" }}
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
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-title-primary" : "bg-neutral/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
