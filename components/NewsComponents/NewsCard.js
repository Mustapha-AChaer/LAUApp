import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import newsSlice, { newsActions } from "../../store/news-slice";
import NewsInfo from "./NewsInfo";

function NewsCard(props) {
  console.log(props);
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://180dc.org/wp-content/uploads/2016/02/Picture1-2.jpg",
        }}
        style={styles.image}
      />

      <NewsInfo info={props.news} />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "98%",
    height: 100,
    margin: 5,
    padding: 3,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: 100,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default NewsCard;
