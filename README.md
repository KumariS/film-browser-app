# 🎬 Film Browser App

A React web application to browse films by categories using The Movie Database (TMDB) API. The app includes carousels, detailed views, and a persistent wish list.

> Developed as part of a frontend engineer technical assessment.

---

## 🚀 Features

- ✅ **Three Film Carousels**: Popular, Top Rated, and Upcoming
- ✅ **Film Detail Page**: Description, image, and contextual styling by category
- ✅ **Add to Wish List**: Users can save favorites
- ✅ **Wish List Page**: View and manage saved films
- ✅ **Category-Based UI Variations**: Fonts, buttons, and layout adapted per category
- ✅ **Responsive Design**: Scrollable horizontal carousels
- ✅ **Modular SCSS**: Follows `@use` structure and BEM naming conventions
- ✅ **No boilerplate**: Handcrafted using Vite without CRA/Next.js
- ✅ **Scalable Code Architecture**

---

## 🧱 Tech Stack

- **React** (ES6+)
- **Vite** as bundler
- **SCSS** (modular with `@use`)
- **TMDB API** for movie data
- **React Router** for navigation
- **React Context API** for wish list management

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KumariS/film-browser-app.git
cd film-browser-app

### 2.Install dependencies
npm install

### 3. Add your environment variable
Create a .env file in the project root:
VITE_TMDB_API_KEY=your_tmdb_api_key_here
You can obtain your API key by creating an account at https://developer.themoviedb.org.
This is the API Key link: https://www.themoviedb.org/settings/api

### 4. Run the app
npm run dev
Visit: http://localhost:5173

# Folder Structure
src/
├── api/                         # API helper functions
│   └── tmdb.js
│
├── components/                  # Reusable components
│   ├── FilmCard/
│   ├── Header/
│   └── WishList/
│
├── context/                     # React context providers
│   └── WishListContext.jsx
│
├── pages/                       # Page-level components
│   ├── Home.jsx
│   └── FilmDetail.jsx
│
├── styles/                      # Global and component styles
│   ├── components/
│   │   ├── _carousel.scss
│   │   ├── _filmCard.scss
│   │   ├── _filmDetail.scss      # FilmDetail page
│   │   ├── _header.scss
│   │   └── _wishlist.scss
│   └── main.scss                # Imports all partials
│
└── App.jsx                      # App root component


### Useful Links
TMDB API Docs: https://developer.themoviedb.org/reference/intro

Vite Docs: https://vitejs.dev/

React Docs: https://reactjs.org/docs/getting-started.html

### Testing
You can extend with unit tests using:

Jest

React Testing Library

#### The screenshots of running movies browser web application UI is under the below folder:
src/assets/FilmDetailPage.png
src/assets/HomePage.png  
src/assets/WishListEmptyPage.png  
src/assets/WishListPage.png  


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
