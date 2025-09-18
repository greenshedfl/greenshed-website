Greenshed Website

Responsive, single-page site for Greenshed built with React + Vite and Tailwind CSS. It highlights featured products, an image gallery, reviews, business hours with a neon-style open/closed sign, a store location map, and an age verification gate.

Features

Hero section with logo and call-to-actions (Instagram, Yelp, Call)

About section with badges and a reviews carousel

Product grid of featured items

Gallery with large preview and draggable thumbnail scroller (touch-friendly); hidden scrollbars

Location section with store photo and embedded Google Map with “click to enable” interaction guard

Age Gate: full-screen overlay that locks scroll until confirmed

Fixed header and footer with business address

Tech Stack

React 19 + Vite 7

Tailwind CSS (with custom utilities and keyframes)

ESLint + Prettier

Development

Install dependencies and start the dev server:

npm install
npm run dev

Lint and format:

npm run lint:fix
npm run format

Build for production:

npm run build

Notes on Responsiveness

Mobile-first responsive styling down to 344px width (e.g., Galaxy Z Fold outer screen)

No horizontal scrolling; content scales and wraps appropriately

Gallery preview fills its container; thumbnails scroll via drag/touch with hidden scrollbars

AgeGate is centered and prevents background interaction

License

All rights reserved. Content and assets © Greenshed.
