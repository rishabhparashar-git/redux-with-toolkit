import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      console.log("decremented");
      state.counter--;
    },
    boost(state, action) {
      state.counter = state.counter * action.payload; // payload will contain everything passed to this func while calling
    },
    reset(state) {
      state.counter = 0;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
