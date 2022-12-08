import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./StoreSlice/AuthSlice";

const Store = configureStore({
  reducer: {
    Auth: AuthReducer.reducer,
  },
});

export default Store;
