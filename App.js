// import "react-native-gesture-handler";
// import { StyleSheet, Text, View } from "react-native";
// import { Provider } from "react-redux";
// import HomePage from "./components/HomePage";
// import store from "./store";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <HomePage />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./screens/HomePage";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import RootStack from "./navigators/RootStack";

function AboutUs() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Us</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Apply" component={AboutUs} />
      <Drawer.Screen name="Login/SignUp" component={RootStack} />
      <Drawer.Screen name="About Us" component={AboutUs} />
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
    // <Login />
    // <RootStack />
  );
}
