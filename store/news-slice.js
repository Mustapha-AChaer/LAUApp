import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [
      {
        key: 1,
        title: "Hello",
        description: "sfdfdfdfdfdfdfd",
      },
      {
        key: 1,
        title: "Hello",
        description: "sfdfdfdfdfdfdfd",
      },
      {
        key: 1,
        title: "Hello",
        description: "sfdfdfdfdfdfdfd",
      },
    ],
    totalQuantitiy: 0,
  },
  reducers: {
    getNews(state, payload) {
      return state.news;
      //   console.log("Hello");
      //   return payload;
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
