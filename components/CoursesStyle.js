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
  teritaryGreen: "#346357",
};

const { primaryGreen, secondaryGreen, primary, teritaryGreen } = Colors;

export const CoursesContainer = styled.View`
  height: ${windowHeight}px;
  background-color: ${primaryGreen};

  padding: 20px 1px 0 1px;
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
  background-color: ${teritaryGreen};
  padding: 7px;
  width: 100%;
  min-height: 900px;
  border-radius: 30px;
  margin-top: 10px;
`;

export const CourseCard = styled.View`
  min-height: 150px;
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 30px;
  margin: 3px;
  padding: 10px;
  background-color: white;
`;

export const CourseTitle = styled.Text`
  text-transform: uppercase;
  padding: 3px 2px;
  font-size: 15px;
  color: black;
`;

export const CourseRef = styled.Text`
  padding: 3px 2px;

  text-transform: uppercase;
  font-size: 13px;
  color: black;
`;

export const CourseInstructor = styled.Text`
  padding: 3px 2px;
  display: flex;

  font-size: 13px;
  color: ${teritaryGreen};
`;

export const CourseDescription = styled.Text`
  padding: 3px 2px;

  font-size: 13px;
  color: black;
`;
export const CourseHeading = styled.Text`
  text-decoration: underline;
  color: black;
`;

export const InstructorLink = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  color: ${teritaryGreen};
`;

export const LinkText = styled.Text`
  text-decoration: dotted;
  text-transform: uppercase;
  font-weight: bold;
  color: ${teritaryGreen};
`;
