import { FaHandshake, FaHeart, FaSmile, FaTint, FaLeaf } from 'react-icons/fa';
const productBadges = [
  'Black Owned Business',
  'Friendly Staff',
  'Specialty Goods',
  'Resin',
  'Rolling Papers',
];
const getBadgeIcon = text => {
  const t = String(text).toLowerCase();
  if (t.includes('black')) return FaHandshake;
  if (t.includes('friendly') || t.includes('staff')) return FaSmile;
  if (t.includes('resin')) return FaTint;
  if (t.includes('rolling') || t.includes('paper')) return FaLeaf;
  return FaHeart;
};
import React from 'react';
import fume_extra from '../assets/fume_extra.webp';
import fume_ultra from '../assets/fume_ultra.webp';
import geekbar_pulse from '../assets/geekbar_pulse.png';
import geekbar_pulse_x from '../assets/geekbar_pulse_x.jpg';
import grabba_leaf from '../assets/grabba_leaf.jpg';
import lost_mary_off_stamp from '../assets/lost_mary_off_stamp.webp';
import olit_hookah_vape from '../assets/olit_hookah_vape.jpg';
import pink_pussycat_honey from '../assets/pink_pussycat_honey.jpg';
import raz_9000 from '../assets/raz_9000.jpg';
import raz_ltz from '../assets/raz_ltz.webp';
import slushies from '../assets/slushies.jpg';
import vip_honey from '../assets/vip_honey.webp';

const products = [
  { id: 1, name: 'Handheld Device A', image: fume_extra },
  { id: 2, name: 'Handheld Device B', image: fume_ultra },
  { id: 3, name: 'Handheld Device C', image: geekbar_pulse },
  { id: 4, name: 'Handheld Device D', image: geekbar_pulse_x },
  { id: 5, name: 'Natural Leaf Wrap', image: grabba_leaf },
  { id: 6, name: 'Device Accessory', image: lost_mary_off_stamp },
  { id: 7, name: 'Hookah Device', image: olit_hookah_vape },
  { id: 8, name: 'Specialty Honey', image: pink_pussycat_honey },
  { id: 9, name: 'Handheld Device E', image: raz_9000 },
  { id: 10, name: 'Handheld Device F', image: raz_ltz },
  { id: 11, name: 'Slushies', image: slushies },
  { id: 12, name: 'Specialty Honey (VIP)', image: vip_honey },
];

function ProductCard({ product }) {
  return (
    <article
      className="w-full bg-card rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
      aria-label={product.name}
    >
      <div className="w-full aspect-square rounded-xl mb-3 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-medium text-body text-center mt-1 px-2 whitespace-nowrap truncate leading-tight min-h-[1.75rem] md:min-h-[2rem]">
        {product.name}
      </h3>
    </article>
  );
}

export default function Products() {
  return (
    <section className="py-12 w-full">
      <style>{`
        .products-grid img { -webkit-user-drag: none; user-drag: none; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 mb-10 relative">
        <h2 className="pt-8 md:pt-6 text-2xl md:text-3xl font-bold text-body text-center">
          Some of Our Popular Products
        </h2>

        <h3 className="mt-2 mb-4 text-lg md:text-xl font-bold text-body text-center tracking-wide">
          Call to place order ahead of time. <span className="text-body">Ready upon pickup!</span>
        </h3>

        {/* Floating badges moved here from About.jsx */}
        <div className="mb-8 flex gap-2 sm:gap-3 md:gap-4 items-center justify-center flex-wrap overflow-x-auto overflow-y-visible py-2 -mx-4 px-4">
          {productBadges.map((badge, i) => {
            const Icon = getBadgeIcon(badge);
            return (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 bg-primary rounded-full px-3 py-2 animate-badge-pulse max-w-[88vw]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <Icon className="text-emerald-300" />
                <span className="text-sm font-medium text-body whitespace-nowrap">{badge}</span>
              </div>
            );
          })}
        </div>

        {/* Responsive grid with fixed column counts for even rows */}
        <div className="products-grid grid gap-3 sm:gap-4 md:gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <p className="text-center text-base md:text-lg text-body bg-card border border-transparent rounded-xl px-6 py-4 shadow-lg">
            <span className="font-semibold">Don't see something you're looking for?</span>
            <span className="block mt-2">
              We have hundreds more products in store — call or stop in to check our supply. If we
              don't have what you're looking for, we will do our best to find it for you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
