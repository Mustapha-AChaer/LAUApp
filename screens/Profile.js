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

  const tryoutsListing = userInfo.tryouts.map((tryout) => (
    <ContactCard>
      <NameText>{tryout.team}</NameText>
      <IDText>{tryout.location}</IDText>
      <IDText>{tryout.time}</IDText>
      <IDText>{tryout.date}</IDText>
    </ContactCard>
  ));
  return (
    <StyledContainer>
      <ContactCard>
        <NameText>{userInfo.name}</NameText>
        <IDText>{userInfo.email}</IDText>
        <IDText>{userInfo.id || userInfo.lauID}</IDText>
      </ContactCard>
      <ContactCard>
        <NameText>Tryouts</NameText>
      </ContactCard>
      {tryoutsListing}
    </StyledContainer>
  );
};

export default Profile;
