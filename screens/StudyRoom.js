import React from "react";
import { BackTickButton } from "../components/GlobalComponents";
import { StyledContainer } from "../components/Style";
import { Ionicons } from "@expo/vector-icons";

const StudyRoom = () => {
  return (
    <StyledContainer>
      <BackTickButton onPress={() => navigation.navigate("Library")}>
        <Ionicons name="arrow-back-outline" size={40}>
          Go Back
        </Ionicons>
      </BackTickButton>
    </StyledContainer>
  );
};

export default StudyRoom;
