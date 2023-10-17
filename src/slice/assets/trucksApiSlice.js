import { apiSlice } from "../apiSlice";

const TRUCKS_URL = "/tsm/assets/trucks";

export const trucksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTruck: builder.mutation({
      query: (data, token) => ({
        url: `${TRUCKS_URL}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
    }),
    updateTruck: builder.mutation({
      query: (data, token) => ({
        url: `${TRUCKS_URL}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
    }),
    getTrucks: builder.query({
      query: (token) => ({
        url: `${TRUCKS_URL}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
    }),
    deleteTruck: builder.mutation({
      query: (truckId, token) => ({
        url: `${TRUCKS_URL}/${truckId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
    }),
    getTruckById: builder.query({
      query: (truckId, token) => ({
        url: `${TRUCKS_URL}/${truckId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useAddTruckMutation,
  useUpdateTruckMutation,
  useGetTrucksQuery,
  useDeleteTruckMutation,
  useGetTruckByIdQuery,
} = trucksApiSlice;
