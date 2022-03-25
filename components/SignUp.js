import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function SignUp(props) {
  const changeState = () => {
    return;
  };
  let state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  };
  const onChangeText = (key, val) => {
    this.setState({ [key]: val });
    console.log(val);
  };

  const signingUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0bab64", "#3bb78f"]}
        style={styles.background}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="#0bab64"
        onChangeText={(val) => onChangeText("username", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="#0bab64"
        onChangeText={(val) => onChangeText("password", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="#0bab64"
        onChangeText={(val) => onChangeText("email", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        autoCapitalize="none"
        placeholderTextColor="#0bab64"
        onChangeText={(val) => onChangeText("phone_number", val)}
      />
      <Button title="Sign Up" onPress={signingUp} color="#0bab64" />
      <Button
        style={styles.button}
        title="Already have an account? Sign In"
        color="transparent"
        onPress={changeState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    margin: 10,
    padding: 8,
    color: "#0bab64",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  button: {
    borderWidth: 0,
  },
});

export default SignUp;
