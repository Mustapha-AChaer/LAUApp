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
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";
import HomePage from "./HomePage.js";
import { useDispatch, useSelector } from "react-redux";
import { loggedInActions } from "../store/loggedin-slice.js";

//API Client
const axios = require("axios").default;

//colors
const { primaryGreen, secondaryGreen, primary } = Colors;

const Login = ({ navigation }) => {
  //Use States
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //dispatch
  const dispatch = useDispatch();
  //Login Handler
  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://salty-bastion-49991.herokuapp.com/user/signin";
    console.log(credentials);

    axios
      .post(url, credentials)
      .then((response) => {
        //console.log("We are here");

        //console.log(response.data);
        const result = response.data;
        const { message, status, data } = result;

        if (status === "FAILED") {
          handleMessage(message, status);
        } else {
          dispatch(loggedInActions.login(data[0]));
          dispatch(loggedInActions.toggleIsLoggedIn());
          navigation.navigate("Home", { ...data[0] });
        }
        setSubmitting(false);
      })
      .catch((err) => {
        setSubmitting(true);
        console.log(err.response.data);
        console.log("====================================");
        console.log();
        console.log("====================================");
        handleMessage("An error occured. Check your internet connecition");
      });
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
            <PageLogo
              resizeMode="cover"
              source={require("./../assets/LauLogo.png")}
            />
            {/* <PageTitle>Login</PageTitle> */}

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                if (values.email == "" || values.password == "") {
                  handleMessage("Please Fill All the Fields");
                  setSubmitting(false);
                } else {
                  console.log("We are here");
                  handleLogin(values, setSubmitting);
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
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting && (
                      <StyledButton onPress={handleSubmit}>
                        <ButtonText>Login</ButtonText>
                      </StyledButton>
                    )}

                    {isSubmitting && (
                      <StyledButton disabled={true}>
                        <ActivityIndicator size="large" color={primary} />
                      </StyledButton>
                    )}
                    <Line />

                    <ExtraView>
                      <ExtraText>Dont have an account already? </ExtraText>
                      <TextLink>
                        <TextLinkContent
                          onPress={() => {
                            navigation.navigate("Signup");
                          }}
                        >
                          Sign Up
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

export default Login;
