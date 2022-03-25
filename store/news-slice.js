import { createSlice } from "@reduxjs/toolkit";
const mongoose = require("mongoose");

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [
      {
        key: 1,
        title: "News 1",
        imgURL: "https://180dc.org/wp-content/uploads/2016/02/Picture1-2.jpg",
        description: "sfdfdfdfdfdfdfd",
      },
      {
        key: 2,
        title: "News 2",
        imgURL: "https://180dc.org/wp-content/uploads/2016/02/Picture1-2.jpg",
        description: "sfdfdfdfdfdfdfd",
      },
      {
        key: 3,
        title: "News 3",
        imgURL: "https://180dc.org/wp-content/uploads/2016/02/Picture1-2.jpg",
        description: "sfdfdfdfdfdfdfd",
      },
      {
        key: 4,
        title: "News 4",
        imgURL: "https://180dc.org/wp-content/uploads/2016/02/Picture1-2.jpg",
        description: "sfdfdfdfdfdfdfd",
      },
    ],
    totalQuantitiy: 0,
  },
  reducers: {
    getNews(state, payload) {
      console.log("Hello");
      return state.news;
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
