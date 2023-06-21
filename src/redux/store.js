import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";

export const store = configureStore({
  reducer: {
    cartslice: cartslice,
  },
});
