import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
      className="mt-3 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-primary/95 text-header shadow-lg border border-emerald-300/30 flex items-center gap-2 sm:gap-3 w-full max-w-[720px] overflow-hidden"
      style={{ touchAction: 'manipulation' }}
      role="status"
      aria-live="polite"
      aria-label="VIP program promotion"
    >
      <div className="relative flex-1 overflow-hidden">
        {/* Screen reader-friendly static version */}
        <span className="sr-only">VIP Members get 5% off on Monday. No tax on Tuesday!</span>

        {/* Visual ticker animation */}
        <div
          className="whitespace-nowrap animate-ticker text-sm sm:text-base font-medium"
          aria-hidden="true"
        >
          <span className="mx-3">VIP Members get 5% off on Monday. No tax on Tuesday!</span>
          <span className="mx-3">VIP Members get 5% off on Monday. No tax on Tuesday!</span>
          <span className="mx-3">VIP Members get 5% off on Monday. No tax on Tuesday!</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close promotion"
        onClick={handleClose}
        className="shrink-0 inline-flex items-center justify-center rounded-full p-1 sm:p-1.5 text-header/80 hover:text-header focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ml-3"
      >
        <FaTimes className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>
    </div>
  );
}

export default PromoBanner;
