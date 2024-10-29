import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";
import userslice from "./slices/userslice";
import orderslice from "./slices/orderslice";
import searchCacheSlice from "./slices/searchCacheSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import restslice from "./slices/restslice";
import chatMessageSlice from "./slices/chatMessageSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cartslice: cartslice,
  userslice: userslice,
  orderslice: orderslice,
  restslice: restslice,
  searchCacheSlice: searchCacheSlice,
  chatmessage: chatMessageSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
