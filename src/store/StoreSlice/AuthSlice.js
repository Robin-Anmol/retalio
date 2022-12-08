import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  user_id: null,
  otp: 0,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
    },
    addUserId: (state, action) => {
      state.user_id = action.payload;
    },
    updateUser: (state, action) => {
      state.userData = { ...state.userData, personalInfo: action.payload };
    },
    saveOTP: (state, action) => {
      state.otp = action.payload;
    },
    logout: (state, action) => {
      state.userData = null;
    },
  },
});

export const { addUser, addUserId, updateUser, saveOTP, logout } =
  AuthSlice.actions;
export const selectUserData = (state) => state.Auth.userData;
export const selectUser_id = (state) => state.Auth.user_id;
export const selectOTP = (state) => state.Auth.otp;
export default AuthSlice;
