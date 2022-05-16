import React, { useEffect, useState } from "react";
import {
  ApplyButton,
  InfoContainer,
  InfoText,
  LocationText,
  MoreInfoContainer,
  SportsViewContainer,
  TeamContainer,
  TryoutsContainer,
  TryOutTitle,
} from "../components/SportsStyle";
import { ScrollView, ImageBackground, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { BackTickButton } from "../components/GlobalComponents";
const axios = require("axios").default;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Tryouts = ({ navigation }) => {
  const [tryoutList, setTryoutList] = useState([]);
  const userInfo = useSelector((state) => state.loggedInInfo.userInfo);

  const url = "https://salty-bastion-49991.herokuapp.com/tryouts/get-tryouts";
  const url2 = "https://salty-bastion-49991.herokuapp.com/tryouts/user-apply";

  const TryoutApplyHandler = (team) => {
    console.log(userInfo);
    team = capitalizeFirstLetter(team.toLowerCase());
    console.log(team);
    axios
      .post(url2, null, {
        params: {
          team: team,
          email: userInfo.email,
        },
      })
      .then((result) => {
        console.log(result.data.message);
        alert(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listTryouts = tryoutList.map((tryout) => (
    <TeamContainer>
      <ImageBackground
        source={
          tryout.team === "Football"
            ? require("../assets/football.jpg")
            : tryout.team === "Basketball"
            ? require("../assets/basketball.jpg")
            : tryout.team === "Handball"
            ? require("../assets/handball.jpg")
            : require("../assets/rugby.jpg")
        }
        style={styles.mainBackground}
      >
        <InfoContainer>
          <TryOutTitle>{tryout.team}</TryOutTitle>
          <InfoText>Date: {tryout.date}</InfoText>
          <InfoText>Time: {tryout.time}</InfoText>
        </InfoContainer>
        <MoreInfoContainer>
          <LocationText>
            <Ionicons name="location-outline" size={20}>
              {tryout.location}
            </Ionicons>
          </LocationText>
          <ApplyButton onPress={() => TryoutApplyHandler(tryout.team)}>
            <InfoText>Apply</InfoText>
          </ApplyButton>
        </MoreInfoContainer>
      </ImageBackground>
    </TeamContainer>
  ));

  useEffect(() => {
    axios.get(url).then((result) => {
      setTryoutList(result.data.data);
    });
  }, []);

  return (
    <TryoutsContainer>
      <ImageBackground
        source={require("../assets/tryouts.jpg")}
        style={styles.mainBackground}
        resizeMode="cover"
      >
        <BackTickButton onPress={() => navigation.navigate("Sports")}>
          <Ionicons name="arrow-back-outline" size={40}>
            Go Back
          </Ionicons>
        </BackTickButton>
        <ScrollView>{listTryouts}</ScrollView>
      </ImageBackground>
    </TryoutsContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    flex: 1,

    width: "100%",
    backgroundColor: "green",
  },
  mainBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  mainMainBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    paddingVertical: 30,
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default Tryouts;
