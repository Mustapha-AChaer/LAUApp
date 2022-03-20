import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import NewsCard from "./NewsComponents/NewsCard";

function AppNews(props) {
  return (
    <ScrollView style={styles.newsHeader}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0bab64", "#3bb78f"]}
        style={styles.background}
      />

      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
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
