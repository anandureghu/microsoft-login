import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './slice/user'

export const store = configureStore({
  reducer: {
    user: UserReducer,
  }
})