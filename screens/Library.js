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
import { useNavigation } from "@react-navigation/native";

const Library = () => {
  const navigation = useNavigation();
  const handleReservations = () => {};
  return (
    <StyledContainer>
      <InnerContainer>
        <StyledFormArea>
          <StyledButton>
            <ButtonText>
              <TextLinkContent onPress={() => navigation.navigate("Books")}>
                View All Books
              </TextLinkContent>
            </ButtonText>
          </StyledButton>
          <StyledButton onPress={handleReservations}>
            <ButtonText>Reserve Study Rooms</ButtonText>
          </StyledButton>
        </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Library;
