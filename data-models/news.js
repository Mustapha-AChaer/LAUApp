const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    key: {
      type: Number,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photoLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
