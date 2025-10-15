import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-body mb-4">Privacy Policy</h2>
        <p className="text-body text-base md:text-lg leading-relaxed">
          Greenshed does not sell products online and does not collect payment or credential
          information on this website. We do not use analytics or tracking pixels.
        </p>
        <p className="text-body text-sm md:text-base leading-relaxed mt-4">
          If you contact us by phone or email, we will use your information only to respond to your
          inquiry. For any privacy questions, please email
          <a href="mailto:gssales@greenshed.com" className="underline ml-1">
            gssales@greenshed.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
