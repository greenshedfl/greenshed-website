import React from "react";
import { FiTag, FiClock } from "react-icons/fi";

const promos = [
  {
    id: 1,
    title: "Weekend Sale",
    subtitle: "15% off select glassware",
    code: "WEEKEND15",
    expires: "Sun 11:59pm",
  },
  {
    id: 2,
    title: "New Customer",
    subtitle: "10% off first purchase",
    code: "WELCOME10",
    expires: "No expiration",
  },
  {
    id: 3,
    title: "Buy 2 Get 1",
    subtitle: "On rolling papers (mixed styles)",
    code: "B2G1PAPERS",
    expires: "Limited time",
  },
];

export default function Promotions() {
  return (
    <section className="py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-6 text-center">
          Promotions & Coupons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {promos.map((p) => (
            <div
              key={p.id}
              className="relative bg-card/90 rounded-3xl p-5 flex flex-col justify-between h-full shadow-[0_8px_30px_rgba(0,0,0,0.45)] overflow-hidden"
            >
              {/* Top row: icon + title/subtitle (left), expires (right) */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/6 text-white/90 flex-shrink-0">
                    <FiTag className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-lg font-semibold text-white leading-snug">
                      {p.title}
                    </div>
                    <div className="text-sm text-white/80 mt-1">
                      {p.subtitle}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-white/60 flex items-center gap-2 whitespace-nowrap">
                  <FiClock className="w-4 h-4" />
                  <span className="leading-tight">{p.expires}</span>
                </div>
              </div>

              {/* dashed "tear" separator to evoke coupon feel */}
              <div className="my-3 border-t border-dashed border-white/6" />

              {/* Bottom row: code (left) and redeem button (right) */}
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/6 text-white text-sm font-medium">
                  <span className="font-mono tracking-wide">{p.code}</span>
                </div>

                {/* Redeem button updated to match hero CTA styling & animation */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-white/10 hover:bg-white/20 text-white border border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/20"
                  aria-label={`Use code ${p.code}`}
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/06 text-white/90">
                    <FiTag className="w-4 h-4" />
                  </span>
                  <span className="whitespace-nowrap">Redeem</span>
                </a>
              </div>

              {/* subtle bottom accent line to reinforce coupon panel (non-white) */}
              <div className="absolute left-6 right-6 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/4 to-transparent opacity-10 pointer-events-none rounded-b-3xl" />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-body/70">
          Placeholder promotions. Replace with live promos or link to your POS
          system.
        </p>
      </div>
    </section>
  );
}
