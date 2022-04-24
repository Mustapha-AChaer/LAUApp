import { configureStore } from "@reduxjs/toolkit";
import loggedInSlice from "./loggedin-slice";
import newsSlice from "./news-slice";

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    loggedInInfo: loggedInSlice.reducer,
  },
});

export default store;
