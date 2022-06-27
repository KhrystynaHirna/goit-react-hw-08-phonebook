import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
}),
  
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query ({
      query: () => '/contacts',
      providesTags: ['Contacts']
    }),
    addContacts: builder.mutation({
      query: (value) => ({
        url: '/contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts']
    }),
      removeContacts: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts']
    }),
  }),
})

export const { useGetContactsQuery, useAddContactsMutation, useRemoveContactsMutation } = contactsApi;