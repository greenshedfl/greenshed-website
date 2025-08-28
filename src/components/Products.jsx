import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";
import glasspipe from "../assets/glasspipe.jpg";
import grinder from "../assets/grinder.jpg";
import rollingpapers from "../assets/rollingpapers.jpg";

// expanded placeholder product data (repeat images to simulate many items)
const products = Array.from({ length: 14 }).map((_, i) => {
  const images = [glasspipe, grinder, rollingpapers];
  return {
    id: i + 1,
    name: `Product ${i + 1}`,
    image: images[i % images.length],
    description: "Placeholder description for this featured item.",
    price: `$${(9 + (i % 7) * 5).toFixed(2)}`,
  };
});

function ProductCard({ product, ariaHidden = false }) {
  return (
    <article
      key={product.id}
      className="w-64 flex-shrink-0 bg-card rounded-2xl p-4 flex flex-col items-center shadow-lg"
      aria-hidden={ariaHidden}
      aria-label={!ariaHidden ? product.name : undefined}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-xl mb-3 border-2 border-white/10"
      />
      <h3 className="text-lg font-semibold text-body text-center">
        {product.name}
      </h3>
      <span className="text-sm text-body/80 mt-1">{product.description}</span>
      <span className="mt-3 text-body font-extrabold text-lg">
        {product.price}
      </span>
    </article>
  );
}

export default function Products() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [speedPxPerSec, setSpeedPxPerSec] = useState(0);

  const DURATION = 45;
  const MIN_SPEED = 4;

  // calculate speed & normalize scroll
  const recompute = () => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const half = track.scrollWidth / 2 || 0;
    const rawSpeed = half / DURATION;
    setSpeedPxPerSec(Math.max(rawSpeed, MIN_SPEED));

    if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
    if (viewport.scrollLeft < 0) viewport.scrollLeft += half;
  };

  // auto-scroll loop
  useEffect(() => {
    let last = performance.now();

    const tick = (now) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) {
        last = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const half = track.scrollWidth / 2;
      const paused = isPaused || userInteracted;
      const deltaMs = now - last;
      last = now;

      if (!paused && speedPxPerSec > 0) {
        const deltaPx = (speedPxPerSec * deltaMs) / 1000;
        viewport.scrollLeft += deltaPx;
        if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    recompute();
    const t1 = setTimeout(recompute, 80);
    const t2 = setTimeout(recompute, 400);

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("resize", recompute);
    window.addEventListener("load", recompute);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", recompute);
      window.removeEventListener("load", recompute);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isPaused, userInteracted, speedPxPerSec]);

  // ensure recompute after layout
  useEffect(() => {
    recompute();
    const t = setTimeout(recompute, 200);
    return () => clearTimeout(t);
  }, []);

  // measure step between cards
  const getItemStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const [first, second] = track.children;
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  };

  // pause auto-scroll for 5s on manual action
  const onUserAction = () => {
    setUserInteracted(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setUserInteracted(false);
      resumeTimerRef.current = null;
    }, 5000);
  };

  const moveStep = (forward = true) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const step = getItemStep() || viewport.clientWidth * 0.25;
    const distance = step * (forward ? 1 : -1);

    onUserAction();
    viewport.scrollBy({ left: distance, behavior: "smooth" });

    const speed = Math.max(speedPxPerSec, MIN_SPEED);
    const rawMs = Math.abs((distance / speed) * 1000);
    const approxMs = Math.max(220, Math.min(rawMs, 1200));

    setTimeout(() => {
      const half = track.scrollWidth / 2;
      if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
      else if (viewport.scrollLeft < 0) viewport.scrollLeft += half;
    }, approxMs + 50);
  };

  return (
    <section className="py-12 w-full">
      <style>{`
        .marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-6 text-center">
          Featured Products
        </h2>

        {/* conveyor viewport */}
        <div className="relative overflow-hidden marquee-mask">
          <div ref={viewportRef} className="w-full overflow-hidden">
            <div ref={trackRef} className="flex gap-6 will-change-transform">
              {/* two passes for infinite loop */}
              {products.concat(products).map((p, i) => (
                <ProductCard
                  key={`${i < products.length ? "a" : "b"}-${p.id}`}
                  product={p}
                  ariaHidden={i >= products.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Rewind one product"
            className="inline-flex items-center justify-center p-3 rounded-full bg-white/8 text-white hover:bg-white/12 transition transform hover:-translate-y-0.5 shadow-sm"
            onClick={() => moveStep(false)}
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            aria-label={isPaused ? "Play conveyor" : "Pause conveyor"}
            className="inline-flex items-center justify-center p-3 rounded-full bg-white/8 text-white hover:bg-white/12 transition transform hover:-translate-y-0.5 shadow-sm"
            onClick={() => {
              if (isPaused) {
                setIsPaused(false);
                setUserInteracted(false);
                if (resumeTimerRef.current) {
                  clearTimeout(resumeTimerRef.current);
                  resumeTimerRef.current = null;
                }
              } else {
                setIsPaused(true);
              }
            }}
          >
            {isPaused ? <FiPlay /> : <FiPause />}
          </button>

          <button
            type="button"
            aria-label="Forward one product"
            className="inline-flex items-center justify-center p-3 rounded-full bg-white/8 text-white hover:bg-white/12 transition transform hover:-translate-y-0.5 shadow-sm"
            onClick={() => moveStep(true)}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
