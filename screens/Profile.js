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

const { primary, primaryGreen, secondaryGreen } = Colors;

const Profile = () => {
  const userInfo = useSelector((state) => state.loggedInInfo.userInfo);
  console.log(userInfo);
  return (
    <StyledContainer>
      <ProfileBox>
        <Text>{userInfo.name}</Text>
      </ProfileBox>
    </StyledContainer>
  );
};

export default Profile;
