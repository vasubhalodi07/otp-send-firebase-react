import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "../feature/otpSlice";

const store = configureStore({
  reducer: {
    otp: otpSlice,
  },
});

export default store;
