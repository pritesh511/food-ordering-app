import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";
import userslice from "./slices/userslice";
import orderslice from "./slices/orderslice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cartslice: cartslice,
  userslice: userslice,
  orderslice: orderslice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
