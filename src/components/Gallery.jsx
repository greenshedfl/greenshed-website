import React, { useState, useEffect, useRef } from 'react';

// Dynamically import every asset file whose name contains "gallery".
// Supports common image extensions. Vite's import.meta.glob returns an object
// mapping relative paths to the module (whose default export is the URL).
const galleryModules = import.meta.glob('../assets/*gallery*.{jpg,jpeg,png,webp}', {
  eager: true,
});

// Transform into an array of { src, alt } objects with a readable alt derived
// from the filename (strip path, extension, and the word 'gallery').
let IMAGES = Object.keys(galleryModules).map(path => {
  const mod = galleryModules[path];
  const src = mod.default || mod; // default export holds the URL
  const file = path.split('/').pop() || '';
  const base = file.replace(/\.[^.]+$/, '');
  const cleaned = base
    .replace(/gallery/gi, '')
    .replace(/[_-]+/g, ' ')
    .trim();
  const alt = cleaned ? cleaned.replace(/\b\w/g, c => c.toUpperCase()) : 'Gallery Image';
  return { src, alt };
});

// Sort alphabetically by alt for a stable order.
IMAGES = IMAGES.sort((a, b) => a.alt.localeCompare(b.alt));

// Fallback: if no images were found, we keep an empty array and the component
// will render a friendly message instead of breaking navigation controls.

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const draggedRef = useRef(false);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  function prev() {
    setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length);
  }

  function next() {
    setIndex(i => (i + 1) % IMAGES.length);
  }

  // Drag-to-scroll handlers for the thumbnail row (desktop mouse dragging)
  const onThumbMouseDown = e => {
    const el = scrollerRef.current;
    if (!el) return;
    isDownRef.current = true;
    draggedRef.current = false;
    setDragging(false);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollStartRef.current = el.scrollLeft;
  };

  const onThumbMouseMove = e => {
    const el = scrollerRef.current;
    if (!el || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 3) {
      draggedRef.current = true;
      setDragging(true);
    }
    el.scrollLeft = scrollStartRef.current - walk;
  };

  const endDrag = () => {
    isDownRef.current = false;
    setDragging(false);
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl md:text-2xl font-semibold text-body mb-6 text-center">Gallery</h3>

        {IMAGES.length === 0 ? (
          <p className="text-center text-sm text-white/70">No gallery images found.</p>
        ) : (
          <div className="relative">
            <div className="w-full rounded-xl overflow-hidden border border-transparent shadow-lg bg-card">
              {/* responsive preview height: scales with viewport so image fits without cropping */}
              <div className="w-full h-[36vh] sm:h-[40vh] md:h-[55vh] lg:h-[65vh] max-h-[80vh] flex items-center justify-center bg-card">
                <img
                  src={IMAGES[index].src}
                  alt={IMAGES[index].alt}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>

            <div className="mt-4">
              <div
                ref={scrollerRef}
                onMouseDown={onThumbMouseDown}
                onMouseMove={onThumbMouseMove}
                onMouseLeave={endDrag}
                onMouseUp={endDrag}
                className={`flex items-center justify-center space-x-3 md:space-x-4 overflow-x-auto py-2 px-1 scrollbar-none snap-x snap-mandatory ${
                  dragging ? 'cursor-grabbing select-none' : 'cursor-grab'
                }`}
              >
                {IMAGES.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      if (draggedRef.current) return;
                      setIndex(i);
                    }}
                    className={`flex-none rounded-lg overflow-hidden border transition-transform duration-200 ease-out focus:outline-none snap-start ${
                      i === index
                        ? 'border-emerald-400 shadow-2xl scale-105 md:scale-110'
                        : 'border-transparent hover:scale-105'
                    }`}
                    aria-label={`Show ${img.alt}`}
                    aria-current={i === index}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`block object-cover ${
                        i === index ? 'h-28 md:h-32 w-36 md:w-44' : 'h-20 w-28 md:h-24 md:w-32'
                      }`}
                      draggable={false}
                    />
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className={`inline-flex items-center justify-center gap-2 w-28 sm:w-36 md:w-40 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-white/10 hover:bg-white/20 text-white border border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-400/30`}
                >
                  ‹ Previous
                </button>

                <button
                  type="button"
                  onClick={next}
                  className={`inline-flex items-center justify-center gap-2 w-28 sm:w-36 md:w-40 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-white/10 hover:bg-white/20 text-white border border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-400/30`}
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
