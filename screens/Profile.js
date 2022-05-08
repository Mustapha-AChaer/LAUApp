import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import {
  Colors,
  InnerContainer,
  Line,
  ProfileBox,
  StyledContainer,
} from "../components/Style";
import {
  ApplyLink,
  ContactCard,
  IDText,
  ImageCircular,
  InfoContainer,
  LAUText,
  NameText,
} from "../components/AboutUsStyle";

const { primary, primaryGreen, secondaryGreen } = Colors;

const Profile = () => {
  const userInfo = useSelector((state) => state.loggedInInfo.userInfo);
  console.log(userInfo);
  return (
    <StyledContainer>
      <ContactCard>
        <NameText>{userInfo.name}</NameText>
        <IDText>{userInfo.email}</IDText>
        <IDText>{userInfo.lauID}</IDText>
      </ContactCard>
    </StyledContainer>
  );
};

export default Profile;
