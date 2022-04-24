import { useRoute } from "@react-navigation/native";
import route from "color-convert/route";
import mongoose from "mongoose";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppNews from "../components/AppNews";

function HomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <ImageBackground
          source={require("../assets/mainBackground.jpg")}
          style={styles.mainBackground}
          blurRadius={5}
        >
          <Image
            source={require("../assets/LauLogo.png")}
            style={styles.mainImage}
          />
        </ImageBackground>
      </View>
      <AppNews />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    flex: 1,

    width: "100%",
    backgroundColor: "green",
  },
  mainBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    width: "100%",
    height: "100%",
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default HomePage;
