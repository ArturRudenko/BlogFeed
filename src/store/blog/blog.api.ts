import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUserResponseDto, UserFactory, UserModel} from "../../models/user";
import {IPostResponseDto} from "../../models/post";
import {ICommentResponseDto} from "../../models/comment";

const blogApi = createApi({
  reducerPath: 'blog/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getUser: build.query<UserModel, number>({
      query: (id: number) => ({
        url: `users/${id}`
      }),
      transformResponse: (response: IUserResponseDto) => UserFactory.fromResponseDto(response)
    }),
    getPosts: build.query<IPostResponseDto[], number>({
      query: (id: number) => ({
        url: `users/${id}/posts`
      })
    }),
    getPost: build.query<IPostResponseDto, number>({
      query: (id: number) => ({
        url: `posts/${id}`
      })
    }),
    deletePost: build.mutation<any, void>({
      query: () => ``
    }),
    getComments: build.query<ICommentResponseDto[], number>({
      query: (id: number) => ({
        url: `posts/${id}/comments`
      })
    })
  })
})

const {useGetUserQuery, useGetPostsQuery, useGetPostQuery, useGetCommentsQuery} = blogApi

export {blogApi, useGetUserQuery, useGetPostsQuery, useGetPostQuery, useGetCommentsQuery}