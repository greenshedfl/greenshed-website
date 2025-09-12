import React, { useEffect, useRef, useState } from 'react';

export default function AgeGate() {
  const [confirmed, setConfirmed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (!confirmed && inputRef.current) inputRef.current.focus();
  }, [confirmed]);

  // lock body scrolling and restore on cleanup or when confirmed
  useEffect(() => {
    if (!confirmed) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevDocOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevDocOverflow;
      };
    }
  }, [confirmed]);

  function calculateAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function accept() {
    if (!birthdate) {
      setError('Please enter your date of birth.');
      return;
    }

    const age = calculateAge(birthdate);
    if (age < 21) {
      setError('You must be at least 21 years old to enter.');
      return;
    }

    setError('');
    setClosing(true);
    setTimeout(() => setConfirmed(true), 650);
  }

  function leave() {
    window.location.href = 'https://www.google.com';
  }

  if (confirmed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Age verification"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-lg px-4 transition-all duration-300 overflow-hidden overscroll-none h-screen w-screen min-h-[100vh] ${
        closing ? 'opacity-0 scale-95' : 'opacity-100'
      }`}
      style={{ height: '100dvh' }}
    >
      <div
        className={`w-full mx-auto bg-card rounded-xl p-6 shadow-2xl text-center transform transition-all duration-500 max-w-[92vw] sm:max-w-lg ${
          closing ? 'scale-110 blur-sm' : 'scale-100'
        }`}
      >
        <h2 className="text-lg font-bold text-body mb-3">Age verification</h2>
        <p className="text-sm text-body/90 mb-6">
          You must be 21 years or older to enter this site. Please enter your date of birth to
          continue.
        </p>

        <div className="flex flex-col items-center gap-4">
          <input
            ref={inputRef}
            type="date"
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
            className="px-3 py-2 rounded-md border border-white/20 bg-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={accept}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-white/10 hover:bg-white/20 text-white border border-transparent shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-400/30"
            >
              Continue
            </button>

            <button
              onClick={leave}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transform transition duration-200 ease-out bg-transparent hover:bg-white/5 text-white border border-transparent shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/10"
            >
              Leave site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
