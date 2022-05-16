import React from "react";
import {
  SportsButton,
  SportsButtonText,
  SportsTitle,
  SportsViewContainer,
} from "../components/SportsStyle";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Sports = ({ navigation }) => {
  return (
    <SportsViewContainer>
      <ImageBackground
        source={require("../assets/sportMainBackground.jpg")}
        style={styles.mainBackground}
      >
        <SportsTitle>LAU SAILORS</SportsTitle>

        <SportsButton onPress={() => navigation.navigate("LAU Sailors Games")}>
          <SportsButtonText>View All Games</SportsButtonText>
        </SportsButton>
        <SportsButton onPress={() => navigation.navigate("Try Out Dates")}>
          <SportsButtonText>Check Tryouts</SportsButtonText>
        </SportsButton>
      </ImageBackground>
    </SportsViewContainer>
  );
};
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
    height: "112%",
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default Sports;
