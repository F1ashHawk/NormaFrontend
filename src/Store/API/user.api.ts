import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../Constants/apiConstants.ts';
import {LS_USER_TOKEN} from '../../Constants/LSConstants.ts';


export interface IUserInterface {

}

export const UserApi = createApi({
  reducerPath: 'UserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token: string | null = localStorage.getItem(LS_USER_TOKEN);

      if (token) headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: '/users/me/',
      }),
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          console.log(error);
        }
      }
    })
  })
});

export const {useGetUserInfoQuery} = UserApi