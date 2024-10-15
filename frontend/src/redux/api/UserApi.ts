import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLogin, UserState } from '../../models/User';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shiny-waddle-xqqx4xw9v463pwgx-5000.app.github.dev/',
        prepareHeaders: (headers: any) => {
            const token = localStorage.getItem("token");
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
    
            return headers;
          },
     }),

    endpoints: (builder) => ({
        login: builder.mutation<any, UserLogin> ({
            query: (user: UserLogin) => ({
                url: 'auth/login',
                method: 'POST',
                body: user
            }),
            transformResponse : (res: any) => {
                if(res.data?.token) {
                    localStorage.setItem('token', res.data.token)
                }
                return res
            }
        }),
        getProfile: builder.query<any, void>({
            query: () => 'user/profile',
            transformResponse : (res: any) : UserState => {
                return res.data
            }
        })
        
    }),
})

export const {
    useLoginMutation,
    useGetProfileQuery
} = userApi

export default userApi;