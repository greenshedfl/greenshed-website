import React from 'react';

/**
 * Reusable product mini card used inside the hamburger menu categories.
 * Styling locked per established design (hover lift, image overlay label).
 */
export default function ProductMiniCard({ name, img, onClick }) {
  const clickable = !!img && typeof onClick === 'function';
  return (
    <button
      type="button"
      onClick={clickable ? onClick : undefined}
      aria-label={img ? `View ${name}` : name}
      disabled={!clickable}
      className={`group rounded-xl bg-card border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all p-2.5 flex flex-col items-center text-center hover:-translate-y-0.5 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
        clickable ? 'cursor-pointer' : 'cursor-default'
      } disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-sm`}
    >
      <div className="w-full h-28 md:h-32 lg:h-36 rounded-lg bg-white flex items-center justify-center overflow-hidden mb-2 relative">
        {img ? (
          <img
            src={img}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
        )}
        {!img && (
          <span className="relative z-10 text-[11px] font-medium text-emerald-800 px-1 leading-tight">
            {name}
          </span>
        )}
        {img && (
          <span className="absolute bottom-1 left-1 right-1 bg-black/45 backdrop-blur-[2px] text-[10px] md:text-[11px] text-white font-medium py-0.5 px-1 rounded shadow-sm tracking-wide">
            {name}
          </span>
        )}
      </div>
      {!img && (
        <span className="text-[11px] font-semibold text-emerald-700 truncate w-full px-1 leading-tight">
          {name}
        </span>
      )}
    </button>
  );
}
