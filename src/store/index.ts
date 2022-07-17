import { configureStore } from '@reduxjs/toolkit'
import {blogApi} from "./blog/blog.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {blogReducer} from "./blog/blog.slice";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    blog: blogReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(blogApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
