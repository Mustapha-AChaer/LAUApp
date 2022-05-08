import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NewsInfo(props) {
  return (
    <View>
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.description}>{props.info.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: "#0bab64",
    width: "60%",
    height: "40%",
    textDecorationLine: "underline",
  },
  description: {
    fontSize: 10,
    width: "25%",
    height: "60%",

    color: "black",
  },
});

export default NewsInfo;
