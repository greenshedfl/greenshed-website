import React from "react";
import leaf from "../assets/leaf.svg";
import doug from "../assets/doug.png";

function Header() {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))",
            fill: "currentColor",
            color: "inherit",
          }}
        />
      </button>

      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mx-auto font-superbread-soft px-6 text-center leading-tight text-title-primary"
        style={{ letterSpacing: "0.06em" }}
      >
        GREENSHED SMOKE SHOP
      </h1>

      {/* Doug neck-up image top right */}
      <div
        className="hidden sm:flex absolute top-1/2 -translate-y-1/2 items-center justify-center"
        style={{ zIndex: 10, right: "1rem" }}
      >
        <img
          src={doug}
          alt="Doug the mascot"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain rounded-full border-2 border-title-primary shadow-md bg-white"
          style={{ objectPosition: "center" }}
        />
      </div>
    </header>
  );
}

export default Header;
