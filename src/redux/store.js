import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice.js";
import { filterReducer } from "./filters/slice.js";
import { authReducer } from "./auth/slice.js";
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: 'token',
};

const persistedReducer = persistReducer(tokenPersistConfig, authReducer);

const rootReducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
  
};

export const store = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',});
export const persistor = persistStore(store);