import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const isItems = state.cart.find((item) => item.id === action.payload.id);
      if (isItems) {
        isItems.qty++;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
  },
});

export const { addTocart } = cartslice.actions;

export default cartslice.reducer;
