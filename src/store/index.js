import { configureStore } from '@reduxjs/toolkit'
import UserinfoSlice from './features/UserInfoSlice'
export const store = configureStore({
  reducer: {
    userInfo:UserinfoSlice,
    okay:UserinfoSlice

  },
})