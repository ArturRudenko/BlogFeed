import {useDispatch} from "react-redux";
import {bindActionCreators} from '@reduxjs/toolkit'
import {blogActions} from "../store/blog/blog.slice";

const actions = {
  ...blogActions
}

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export {useActions}