import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import NewsCard from "./NewsComponents/NewsCard";

const axios = require("axios").default;

const AppNews = () => {
  const [news, setNews] = useState([]);

  const url = "https://salty-bastion-49991.herokuapp.com/news/get-news";

  useEffect(() => {
    axios.get(url).then((result) => {
      setNews(result.data.data);
    });
  }, []);

  return (
    <ScrollView style={styles.newsHeader}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0bab64", "#3bb78f"]}
        style={styles.background}
      />

      {news.map((element) => (
        <NewsCard news={element} />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  newsHeader: {
    width: "100%",
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});
export default AppNews;
