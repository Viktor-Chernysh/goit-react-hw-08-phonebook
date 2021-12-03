import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isAuth: false,
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.isAuth = true;
      state.user = payload.data.user;
      state.token = payload.data.token;
      // console.log(payload.data);
    },
    setUser: (state, { payload }) => {
      state.user.name = payload.name;
      state.isAuth = true;
    },
    setLogout: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (_, { payload }) => payload,
  },
});
export const { getFilter } = filterSlice.actions;
export const { setUserData, setUser, setLogout } = userAuthSlice.actions;
