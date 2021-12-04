import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterSlice, userAuthSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
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
const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  userAuthApi.middleware,
];

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    filter: filterSlice.reducer,
    userAuth: persistReducer(persistConfig, userAuthSlice.reducer),
  },
  middleware,
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
