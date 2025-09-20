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
  { id: 1, name: 'Fume Extra', image: fume_extra },
  { id: 2, name: 'Fume Ultra', image: fume_ultra },
  { id: 3, name: 'Geekbar Pulse', image: geekbar_pulse },
  { id: 4, name: 'Geekbar Pulse X', image: geekbar_pulse_x },
  { id: 5, name: 'Grabba Leaf', image: grabba_leaf },
  { id: 6, name: 'Lost Mary Off Stamp', image: lost_mary_off_stamp },
  { id: 7, name: 'Olit Hookah Vape', image: olit_hookah_vape },
  { id: 8, name: 'Pink Pussycat Honey', image: pink_pussycat_honey },
  { id: 9, name: 'Raz 9000', image: raz_9000 },
  { id: 10, name: 'Raz LTZ', image: raz_ltz },
  { id: 11, name: 'Slushies', image: slushies },
  { id: 12, name: 'VIP Honey', image: vip_honey },
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
        <h3 className="mt-2 mb-8 text-lg md:text-xl font-bold text-body text-center tracking-wide">
          Call to place order ahead of time. <span className="text-body">Ready upon pickup!</span>
        </h3>

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
