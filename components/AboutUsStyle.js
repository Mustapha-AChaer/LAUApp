import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  primaryGreen: "#0bab64",
  secondaryGreen: "#3bb78f",
};

const { primaryGreen, secondaryGreen, primary } = Colors;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const ContactCard = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 90%;
  border-radius: 30px;
  margin: 20px;
  padding: 10px;
`;
export const ImageCircular = styled.Image`
  border-radius: 90px;
  width: 130px;
  height: 130px;
`;

export const NameText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
`;

export const IDText = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const LAUText = styled.Text`
  font-size: 15px;
  color: ${primaryGreen};
  font-weight: bold;
  text-decoration: underline;
`;

//Apply Style
export const ApplyTextCard = styled.TouchableOpacity`
  background-color: white;
  padding: 10px;
  border-radius: 30px;
`;
export const ApplyText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const ApplyLink = styled.Text`
  font-size: 20px;
  color: ${primaryGreen};
  font-weight: bold;
  text-decoration: underline;
`;
