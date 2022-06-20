import { createSlice } from '@reduxjs/toolkit'
import { isLogged } from './login'
import { setToken } from '../../config/tokenManager'
import { setFirstName } from '../../config/profileManager'
import { setLastName } from '../../config/profileManager'

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
      setToken (action.payload)
    },
    userLogoff: (state) => {
      state.isLoggedBool = false
      setToken('')
      setFirstName('')
      setLastName('')
    }
  },
})

// Export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer

