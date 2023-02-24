import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { cartSlice } from './cartSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    api: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
