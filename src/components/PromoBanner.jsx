import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// A small promotional banner that appears just below the header and overlays the hero.
// Uses sessionStorage to remember dismissal for the current tab session.
function PromoBanner() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('promo_monday_5off_closed');
      if (dismissed === '1') setOpen(false);
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem('promo_monday_5off_closed', '1');
    } catch {
      // ignore storage errors
    }
  };

  if (!open) return null;

  return (
    <div
      className="mt-2 px-4 sm:px-5 py-1 rounded-full bg-primary/95 text-header shadow-lg border border-emerald-300/30 flex items-center justify-between gap-2 sm:gap-3 w-auto max-w-[90vw] sm:max-w-[560px] md:max-w-[720px] animate-bounce-slow"
      style={{ touchAction: 'manipulation' }}
      role="status"
      aria-live="polite"
    >
      <span className="flex-1 text-center text-sm sm:text-base font-semibold tracking-wide px-1">
        5% off every Monday
      </span>
      <button
        type="button"
        aria-label="Close promotion"
        onClick={handleClose}
        className="shrink-0 inline-flex items-center justify-center rounded-full p-1.5 text-header/80 hover:text-header focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
      >
        <FaTimes className="h-4 w-4" />
      </button>
    </div>
  );
}

export default PromoBanner;
