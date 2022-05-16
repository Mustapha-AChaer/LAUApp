import React, { useRef } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const userInfo = useSelector((state) => state.loggedInInfo.userInfo);
  console.log(userInfo);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#7dd87d" }}
      >
        <ImageBackground
          source={require("../assets/LauLogo.png")}
          style={{
            padding: 20,
            width: "100%",
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        ></ImageBackground>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {userInfo && (
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 2,
                textDecorationLine: "underline",
                textAlignVertical: "center",
                letterSpacing: 1,
                fontWeight: "bold",
                color: "#346357",
              }}
            >
              Name: {userInfo.name}
            </Text>
          )}
          {userInfo && (
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 2,
                textDecorationLine: "underline",
                textAlignVertical: "center",
                letterSpacing: 1,
                fontWeight: "bold",
                color: "#346357",
              }}
            >
              Email: {userInfo.email}
            </Text>
          )}
          {userInfo && (
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 2,
                textDecorationLine: "underline",
                textAlignVertical: "center",
                letterSpacing: 1,
                fontWeight: "bold",
                color: "#346357",
              }}
            >
              ID: {userInfo.id}
            </Text>
          )}
        </View>

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <Ionicons name="brush-outline" size={13} style={{ color: "#346357" }}>
          <Text>
            &nbsp; Sponsored by LAU &nbsp;
            <Ionicons name="brush-outline" size={13} />
          </Text>
        </Ionicons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomDrawer;
