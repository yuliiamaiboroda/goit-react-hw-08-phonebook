import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import contactsReducer from "./contacts/contacts-slice";
import { filtersReducer } from "./filter/filter-slice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer:{
  filter: filtersReducer,
  auth: persistedReducer,
  contacts: contactsReducer,
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

export const persistor = persistStore(store);