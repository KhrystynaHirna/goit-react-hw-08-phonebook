import { configureStore } from '@reduxjs/toolkit';
import {contactsApi} from './contacts/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import contactsSlice from "./contacts/contactsSlice";
import authReduser from './auth/auth-slice'

const middleware = getDefaultMiddleware =>  [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch)

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};
