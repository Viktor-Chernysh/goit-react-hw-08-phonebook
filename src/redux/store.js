import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filterSlice, userAuthSlice } from './slices';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { contactsApi } from './contacts/contactsSlice';
import { userAuthApi } from './auth/userSlice';

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    filter: filterSlice.reducer,
    userAuth: userAuthSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // contactsApi.middleware,
    userAuthApi.middleware,
  ],
});

setupListeners(store.dispatch);
