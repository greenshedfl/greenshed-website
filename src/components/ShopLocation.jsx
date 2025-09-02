import React, { useState, useRef } from 'react';
import shopPhoto from '../assets/greenshed_shop.jpg';
import { SHOP_ADDRESS } from './Footer';

export default function ShopLocation({ address = SHOP_ADDRESS }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const [mapInteractive, setMapInteractive] = useState(false);
  const iframeRef = useRef(null);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-6 text-center">
          Visit Our Shop
        </h2>
        <div className="grid grid-cols-1 place-items-center gap-8 md:gap-10 min-h-0">
          <div className="w-full max-w-3xl">
            <div className="relative h-80 md:h-[420px] rounded-xl overflow-hidden border border-transparent shadow-lg">
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
                    // focus iframe after enabling so wheel events target it
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
      </div>
    </section>
  );
}
