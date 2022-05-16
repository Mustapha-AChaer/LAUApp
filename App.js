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
import AboutUs from "./screens/AboutUs";
import Apply from "./screens/Apply";
import Courses from "./screens/Courses";
import CoursesStack from "./navigators/CoursesStack";
import CustomDrawer from "./components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
function MyDrawer() {
  const isLoggedIn = useSelector((state) => state.loggedInInfo.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#0bab64",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#0bab64",
        headerShown: false,
        drawerLabelStyle: { marginLeft: -25 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      {!isLoggedIn && (
        <Drawer.Screen
          name="Apply"
          component={Apply}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="laptop-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {!isLoggedIn && (
        <Drawer.Screen
          name="Login/SignUp"
          component={RootStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="log-in-outline" size={22} color={color} />
            ),
          }}
        />
      )}

      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />

      {/* {isLoggedIn && (
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      )} */}
      {isLoggedIn && (
        <Drawer.Screen
          name="Library"
          component={LibraryStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="library-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Courses"
          component={CoursesStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="book-outline" size={22} color={color} />
            ),
          }}
        />
      )}

      {isLoggedIn && (
        <Drawer.Screen
          name="Sports"
          component={SportsStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="game-controller-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Cafeteria"
          component={Cafeteria}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="fast-food-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {/* {isLoggedIn && <Drawer.Screen name="Clubs" component={AboutUs} />} */}
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
