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

const Stack = createNativeStackNavigator();

const RootStack = (props) => {
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
