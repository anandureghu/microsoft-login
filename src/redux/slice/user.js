import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../utils/constants'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      username: null,
      name: null,
    },
    accessToken: null,
    instance: null,
  },
  reducers: {
    login: (state, action) => {
      const { tokenClaim, token, instance } = action.payload
      console.log(tokenClaim)
      state.accessToken = token
      state.instance = instance
      localStorage.setItem(auth.TOKEN, token)

      state.user = {
        username: tokenClaim.preferred_username,
        name: tokenClaim.name,
      }
    },
    logout: (state, action) => {
      state.user = {username: null, name: null}
      state.accessToken = null
      localStorage.setItem(auth.TOKEN, "null")
      state.instance.clearCache()
    }
  }
})


export const { login, logout } = userSlice.actions
export const UserReducer = userSlice.reducer
