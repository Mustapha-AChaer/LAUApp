import React, { useState } from "react";

import { Formik } from "formik";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLinkContent,
  TextLink,
} from "../components/Style.js";
//Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//colors

const { primaryGreen, secondaryGreen, primary } = Colors;
//DateTimePicker
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";
import { useDispatch } from "react-redux";
import { loggedInActions } from "../store/loggedin-slice.js";

const axios = require("axios").default;

const SignUp = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const dispatch = useDispatch();

  //Login Handler
  const handleSignUp = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://salty-bastion-49991.herokuapp.com/user/signup";
    console.log(credentials);

    axios.post(url, credentials).then((response) => {
      console.log("We are here");

      console.log(response.data);
      const result = response.data;
      const { message, status } = result;

      if (status === "FAILED") {
        handleMessage(message, status);
      } else {
        //console.log("Good Job");

        const data = credentials;
        dispatch(loggedInActions.login(data));
        dispatch(loggedInActions.toggleIsLoggedIn());
        //navigation.navigate("Home", { ...data });
      }
      setSubmitting(false);
    });
    // .catch((err) => {
    //   handleMessage("An error occured. Check your internet connecition");
    // });
  };

  //Message Handler
  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <ScrollView>
          <StatusBar style="dark" />
          <InnerContainer>
            <Formik
              initialValues={{
                name: "",
                email: "",
                lauID: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                if (
                  values.email == "" ||
                  values.password == "" ||
                  values.name == "" ||
                  values.lauID == "" ||
                  values.confirmPassword == ""
                ) {
                  handleMessage("Please Fill All the Fields");
                  setSubmitting(false);
                } else if (values.password !== values.confirmPassword) {
                  handleMessage("Passwords do not match");
                  setSubmitting(false);
                } else {
                  console.log("We are here");
                  handleSignUp(values, setSubmitting);
                  setSubmitting(false);
                }
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isSubmitting,
              }) => (
                <StyledFormArea>
                  <ScrollView>
                    <MyTextInput
                      label="Full Name"
                      icon="person"
                      placeholder="Name"
                      placeholderTextColor={primaryGreen}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      keyboardType="email-address"
                    />
                    <MyTextInput
                      label="Email Address"
                      icon="mail"
                      placeholder="lau_email@uni.com"
                      placeholderTextColor={primaryGreen}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <MyTextInput
                      label="LAU ID"
                      icon="key"
                      placeholder="20200234"
                      placeholderTextColor={primaryGreen}
                      onChangeText={handleChange("lauID")}
                      onBlur={handleBlur("lauID")}
                      value={values.lauID}
                    />

                    <MyTextInput
                      label="Password"
                      icon="lock"
                      placeholder="*****"
                      placeholderTextColor={primaryGreen}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={hidePassword}
                      isPassword={hidePassword}
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <MyTextInput
                      label="Confirm Password"
                      icon="lock"
                      placeholder="*****"
                      placeholderTextColor={primaryGreen}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      secureTextEntry={hidePassword}
                      isPassword={hidePassword}
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>

                    {!isSubmitting && (
                      <StyledButton onPress={handleSubmit}>
                        <ButtonText>Sign Up</ButtonText>
                      </StyledButton>
                    )}

                    {isSubmitting && (
                      <StyledButton disabled={true}>
                        <ActivityIndicator size="large" color={primary} />
                      </StyledButton>
                    )}
                    <Line />

                    <ExtraView>
                      <ExtraText>Already have an account? </ExtraText>
                      <TextLink>
                        <TextLinkContent
                          onPress={() => {
                            navigation.navigate("Login");
                          }}
                        >
                          Login
                        </TextLinkContent>
                      </TextLink>
                    </ExtraView>
                  </ScrollView>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </ScrollView>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={primaryGreen} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={primaryGreen}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default SignUp;
