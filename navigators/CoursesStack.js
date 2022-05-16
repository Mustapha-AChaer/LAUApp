// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";

import { Colors } from "./../components/Style.js";

const { primary, primaryGreen, secondaryGreen } = Colors;
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Courses from "../screens/Courses.js";
import ViewAllGames from "../screens/ViewAllGames.js";
import Instructor from "../screens/Instructor.js";

const Stack = createNativeStackNavigator();

const CoursesStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: primaryGreen,
          },
          headerTintColor: primary,
          headerShown: false,
          headerTitle: "",
          headerLeftContainerStyles: {
            paddingLeft: 20,
          },
        }}
        intialRouteName="Login"
      >
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Instructor" component={Instructor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CoursesStack;
