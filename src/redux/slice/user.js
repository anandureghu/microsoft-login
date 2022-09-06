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

  },
  reducers: {
    login: (state, action) => {
      const { tokenClaim, token,  } = action.payload
      console.log(tokenClaim)
      state.accessToken = token
      localStorage.setItem(auth.TOKEN, token)

      state.user = {
        username: tokenClaim.preferred_username,
        name: tokenClaim.name,
      }
    },
    logout: (state, action) => {
      state.user = {username: null, name: null}
      state.token = null
      localStorage.setItem(auth.TOKEN, "null")
    }
  }
})


export const { login, logout } = userSlice.action
export const UserReducer = userSlice.reducer
