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

const { primary, primaryGreen, secondaryGreen } = Colors;
const windowHeight = Dimensions.get("window").height;

export const BackTickButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  top: 40;
  left: 10;
  border-radius: 30px;
  background-color: ${primaryGreen};
  padding: 3px;
  height: 45px;
  width: 50px;
`;
