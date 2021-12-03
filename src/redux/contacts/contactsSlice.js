// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().userAuth.token;
//       // console.log(getState());
//       // console.log(headers);
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//         // console.log(headers);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `contacts`,
//       providesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     createContact: builder.mutation({
//       query: newContact => ({
//         url: '/contacts',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactMutation,
//   useCreateContactMutation,
// } = contactsApi;
