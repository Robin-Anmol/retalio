import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase";

const initialState = {
  userData: null,
  user_id: null,
  otp: 0,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    // addUser: (state, action) => {
    //   state.userData = action.payload;
    // },
    // addUserId: (state, action) => {
    //   state.user_id = action.payload;
    // },
    // updateUser: (state, action) => {
    //   state.userData = { ...state.userData, personalInfo: action.payload };
    // },
    // saveOTP: (state, action) => {
    //   state.otp = action.payload;
    // },
    // logout: (state, action) => {
    //   state.userData = null;
    // },
  },
});

export async function SignUp(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}
export async function LogIn(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function Logout() {
  return await signOut(auth);
}





export const { addUser, addUserId, updateUser, saveOTP, logout } =
  AuthSlice.actions;
export const selectUserData = (state) => state.Auth.userData;
export const selectUser_id = (state) => state.Auth.user_id;
export const selectOTP = (state) => state.Auth.otp;
export default AuthSlice;
