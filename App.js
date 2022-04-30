import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import HomePage from "./screens/HomePage";
import RootStack from "./navigators/RootStack";
import Profile from "./screens/Profile";
import LibraryStack from "./navigators/LibraryStack";
import Cafeteria from "./screens/Cafeteria";
import SportsStack from "./navigators/SportStack";

function AboutUs() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Us</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const isLoggedIn = useSelector((state) => state.loggedInInfo.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Drawer.Navigator>
      {!isLoggedIn && <Drawer.Screen name="Home" component={HomePage} />}
      {!isLoggedIn && <Drawer.Screen name="Apply" component={AboutUs} />}
      {!isLoggedIn && (
        <Drawer.Screen name="Login/SignUp" component={RootStack} />
      )}
      {!isLoggedIn && <Drawer.Screen name="About Us" component={AboutUs} />}
      {isLoggedIn && <Drawer.Screen name="Profile" component={Profile} />}
      {isLoggedIn && <Drawer.Screen name="Courses" component={AboutUs} />}

      {isLoggedIn && <Drawer.Screen name="Library" component={LibraryStack} />}
      {isLoggedIn && <Drawer.Screen name="Sports" component={SportsStack} />}
      {isLoggedIn && <Drawer.Screen name="Cafeteria" component={Cafeteria} />}
      {isLoggedIn && <Drawer.Screen name="Clubs" component={AboutUs} />}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
