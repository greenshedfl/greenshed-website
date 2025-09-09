import React, { useState, useEffect, useRef } from 'react';
import { FaPeace, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import PromoBanner from './PromoBanner';

function Header() {
  const [menuMounted, setMenuMounted] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [openPanels, setOpenPanels] = useState({});
  const panelRef = useRef(null);

  useEffect(() => {
    if (menuMounted) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      function onKey(e) {
        if (e.key === 'Escape') closeMenu();
      }
      document.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = original;
        document.removeEventListener('keydown', onKey);
      };
    }
  }, [menuMounted]);

  function openMenu() {
    setMenuMounted(true);
    requestAnimationFrame(() => setPanelVisible(true));
  }

  function closeMenu() {
    setPanelVisible(false);
  }

  useEffect(() => {
    if (!panelVisible && menuMounted) {
      const timer = setTimeout(() => setMenuMounted(false), 450); // slightly < transition duration
      return () => clearTimeout(timer);
    }
  }, [panelVisible, menuMounted]);
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
    <header className="bg-header w-full sticky top-0 z-50 relative flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 shadow-sm border-b min-h-[60px]">
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
        <FaPeace
          aria-hidden={true}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))',
            color: 'inherit',
          }}
        />
      </button>

      <h1 className="whitespace-nowrap text-[clamp(16px,5.2vw,22px)] sm:text-3xl md:text-4xl lg:text-5xl font-bold mx-auto font-superbread-soft pl-12 pr-12 sm:pr-6 sm:pl-14 text-center leading-tight text-title-primary tracking-[0.01em] sm:tracking-[0.06em]">
        GREENSHED SMOKE SHOP
      </h1>

      <div className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 flex items-center">
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={menuMounted && panelVisible}
          aria-controls="site-fullscreen-menu"
          onClick={() => (menuMounted ? closeMenu() : openMenu())}
          className="p-2.5 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700/60 text-title-primary hover:bg-white/30 active:scale-95 transition-all"
          title={menuMounted ? 'Close menu' : 'Open menu'}
        >
          {menuMounted ? (
            <FaTimes className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <FaBars className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-full z-[60] pointer-events-auto">
        <PromoBanner />
      </div>

      {menuMounted && (
        <div
          className="fixed inset-0 z-[70] flex"
          aria-modal="true"
          role="dialog"
          id="site-fullscreen-menu"
        >
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
              panelVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            className={`ml-auto relative w-full sm:w-[90vw] md:w-[78vw] lg:w-[64vw] xl:w-[56vw] 2xl:w-[52vw] max-w-[1100px] h-full bg-white text-gray-900 overflow-y-auto flex flex-col transform transition-transform duration-500 ease-out ${
              panelVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-5 pb-2 flex items-center justify-between border-b border-emerald-100">
              <h2 className="text-lg font-semibold text-emerald-900">Product Categories</h2>
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600/50"
                aria-label="Close menu"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex-1">
              {(() => {
                const groups = [
                  {
                    label: 'Glass & Hardware',
                    items: [
                      'Bongs',
                      'Small Bongs',
                      'Dab Rigs',
                      'Silicone Pipes & Glass Pipes',
                      'Hookah/Hookah Accessories',
                      'Ashtrays',
                    ],
                  },
                  {
                    label: 'Wraps & Accessories',
                    items: [
                      'Mylar Bags',
                      'Wraps',
                      'Cigarellos/Blunts',
                      'Grubba',
                      'Batteries/Mods',
                      'Detox',
                    ],
                  },
                  {
                    label: 'Vapes & Alt Products',
                    items: [
                      'Vapes',
                      'E-Juices',
                      'THCA/THCP/Hemp Products',
                      'Exotic Candy',
                      'Exotic Soda',
                      'Kratom',
                    ],
                  },
                ];

                const categoryProducts = {
                  Bongs: ['Beaker Bong', 'Percolator'],
                  'Small Bongs': ['Mini Beaker', 'Pocket Bong'],
                  'Dab Rigs': ['Quartz Rig', 'Recycler'],
                  'Silicone Pipes & Glass Pipes': ['Silicone Spoon', 'Glass Sherlock'],
                  'Hookah/Hookah Accessories': ['2-Hose Hookah', 'Coal Burner'],
                  Ashtrays: ['Glass Ashtray', 'Silicone Ashtray'],
                  'Mylar Bags': ['3.5g Bag', 'Smell-Proof Bag'],
                  Wraps: ['Hemp Wrap', 'Flavored Wrap'],
                  'Cigarellos/Blunts': ['Vanilla Cigarillo', 'Leaf Wrap'],
                  Grubba: ['Grabba Leaf', 'Leaf Splitter'],
                  'Batteries/Mods': ['510 Battery', 'Vape Mod'],
                  Detox: ['Detox Drink', 'Detox Capsules'],
                  // Adult Novelties removed per spacing request
                  Vapes: ['Geekbar Pulse', 'Fume Extra'],
                  'E-Juices': ['Fruit Punch', 'Menthol Ice'],
                  'THCA/THCP/Hemp Products': ['THCA Flower', 'THCP Cartridge'],
                  'Exotic Candy': ['Japanese Candy', 'UK Chocolate'],
                  'Exotic Soda': ['Mexican Soda', 'Asian Soda'],
                  Kratom: ['Green Vein', 'Red Vein'],
                };

                function ProductCardMini({ name }) {
                  return (
                    <div className="group rounded-xl bg-card border border-emerald-100 shadow hover:shadow-md transition-all p-2 flex flex-col items-center text-center">
                      <div className="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden mb-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 opacity-70" />
                        <span className="relative z-10 text-[11px] font-medium text-emerald-800 px-1 leading-tight">
                          {name}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 truncate w-full px-1 leading-tight">
                        {name}
                      </span>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {groups.map(group => (
                      <div key={group.label} className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold tracking-wide text-emerald-900/80 uppercase pl-1 leading-tight">
                          {group.label}
                        </h3>
                        <ul className="flex flex-col gap-2" aria-label={group.label}>
                          {group.items.map(cat => {
                            const isOpen = !!openPanels[cat];
                            const id = `panel-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                            return (
                              <li
                                key={cat}
                                className={`border rounded-lg overflow-hidden bg-white/95 backdrop-blur-sm shadow-sm transition-colors ${
                                  isOpen ? 'ring-1 ring-emerald-300/60' : 'border-emerald-100'
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => setOpenPanels(p => ({ ...p, [cat]: !p[cat] }))}
                                  className="w-full flex items-center justify-between gap-3 px-4 pr-3 py-2.5 text-left font-medium text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 min-h-[44px]"
                                  aria-expanded={isOpen}
                                  aria-controls={id}
                                >
                                  <span className={`truncate text-[13px] leading-snug`}>{cat}</span>
                                  <FaChevronDown
                                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                                      isOpen ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                <div
                                  id={id}
                                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                                    isOpen
                                      ? 'grid-rows-[1fr] opacity-100'
                                      : 'grid-rows-[0fr] opacity-0'
                                  }`}
                                  style={{ display: 'grid' }}
                                >
                                  <div className="min-h-0 px-3 pb-2 pt-0.5 bg-emerald-25">
                                    <div className="mt-2 grid grid-cols-2 gap-2">
                                      {(categoryProducts[cat] || []).slice(0, 2).map(name => (
                                        <ProductCardMini key={name} name={name} />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                );
              })()}

              <section className="mt-10 pt-6 border-t border-emerald-100/60">
                <h3 className="text-sm font-semibold tracking-wide text-emerald-900/80 uppercase mb-4 pl-1">
                  FAQ
                </h3>
                <dl className="space-y-3">
                  <div className="group rounded-lg border border-emerald-100 bg-white/95 p-3 md:p-4 shadow-sm hover:shadow transition">
                    <dt className="font-medium text-emerald-800 text-sm md:text-[15px]">
                      Are you open until 2am?
                    </dt>
                    <dd className="mt-1 text-emerald-700 text-xs md:text-sm">
                      Yes, on weekends only.
                    </dd>
                  </div>
                  <div className="group rounded-lg border border-emerald-100 bg-white/95 p-3 md:p-4 shadow-sm hover:shadow transition">
                    <dt className="font-medium text-emerald-800 text-sm md:text-[15px]">
                      Do you have Hookah vapes/Hookah accessories?
                    </dt>
                    <dd className="mt-1 text-emerald-700 text-xs md:text-sm">Yes.</dd>
                  </div>
                  <div className="group rounded-lg border border-emerald-100 bg-white/95 p-3 md:p-4 shadow-sm hover:shadow transition">
                    <dt className="font-medium text-emerald-800 text-sm md:text-[15px]">
                      Do you have gummies?
                    </dt>
                    <dd className="mt-1 text-emerald-700 text-xs md:text-sm">Yes.</dd>
                  </div>
                </dl>
              </section>
              <div className="mt-36 mb-4 bg-emerald-50/70 border border-emerald-100 rounded-lg px-4 py-4">
                <p className="text-[13px] md:text-sm text-emerald-800 leading-snug font-semibold mb-2">
                  Questions? <span className="font-normal">Contact us:</span>
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+18632297347"
                    aria-label="Call Greenshed Smoke Shop"
                    className="inline-flex w-fit items-center gap-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-medium px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:ring-offset-1 focus:ring-offset-white transition-colors"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="mailto:gssales@greenshed.com"
                    className="text-[12px] md:text-[13px] text-emerald-800 underline decoration-emerald-400/60 decoration-dotted underline-offset-2 hover:text-emerald-900 break-all"
                  >
                    gssales@greenshed.com
                  </a>
                  <p className="text-[12px] md:text-[13px] text-emerald-800/90 leading-snug">
                    1506 42nd St NW
                    <br />
                    Winter Haven, FL 33881
                  </p>
                </div>
              </div>
            </div>
            {/* Footer area inside panel (optional future links) */}
            <div className="p-5 border-t border-emerald-100 text-xs text-emerald-700/70 space-y-2">
              <p className="text-emerald-800/90 font-medium tracking-wide">
                Become a VIP! Call or check store for details.
              </p>
              <p>&copy; {new Date().getFullYear()} Greenshed Smoke Shop</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
