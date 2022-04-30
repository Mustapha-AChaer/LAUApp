// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";

import { Colors } from "./../components/Style.js";

const { primary, primaryGreen, secondaryGreen } = Colors;
//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sports from "../screens/Sports.js";
import ViewAllGames from "../screens/ViewAllGames.js";
import Tryouts from "../screens/Tryouts.js";

const Stack = createNativeStackNavigator();

const SportsStack = (props) => {
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
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="LAU Sailors Games" component={ViewAllGames} />
        <Stack.Screen name="Try Out Dates" component={Tryouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SportsStack;
