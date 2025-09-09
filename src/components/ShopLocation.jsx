import React, { useState, useRef } from 'react';
import { SHOP_ADDRESS } from './Footer';
import ReviewsCarousel from './ReviewsCarousel';
import NeonOpenSign from './NeonOpenSign';

export default function ShopLocation({ address = SHOP_ADDRESS }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const [mapInteractive, setMapInteractive] = useState(false);
  const iframeRef = useRef(null);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-10 text-center">
          Visit Our Shop
        </h2>

        {/* Unified width container for reviews/hours + map */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Reviews + Hours */}
          <div className="w-full mb-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="w-full">
              <ReviewsCarousel fullWidth />
            </div>
            <div className="w-full flex items-start justify-center md:pl-4 lg:pl-8">
              <div className="w-full max-w-sm">
                <NeonOpenSign showHours={true} />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-80 md:h-[460px] rounded-xl overflow-hidden border border-transparent shadow-lg">
            <iframe
              ref={iframeRef}
              title="shop-location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                pointerEvents: mapInteractive ? 'auto' : 'none',
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* overlay to prevent accidental scroll; click to enable map interaction */}
            {!mapInteractive && (
              <button
                type="button"
                onClick={() => {
                  setMapInteractive(true);
                  setTimeout(() => {
                    if (iframeRef.current) iframeRef.current.focus();
                  }, 50);
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-sm font-medium px-3 text-center"
              >
                Click to enable map interaction (scroll to zoom)
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
