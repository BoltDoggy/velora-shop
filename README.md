# Velora — Everyday essentials, shipped worldwide

A responsive e-commerce shopping web app for overseas consumers, built with React + TypeScript + Vite as a frontend take-home exercise. English UI, USD pricing, fully mocked product data — no backend required.

## Quick start

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run typecheck  # strict TypeScript check (no emit)
```

## Features

- **Browse** 21 products across 5 categories, responsive card grid (desktop → 2 columns on phones)
- **Find products**: live search (name / description / category), category chips, sort by featured / price / rating
- **Product details**: modal with rating, reviews, price, quantity stepper, delivery perks
- **Cart**: slide-in drawer, per-line quantity control & remove, free-shipping progress bar ($75 threshold, otherwise $6.99), order summary
- **Checkout**: simulated order confirmation with order number (no real payment)
- **Persistence**: cart and wishlist survive reload via `localStorage`
- **A11y & UX**: keyboard (`Esc` closes dialogs), ARIA labels on controls, scroll locking, toasts, empty states
- Zero runtime dependencies beyond React — custom CSS design system, no UI library

## Project structure

```
src/
  App.tsx            # page composition + filter/sort/search state
  store.tsx          # cart / wishlist / UI state (useReducer + Context, persisted)
  data.ts            # mock catalog & category metadata
  types.ts util.ts
  components/        # Header, Hero, Filters, ProductGrid/Card, ProductModal,
                     # CartDrawer, OrderDone, Toast, Footer, Art, Stars
```

## Deploy (static hosting)

The build is a fully static bundle (`base: './''`, relative paths), so any static host works:

```bash
npm i -g vercel && vercel          # or: vercel deploy --prod
# or
npx netlify deploy --prod --dir=dist
```

Screenshots of the verified desktop & mobile flows are in `docs/screens/`.
