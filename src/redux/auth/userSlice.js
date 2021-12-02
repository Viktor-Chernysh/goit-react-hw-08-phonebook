import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['User'],
    }),
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
    createUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      // invalidatesTags: ['User'],
    }),
  }),
});

export const { useCreateUserMutation } = userAuthApi;
