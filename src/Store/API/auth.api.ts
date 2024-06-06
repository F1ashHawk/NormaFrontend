import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../Constants/apiConstants.ts';
import {LS_USER_TOKEN} from '../../Constants/LSConstants.ts';
import {authActions} from '../Slices/auth.slice.ts';

interface UserAuthData {
  email: string;
  password: string;
}

interface AuthResponse {
  access: string;
  refresh: string;
}

const saveToken = (token: string) => {
  localStorage.setItem(LS_USER_TOKEN, token);
};

const {setAuthenticated} = authActions;

export const AuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    authorization: builder.mutation<AuthResponse, UserAuthData>({
      query: ({email, password}) => ({
        url: '/token/',
        method: 'post',
        body: {email, password},
      }),
      async onQueryStarted(_, {queryFulfilled, dispatch}) {
        try {
          const response = await queryFulfilled;

          console.log(response);
          if ('data' in response) {
            saveToken(response.data.access);
          }
          dispatch(setAuthenticated(true));
        } catch (error: any) {
          console.log(error);
        }
      },
    })
  })
})

export const {useAuthorizationMutation} = AuthApi