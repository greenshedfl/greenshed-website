import React from 'react';

export const SHOP_ADDRESS = '1506 42nd St NW, Winter Haven, FL 33881';

function Footer() {
  return (
    <footer className="py-2 text-center w-full text-xs border-t border-neutral-300/30 bg-header text-primary relative z-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="leading-tight break-words">
          <span
            className="leading-tight whitespace-nowrap truncate max-w-full"
            title={`\u00a9 ${new Date().getFullYear()} Greenshed Corp. All Rights Reserved.`}
          >
            &copy; {new Date().getFullYear()} Greenshed Corp. All Rights Reserved.
          </span>
        </p>
        <p className="mt-1 break-words">{SHOP_ADDRESS}</p>
      </div>
    </footer>
  );
}

export default Footer;
