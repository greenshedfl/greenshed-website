import React from "react";

function Footer() {
  return (
    <footer className="py-4 text-center w-full text-sm border-t bg-header text-primary">
      <div className="max-w-6xl mx-auto px-6">
        <p>
          &copy; {new Date().getFullYear()} Green Shed Smoke Shop. All Rights
          Reserved.
        </p>
        <p className="mt-1">1506 42nd St NW, Winter Haven, FL 33881</p>
      </div>
    </footer>
  );
}

export default Footer;
