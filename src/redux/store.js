import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from './slice/pcBuilderSlice'

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer
  },
})