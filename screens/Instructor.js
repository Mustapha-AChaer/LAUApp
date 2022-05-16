import React from "react";
import { StyledContainer } from "../components/Style";
import { Ionicons } from "@expo/vector-icons";
import { BackTickButton } from "../components/GlobalComponents";

const Instructor = ({ navigation }) => {
  return (
    <StyledContainer>
      <BackTickButton onPress={() => navigation.navigate("Courses")}>
        <Ionicons name="arrow-back-outline" size={40}>
          Go Back
        </Ionicons>
      </BackTickButton>
    </StyledContainer>
  );
};

export default Instructor;
