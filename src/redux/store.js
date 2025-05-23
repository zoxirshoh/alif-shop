// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// 1. localStorage'dan yuklash funksiyasi
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return { items: [] };
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("localStoragedan yuklashda xatolik:", e);
    return { items: [] };
  }
};

// 2. localStorage'ga yozish funksiyasi
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("localStoragega yozishda xatolik:", e);
  }
};

const preloadedState = {
  cart: loadFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

// 3. Har safar o‘zgarganda saqlash
store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

