import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: ""
}



export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    userProfile: (state, action) => {
      const data = action.payload
      console.log('dataslice', action)
      state.email = data.email
      state.firstName = data.firstName
      state.lastName = data.lastName
      state.createdAt = data.createdAt
      state.updatedAt = data.updatedAt
      state.id = data.id
    },
    setNames:(state, dataNames) => {
      state.firstName = dataNames.firstName
      state.lastName = dataNames.lastName
    }
  },
})

// Export everything
export const { userProfile, setNames } = profileSlice.actions
export default profileSlice.reducer

