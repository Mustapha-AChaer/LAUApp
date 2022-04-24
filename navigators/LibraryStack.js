// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";

import { Colors } from "./../components/Style.js";

const { primary, primaryGreen, secondaryGreen } = Colors;
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import HomePage from "../screens/HomePage.js";
import Library from "../screens/Library.js";
import Books from "../screens/Books.js";

const Stack = createNativeStackNavigator();

const LibraryStack = (props) => {
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
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Study Room Reservations" component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LibraryStack;
