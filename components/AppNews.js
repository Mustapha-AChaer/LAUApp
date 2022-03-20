import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function AppNews(props) {
  return (
    <ScrollView style={styles.newsHeader}>
      <Text>LAU News</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  newsHeader: {
    width: "100%",
    flex: 1,
  },
});
export default AppNews;
