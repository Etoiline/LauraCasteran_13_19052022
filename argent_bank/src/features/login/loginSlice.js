import { createSlice } from '@reduxjs/toolkit'
import { isLogged } from './login'
import { setToken } from '../../config/tokenManager'

const initialState = {
  isLoggedBool: isLogged(),
}


/**
 * fonction gérant la mise à jour du store à la connexion et la deconnexion
 */
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLoggedBool=true
      //console.log('payload',action)
      setToken (action.payload)
      //localStorage.setItem('tokenSessionBank_', action.payload)
      //console.log('localStorage' ,localStorage.getItem('tokenSessionBank_'))
    },
    userLogoff: (state) => {
      state.isLoggedBool = false
      setToken('')
    }
  },
})

// Export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer

