import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import NewsCard from "./NewsComponents/NewsCard";

function AppNews(props) {
  let news = useSelector((state) => state.news.news);
  // console.log(news);

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
}
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
