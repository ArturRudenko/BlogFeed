import { configureStore } from '@reduxjs/toolkit'
import {blogApi} from "./blog/blog.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(blogApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>