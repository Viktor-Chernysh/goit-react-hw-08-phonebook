import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isAuth: false,
  },
  reducers: {},
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (_, { payload }) => payload,
  },
});
export const { getFilter } = filterSlice.actions;
