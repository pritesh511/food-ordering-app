import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";
import userslice from "./slices/userslice";

export const store = configureStore({
  reducer: {
    cartslice: cartslice,
    userslice: userslice,
  },
});
