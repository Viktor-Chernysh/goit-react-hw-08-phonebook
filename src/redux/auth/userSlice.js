import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userAuth.token;
      // console.log(getState());
      // console.log(headers);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        // console.log(headers);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts', 'User'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
      // providesTags: result =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: 'Contacts', id })),
      //         { type: 'Contacts', id: 'LIST' },
      //       ]
      //     : [{ type: 'Contacts', id: 'LIST' }],
    }),
    invalidatesTags: ['Contacts'],
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    getUserInfo: builder.query({
      query: () => `/users/current`,
    }),
    // invalidatesTags: ['User'],
    loginUser: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    createUser: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
      headers: { 'Content-type': 'application/json' },
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useLogOutUserMutation,
  useLoginUserMutation,
  useGetUserInfoQuery,
  useCreateUserMutation,
} = userAuthApi;
