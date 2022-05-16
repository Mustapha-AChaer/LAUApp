import styled from "styled-components";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  primaryGreen: "#0bab64",
  secondaryGreen: "#3bb78f",
};

const { primaryGreen, secondaryGreen, primary } = Colors;

export const SportsViewContainer = styled.View`
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SportsTitle = styled.Text`
  text-transform: uppercase;
  text-decoration: underline;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const SportsButton = styled.TouchableOpacity`
  background-color: white;

  height: 5%;
  width: 50%;
  border-radius: 30px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const SportsButtonText = styled.Text`
  color: ${primaryGreen};
  font-size: 17px;
  text-transform: uppercase;
`;

//View All Games Style
export const SportsGameCard = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primary};
  height: 100px;
  width: ${Dimensions.get("window").width - 20}px;

  border-radius: 30px;
  margin: 15px;
`;

export const SportsGameTime = styled.View`
  background-color: ${primaryGreen};
  position: absolute;
  border-radius: 30px;
  top: 90;
  height: 30px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SportsGameText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SportType = styled.View`
  background-color: ${primaryGreen};
  height: 20px;
  width: 23%;
  position: absolute;
  top: -5;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SportTeams = styled.View`
  height: 60%;
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SportGameInfo = styled.View`
  height: 20%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SportTeamImage = styled.Image`
  height: 70px;
  width: 70px;
`;

export const VSImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const SportsInfoText = styled.Text`
  font-size: 17px;
`;

///Tryouts Style

export const TryoutsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const TeamContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  align-items: center;
  border-radius: 30px;
  height: 200px;
  margin: 10px 0;
  width: ${Dimensions.get("window").width - 20}px;
  overflow: hidden;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex: 8;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  align-items: center;
`;

export const MoreInfoContainer = styled.View`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px;
`;

export const TryOutTitle = styled.Text`
  font-size: 20px;
  text-decoration: underline;
  text-transform: uppercase;
  color: orange;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: white;
`;

export const LocationText = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: white;
`;

export const ApplyButton = styled.TouchableOpacity`
  height: 30px;
  width: 90px;
  display: flex;
  color: white;
  background-color: black;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
