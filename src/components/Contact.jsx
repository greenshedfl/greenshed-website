import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-4">Contact</h2>
        <p className="text-body text-base md:text-lg leading-relaxed">
          Call us for product availability and pickup options.
        </p>
        <div className="mt-4 text-body text-sm md:text-base leading-relaxed">
          <p>
            Phone:{' '}
            <a href="tel:+18632297347" className="underline">
              +1 (863) 229-7347
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:gssales@greenshed.com" className="underline">
              gssales@greenshed.com
            </a>
          </p>
          <p>Address: 1506 42nd St NW, Winter Haven, FL 33881</p>
        </div>
      </div>
    </section>
  );
}
