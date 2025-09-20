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

  // lock body scrolling
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-lg px-4 transition-all duration-300 h-screen w-screen ${
        closing ? 'opacity-0 scale-95' : 'opacity-100'
      }`}
    >
      <div
        className={`w-full mx-auto bg-neutral-900 rounded-xl p-6 shadow-2xl text-center transition-all duration-500 max-w-sm sm:max-w-md ${
          closing ? 'scale-110 blur-sm' : 'scale-100'
        }`}
      >
        <h2 className="text-lg font-bold text-white mb-3">Age Verification</h2>
        <p className="text-sm text-gray-300 mb-6">
          You must be 21 years or older to enter this site. Please enter your date of birth to
          continue.
        </p>

        <div className="flex flex-col items-stretch gap-4">
          <label htmlFor="dob" className="text-left text-sm font-medium text-gray-200">
            Date of Birth
          </label>
          <input
            ref={inputRef}
            id="dob"
            type="date"
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
            className="px-3 py-3 rounded-md border border-gray-400 bg-white text-black text-base w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <button
              onClick={accept}
              className="w-full sm:w-auto px-5 py-3 rounded-md text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-400"
            >
              Continue
            </button>

            <button
              onClick={leave}
              className="w-full sm:w-auto px-5 py-3 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
            >
              Leave Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
