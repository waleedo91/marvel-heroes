import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApi = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: () => "/characters",
    }),
    getCharactersById: builder.query({
      query: (id) => `/characters/${id}`,
    }),
    addNewCharacter: builder.mutation({
      query: (newCharacter) => ({
        url: `/characters`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newCharacter,
      }),
    }),
    updateCharacter: builder.mutation({
      query: ({ id, ...updatedCharacter }) => ({
        url: `/characters/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedCharacter,
      }),
    }),
    deleteCharacter: builder.mutation({
      query: (id) => ({
        url: `/characters/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCharactersQuery,
  useGetCharactersByIdQuery,
  useAddNewCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation,
} = charactersApi;
