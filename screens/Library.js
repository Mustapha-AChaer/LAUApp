import React from "react";
import { Button } from "react-native";
import {
  ButtonText,
  InnerContainer,
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
    <StyledContainer>
      <InnerContainer>
        <Ionicons name="library-outline" color={"white"} size={200}></Ionicons>
        <StyledFormArea>
          <StyledButton>
            <ButtonText>
              <TextLinkContent onPress={() => navigation.navigate("Books")}>
                View All Books
              </TextLinkContent>
            </ButtonText>
          </StyledButton>
          <StyledButton>
            <ButtonText>
              <TextLinkContent onPress={() => navigation.navigate("StudyRoom")}>
                Reserve Study Room
              </TextLinkContent>
            </ButtonText>
          </StyledButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Library;
