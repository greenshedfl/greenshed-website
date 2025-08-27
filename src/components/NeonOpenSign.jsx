import React, { useState } from "react";

export default function NeonOpenSign({ showHours = true }) {
  const hours = [
    { day: "Mon", time: "10am-1am" },
    { day: "Tue", time: "10am-1am" },
    { day: "Wed", time: "10am-1am" },
    { day: "Thu", time: "10am-2am" },
    { day: "Fri", time: "10am-2am" },
    { day: "Sat", time: "10am-2am" },
    { day: "Sun", time: "11am-10pm" },
  ];

  const parseRange = (str) => {
    if (!str || /closed/i.test(str)) return null;
    const m = str.match(
      /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*-\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i
    );
    if (!m) return null;
    const [, sh, sm, sap, eh, em, eap] = m;
    const toMins = (h, mm = "0", ap) => {
      let hour = parseInt(h, 10);
      const mins = parseInt(mm || "0", 10);
      if (ap) {
        const a = ap.toLowerCase();
        if (a === "pm" && hour !== 12) hour += 12;
        if (a === "am" && hour === 12) hour = 0;
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
    if (range.end <= range.start) {
      return mins >= range.start || mins < range.end;
    }
    return mins >= range.start && mins < range.end;
  };

  const [isOpen] = useState(() => computeIsOpenNow());

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* OPEN/CLOSED sign centered */}
      <div
        className={`px-6 py-2 rounded-lg bg-black/80 ${
          isOpen
            ? "border-2 border-emerald-400 shadow-[0_0_12px_#22c55e]"
            : "border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
        }`}
      >
        <span
          className={`font-bold tracking-widest ${
            isOpen
              ? "text-2xl text-emerald-400 animate-pulse drop-shadow-[0_0_8px_#22c55e]"
              : "text-xl text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
          }`}
        >
          {isOpen ? "OPEN" : "CLOSED"}
        </span>
      </div>

      {/* Hours container */}
      {showHours && (
        <div className="bg-black/80 text-emerald-400 border border-emerald-400 rounded-lg shadow-[0_0_12px_#22c55e] px-4 py-2 w-52">
          <ul className="space-y-0.5 text-sm">
            {hours.map((entry, idx) => (
              <li
                key={idx}
                className="flex justify-between drop-shadow-[0_0_6px_#22c55e]"
              >
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
