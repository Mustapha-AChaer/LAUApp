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
const windowHeight = Dimensions.get("window").height;

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  primaryGreen: "#0bab64",
  secondaryGreen: "#3bb78f",
};

const { primaryGreen, secondaryGreen, primary } = Colors;

export const CoursesContainer = styled.View`
  height: ${windowHeight}px;
  background-color: ${primaryGreen};
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoursesListingContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryGreen};

  height: 590px;
  width: 97%;
  border-radius: 30px;
  margin-top: 10px;
`;
