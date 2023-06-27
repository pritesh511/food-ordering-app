import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  currentRestaurant: {},
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const isItems = state.cart.find((item) => item?.id === action.payload.id);
      if (isItems) {
        isItems.qty++;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromcart: (state, action) => {
      const isItems = state.cart.find(
        (item) => item?.id === action?.payload?.id
      );
      console.log("isItems", isItems);
      if (isItems) {
        if (isItems.qty > 1) {
          isItems.qty--;
        } else {
          const filetr_item = state.cart.filter(
            (item) => item?.id !== action?.payload?.id
          );
          state.cart = filetr_item;
        }
      }
    },
    setCurremtRestaurant: (state, action) => {
      state.currentRestaurant = action.payload;
    },
  },
});

export const { addTocart, setCurremtRestaurant, removeFromcart } =
  cartslice.actions;

export default cartslice.reducer;
