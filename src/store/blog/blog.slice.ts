import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {THEME_KEY} from "../../utils/constants";
import {getDefaultColorTheme} from "../../utils/helpers";

interface IBlogState {
  colorTheme: string
}

const initialState: IBlogState = {
  colorTheme: localStorage.getItem(THEME_KEY) ?? getDefaultColorTheme()
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.colorTheme = state.colorTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem(THEME_KEY, state.colorTheme)
    }
  }
})

const blogActions = blogSlice.actions
const blogReducer = blogSlice.reducer

export {blogSlice, blogActions, blogReducer}