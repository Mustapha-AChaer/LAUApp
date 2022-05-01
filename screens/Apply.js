import React from "react";
import { InnerContainer } from "../components/Style";
import { ImageBackground, StyleSheet, Text, View, Linking } from "react-native";
import {
  ApplyLink,
  ApplyText,
  ApplyTextCard,
} from "../components/AboutUsStyle";

const Apply = () => {
  return (
    <InnerContainer>
      <ImageBackground
        source={require("../assets/application.jpg")}
        style={styles.mainBackground}
      >
        <ApplyTextCard
          onPress={() =>
            Linking.openURL(
              "https://www.lau.edu.lb/apply/first-time-applicant.php"
            )
          }
        >
          <ApplyText>
            Apply to <ApplyLink>LAU</ApplyLink>
          </ApplyText>
        </ApplyTextCard>
      </ImageBackground>
    </InnerContainer>
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
    height: "100%",
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default Apply;
