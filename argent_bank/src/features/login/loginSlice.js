import { createSlice } from '@reduxjs/toolkit'
import { isLogged } from './login'

const initialState = {
  isLoggedBool: {isLogged},
}



export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLoggedBool=true
      console.log('payload',action)
      localStorage.setItem('tokenSessionBank_', action.payload)
      console.log('localStorage' ,localStorage.getItem('tokenSessionBank_'))
    },
    userLogoff: (state) => {
      state.isLoggedBool = false
      localStorage.setItem('tokenSessionBank_', '')
    }
  },
})

// Export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer

