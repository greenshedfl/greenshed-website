# Greenshed Smoke Shop

Responsive, single-page site for Greenshed Smoke Shop built with React + Vite and Tailwind CSS. It showcases products, an image gallery, reviews, business hours with a neon-style open/closed sign, a store location map, and an age verification gate.

## Features

- Hero with logo and CTAs (Instagram, Yelp, Call)
- About section with badges and a reviews carousel
- Products grid of popular items
- Gallery with large preview and draggable thumbnail scroller (touch-friendly); hidden scrollbars
- Shop location: store photo and embedded Google Map with “click to enable” interaction guard
- Age Gate: full-screen overlay that locks scroll until confirmed
- Header always visible; footer with address

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS (with custom utilities and keyframes)
- ESLint + Prettier

## Development

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

Lint and format:

```sh
npm run lint:fix
npm run format
```

Build for production:

```sh
npm run build
```

## Notes on Responsiveness

- Mobile-first responsive styling down to 344px width (e.g., Galaxy Z Fold outer screen)
- No horizontal scrolling; content scales and wraps appropriately
- Gallery preview fills its container; thumbnails scroll via drag/touch with hidden scrollbars
- AgeGate is centered and prevents background interaction

## License

All rights reserved. Content and assets © Greenshed Smoke Shop.
