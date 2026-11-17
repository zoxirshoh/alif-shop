# Alif Shop

An e-commerce web store inspired by modern Uzbek online marketplaces, built with React and Redux Toolkit.

**Live demo:** https://alif-shop-three.vercel.app

## Features

- **Shopping cart**: add and remove products, increase or decrease quantities
- **Favorites**: save products and view them on a separate page
- **Product pages** with dynamic routing for each category
- Product carousels and category sections (electronics, cars, home, perfume, sport and more)
- Login modal and toast notifications
- Global state managed with Redux Toolkit slices (`cartSlice`, `favoritesSlice`)

## Tech stack

- React 19
- Redux Toolkit + React Redux
- React Router
- styled-components
- Swiper
- React Toastify, React Icons
- Axios
- Vite, deployed on Vercel

## Project structure

```
src/
  components/   Reusable UI: header, footer, catalog, product sections, swiper
  pages/        Home, product pages, cart (savat), favorites, login modal
  redux/        Store and slices for cart and favorites
  mock/         Mock product data
```

## Getting started

```bash
git clone https://github.com/zoxirshoh/alif-shop.git
cd alif-shop
npm install
npm run dev
```

## Author

**Zohirshoh Rahmonberdiyev**: [GitHub](https://github.com/zoxirshoh)
