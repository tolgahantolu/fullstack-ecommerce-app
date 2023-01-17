import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const rootPersistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  cart: cartSlice,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
