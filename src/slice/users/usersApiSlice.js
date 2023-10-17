import { apiSlice } from "../apiSlice";

const USERS_URL = "/tsm/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query:() => ({
        url:`${USERS_URL}/logout` ,
        method:"POST"
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
  }),
  updateUser: builder.mutation({
    query: (data) => ({
      url: `${USERS_URL}/profile`,
      method: "PUT",
      body: data,
    }),
}),
getUsers: builder.query({
  query: () => ({
    url: `${USERS_URL}/allusers`,
    method: "GET",
  }),
}),
}),
});

export const { useLoginMutation, useLogoutMutation,useRegisterMutation,useUpdateUserMutation,useGetUsersQuery } = usersApiSlice;
