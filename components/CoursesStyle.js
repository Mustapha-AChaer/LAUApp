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
  padding: 3px;
  height: 590px;
  width: 97%;
  border-radius: 30px;
  margin-top: 10px;
`;

export const CourseCard = styled.View`
  height: 150px;
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  margin: 3px;
  padding: 7px;
  background-color: white;
`;

export const CourseTitle = styled.Text`
  font-size: 15px;
  color: black;
`;

export const CourseRef = styled.Text`
  font-size: 13px;
  color: black;
`;

export const CourseInstructor = styled.Text`
  font-size: 13px;
  color: red;
`;

export const CourseDescription = styled.Text`
  font-size: 13px;
  color: black;
`;
export const CourseHeading = styled.Text`
  text-decoration: underline;
  color: black;
`;
