import React from 'react';
import leaf from '../assets/leaf.svg';

function Header() {
  const handleHomeClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const topEl = document.getElementById('top');
    if (topEl && typeof topEl.scrollIntoView === 'function') {
      try {
        topEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        topEl.scrollIntoView(true);
      }
    } else {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
      // Fallback for very old/quirky browsers
      if (location.hash !== '#top') {
        location.hash = '#top';
      }
    }
  };

  return (
    <header className="bg-header w-full sticky top-0 z-50 relative flex items-center justify-center px-6 py-4 shadow-sm border-b">
      <button
        type="button"
        onClick={handleHomeClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') handleHomeClick(e);
        }}
        aria-label="Go to top"
        title="Back to top"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 focus:outline-none text-title-primary bg-transparent p-0 cursor-pointer"
        style={{ touchAction: 'manipulation' }}
      >
        <img
          src={leaf}
          alt="Marijuana Leaf Icon"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))',
            fill: 'currentColor',
            color: 'inherit',
          }}
        />
      </button>

      <h1 className="whitespace-nowrap text-[clamp(20px,6.4vw,28px)] sm:text-3xl md:text-4xl lg:text-5xl font-bold mx-auto font-superbread-soft pl-12 pr-3 sm:px-6 text-center leading-tight text-title-primary tracking-[0.015em] sm:tracking-[0.06em]">
        GREENSHED SMOKE SHOP
      </h1>

      {/* Doug easter-egg removed from header (now hidden until triggered) */}
    </header>
  );
}

export default Header;
