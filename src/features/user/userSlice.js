import {  createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  user: {
    username: 'coding addict',
    theme: 'dracula',
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  loginUser: (state, action) => {
    console.log('login user');
  },
  logoutUser: (state) => {
    console.log('logout user');
  },
  toggleTheme: (state) => {
    console.log('toggle theme');
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;