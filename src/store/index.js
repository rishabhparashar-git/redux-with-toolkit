import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authSlice.reducer,
  },
}); // reducer not reducers!!

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
