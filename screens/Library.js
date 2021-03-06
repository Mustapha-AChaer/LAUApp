import React from "react";
import { Button } from "react-native";
import { Text, ImageBackground, StyleSheet } from "react-native";

import {
  ButtonText,
  InnerContainer,
  LibraryContainer,
  StyledButton,
  StyledContainer,
  StyledFormArea,
  TextLinkContent,
} from "../components/Style";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
//bookmark-outline
const Library = () => {
  const navigation = useNavigation();
  const handleReservations = () => {};
  return (
    <ImageBackground
      source={require("../assets/laulibrary.png")}
      style={styles.mainBackground}
    >
      <LibraryContainer>
        <Ionicons name="library-outline" color={"white"} size={200}></Ionicons>
        <StyledFormArea>
          <StyledButton>
            <ButtonText onPress={() => navigation.navigate("Books")}>
              View All Books
            </ButtonText>
          </StyledButton>
          <StyledButton>
            <ButtonText onPress={() => navigation.navigate("StudyRoom")}>
              Reserve Study Room
            </ButtonText>
          </StyledButton>
        </StyledFormArea>
      </LibraryContainer>
    </ImageBackground>
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

    width: "100%",
    height: "100%",
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default Library;
