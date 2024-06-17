import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../Constants/apiConstants.ts';
import {LS_USER_TOKEN} from '../../Constants/LSConstants.ts';

interface ITagsInterface {
  "id": number,
  "name": string,
  "slug": string
}

interface ITagsParams {
  search?: string | null
}

export interface IOrderInterface {
  author: number,
  address: string,
  date: string,
  cost: string,
  tags: string,
  description: string
}

export const OrderApi = createApi({
  reducerPath: 'OrderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token: string | null = localStorage.getItem(LS_USER_TOKEN);

      if (token) headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (build) => ({
    getTags: build.query<ITagsInterface[], ITagsParams>({
      query: ({search}) => ({
        url: '/tags',
        params: {search}
      }),
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          await queryFulfilled;
        } catch (error: any) {
          console.log(error);
        }
      }
    }),
    createNewOrder: build.mutation<IOrderInterface, any>({
      query: ({author, address, date, cost, tags, description}) => ({
        url: '/orders',
        method: 'post',
        body: {author, address, date, cost, tags, description}
      })
    })
  })
});

export const {useGetTagsQuery, useCreateNewOrderMutation} = OrderApi