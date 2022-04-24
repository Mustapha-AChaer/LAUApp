import { createSlice } from "@reduxjs/toolkit";

const loggedInSlice = createSlice({
  name: "LogInInfo",
  initialState: {
    isLoggedIn: false,
    userInfo: null,
  },
  reducers: {
    login(state, action) {
      console.log("=================Logging In===================");
      console.log();
      console.log("====================================");
      const sentData = action.payload;
      state.userInfo = sentData;

      console.log(action.payload);
    },
    toggleIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const loggedInActions = loggedInSlice.actions;
export default loggedInSlice;
