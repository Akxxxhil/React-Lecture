import { configureStore } from '@reduxjs/toolkit'
import TodoSlicer from "./Slice/Todoslicer"

export const store = configureStore({
  reducer: {
    todo:TodoSlicer
  },
})