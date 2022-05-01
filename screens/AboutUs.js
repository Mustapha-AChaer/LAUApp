import React from "react";
import {
  ApplyLink,
  ContactCard,
  IDText,
  ImageCircular,
  InfoContainer,
  LAUText,
  NameText,
} from "../components/AboutUsStyle";
import { ScrollView } from "react-native";
import { StyledContainer } from "../components/Style";

const AboutUs = () => {
  return (
    <StyledContainer>
      <InfoContainer>
        <ScrollView>
          <ContactCard>
            <ImageCircular source={require("../assets/Profile.jpg")} />
            <NameText>Mustapha Abou Chaer</NameText>
            <IDText>201902457</IDText>
          </ContactCard>
          <ContactCard>
            <ImageCircular source={require("../assets/kobzProfile.png")} />
            <NameText>Jad Koubaissi</NameText>
            <IDText>201805002</IDText>
          </ContactCard>
          <ContactCard>
            <IDText>
              We are two <LAUText>LAU</LAUText> senior computer science students
              and junior developers ambitious about having a user-friendly{" "}
              <LAUText>LAU</LAUText> mobile application for students to use and
              love. Aside from the main features provided by{" "}
              <LAUText>LAU</LAUText> portal, our project focuses on the
              extracurricular features that can be provided by{" "}
              <LAUText>LAU</LAUText> to its students through its many services.
              Sent from my iPhone
            </IDText>
          </ContactCard>
        </ScrollView>
      </InfoContainer>
    </StyledContainer>
  );
};

export default AboutUs;
