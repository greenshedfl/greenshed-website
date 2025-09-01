import React from 'react';
import leaf from '../assets/leaf.svg';

function Header() {
  const handleHomeClick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-header w-full sticky top-0 z-50 relative flex items-center justify-center px-6 py-4 shadow-sm border-b">
      <button
        onClick={handleHomeClick}
        aria-label="Go to top"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 focus:outline-none text-title-primary bg-transparent p-0"
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
