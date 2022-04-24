import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  primaryGreen: "#0bab64",
  secondaryGreen: "#3bb78f",
};

const { primary, primaryGreen, secondaryGreen } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight}px;
  background-color: ${primaryGreen};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${primary};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${primary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${primary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${secondaryGreen};
`;

export const StyledInputLabel = styled.Text`
  color: ${primary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${secondaryGreen};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;

  height: 40px;

  ${(props) =>
    props.google == true &&
    `background-color: ${primary};
    color: ${primaryGreen}
  flex-direction: row;
  justify-content: center;`}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 14px;

  ${(props) =>
    props.google == true &&
    `
    color: ${primaryGreen};
    padding-left: 10px;

  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == "FAILED" ? "red" : "green")};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${primary};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${primary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: yellow;
  font-size: 15px;
`;

//Profile Container
export const ProfileBox = styled.View`
  background-color: white;
  height: 500px;
  border-radius: 10px;
  flex: 1;
  margin-top: -20px;
  padding: 10px;
`;

//Library Container
