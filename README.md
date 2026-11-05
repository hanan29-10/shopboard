# MARIGOLD

MARIGOLD is a single-page luxury leather-goods storefront. It renders an editorial home page, product catalog, product details, shopping bag, and simulated checkout.

## Features

- Loads the product catalog from the MARIGOLD products API with loading and retry states.
- Supports category filtering, search, sorting, product details, saved-item feedback, and quick add.
- Persists the shopping bag in local storage and provides cart quantity controls and a simulated checkout.
- Includes responsive navigation, product carousels, a newsletter confirmation, and reduced-motion-aware UI motion.

## Stack

- Vite, TypeScript, HTML, and CSS
- ESLint with TypeScript rules and Prettier
- Husky and lint-staged for pre-commit formatting and linting

## Getting started

```bash
npm install
npm run dev
```

Use `npm run build` to create a production build and `npm run preview` to serve it locally.

## API deployment

The application fetches its catalog from `https://marigold-api.vercel.app` by default. Set `VITE_MARIGOLD_API_BASE_URL` to a different MARIGOLD API host in the hosting environment only when needed, then redeploy the application.

## Repository and folder rename

Rename the GitHub repository to `marigold`, then update the local remote with `git remote set-url origin https://github.com/hanan29-10/marigold.git`. With no process using the project directory, rename the current project folder to `marigold`; Git metadata and relative project paths continue to work.

## Validation

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
```

`npm run format` applies Prettier formatting. The pre-commit hook runs lint-staged for supported staged files.

## Structure

```text
src/
  app/                 Application composition export
  modules/
    cart/              Cart state, persistence, logic, types, and drawer UI
    products/          Product API, catalog state, logic, types, and card UI
  pages/               Route rendering, page UI, event binding, header, footer, and motion
  shared/ui/           Reusable UI utilities such as toast feedback
  styles/              Global stylesheet
public/images/         MARIGOLD product and campaign images
```
