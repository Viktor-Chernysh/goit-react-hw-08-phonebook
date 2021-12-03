import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterSlice, userAuthSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { contactsApi } from './contacts/contactsSlice';
import { userAuthApi } from './auth/userSlice';
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
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'userAuth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    filter: filterSlice.reducer,
    // userAuth: userAuthSlice.reducer,
    userAuth: persistReducer(persistConfig, userAuthSlice.reducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
    userAuthApi.middleware,
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
