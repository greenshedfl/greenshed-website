import React, { useState } from 'react';

export default function NeonOpenSign({ showHours = true }) {
  const hours = [
    { day: 'Mon', time: '10am-1am' },
    { day: 'Tue', time: '10am-1am' },
    { day: 'Wed', time: '10am-1am' },
    { day: 'Thu', time: '10am-2am' },
    { day: 'Fri', time: '10am-2am' },
    { day: 'Sat', time: '10am-2am' },
    { day: 'Sun', time: '11am-10pm' },
  ];

  const parseRange = str => {
    if (!str || /closed/i.test(str)) return null;
    const m = str.match(
      /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*-\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i
    );
    if (!m) return null;
    const [, sh, sm, sap, eh, em, eap] = m;
    const toMins = (h, mm = '0', ap) => {
      let hour = parseInt(h, 10);
      const mins = parseInt(mm || '0', 10);
      if (ap) {
        const a = ap.toLowerCase();
        if (a === 'pm' && hour !== 12) hour += 12;
        if (a === 'am' && hour === 12) hour = 0;
      }
      return hour * 60 + mins;
    };
    return { start: toMins(sh, sm, sap), end: toMins(eh, em, eap) };
  };

  const computeIsOpenNow = () => {
    const now = new Date();
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const idxForDay = day === 0 ? 6 : day - 1;
    const entry = hours[idxForDay];
    if (!entry) return false;
    const range = parseRange(entry.time);
    if (!range) return false;
    // If the range does not cross midnight, do a simple between check
    if (range.end > range.start) {
      if (mins >= range.start && mins < range.end) return true;
    } else {
      // range crosses midnight: e.g. 10:00 -> 01:00
      // For the DAY the range is listed on, the valid open minutes are from range.start .. 1440
      // The tail (0 .. range.end) belongs to the NEXT calendar day, so don't treat a time
      // earlier than range.end as open when evaluating the listed day.
      if (mins >= range.start) return true;
    }

    // Also check previous day's schedule in case it crossed midnight into current day
    const idxPrev = (idxForDay + 6) % 7; // previous day index
    const prevEntry = hours[idxPrev];
    if (!prevEntry) return false;
    const prevRange = parseRange(prevEntry.time);
    if (!prevRange) return false;
    // If previous day's range crossed midnight and we're before its end, we're still open
    if (prevRange.end <= prevRange.start) {
      if (mins < prevRange.end) return true;
    }

    return false;
  };

  const [isOpen] = useState(() => computeIsOpenNow());

  return (
    // allow the parent to control height; ensure content scales inside
    <div className="flex flex-col items-center space-y-2 w-full max-h-full">
      {/* OPEN/CLOSED sign centered - slightly reduced padding for fitting */}
      <div
        className={`px-6 py-2 rounded-lg bg-black/80 ${
          isOpen
            ? 'border-2 border-pink-400 shadow-[0_0_10px_#ff49b7]'
            : 'border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]'
        }`}
      >
        <span
          className={`font-bold tracking-widest ${
            isOpen
              ? 'text-2xl md:text-3xl text-pink-400 animate-pulse drop-shadow-[0_0_6px_#ff49b7]'
              : 'text-xl md:text-2xl text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]'
          }`}
        >
          {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
      </div>

      {/* Hours container - no forced h-full so it fits the parent wrapper height */}
      {showHours && (
        <div className="bg-black/80 text-emerald-400 border border-emerald-400 rounded-lg shadow-[0_0_10px_#22c55e] px-4 py-3 w-full max-h-full flex items-center">
          <ul className="w-full flex flex-col justify-around text-sm md:text-base leading-relaxed">
            {hours.map((entry, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center py-1 drop-shadow-[0_0_6px_#22c55e]"
              >
                <span className="font-medium">{entry.day}</span>
                <span className="font-medium">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
