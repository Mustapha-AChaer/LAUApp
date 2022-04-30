import React, { useEffect, useState } from "react";
import {
  SportGameInfo,
  SportsGameCard,
  SportsGameText,
  SportsGameTime,
  SportsInfoText,
  SportsViewContainer,
  SportTeamImage,
  SportTeams,
  SportType,
  VSImage,
} from "../components/SportsStyle";
import { Ionicons } from "@expo/vector-icons";

import { Text, ImageBackground, StyleSheet } from "react-native";

const axios = require("axios").default;
const DUMMYDATA = {
  time: "23:00",
  VS: "Antonie",
  date: "23-10-2022",
  type: "Friendly",
  sport: "Futsal",
  location: "USJ",
};
const ViewAllGames = () => {
  const [allGames, setAllGames] = useState([]);

  const url = "https://salty-bastion-49991.herokuapp.com/sports/get-all-games";

  const listGames = allGames.map((game) => (
    <SportsGameCard>
      <SportType>
        <SportsGameText>{game.sport}</SportsGameText>
      </SportType>
      <SportTeams>
        <SportTeamImage source={require("../assets/lau.png")}></SportTeamImage>
        <VSImage source={require("../assets/vs.png")}></VSImage>
        {game.VS === "Antonie" ? (
          <SportTeamImage
            source={require("../assets/antonie.png")}
          ></SportTeamImage>
        ) : game.VS === "USJ" ? (
          <SportTeamImage
            source={require("../assets/usj.png")}
          ></SportTeamImage>
        ) : game.VS === "BAU" ? (
          <SportTeamImage
            source={require("../assets/bau.png")}
          ></SportTeamImage>
        ) : game.VS === "AUB" ? (
          <SportTeamImage
            source={require("../assets/aub.png")}
          ></SportTeamImage>
        ) : (
          <Text>Not Found</Text>
        )}
      </SportTeams>
      <SportGameInfo>
        <Ionicons name="location-outline" size={16}>
          <SportsInfoText>{game.location}</SportsInfoText>
        </Ionicons>
        <Ionicons name="time-outline" size={16}>
          <SportsInfoText>{game.time}</SportsInfoText>
        </Ionicons>
      </SportGameInfo>
      <SportsGameTime>
        <SportsGameText>{game.date.substring(0, 10)}</SportsGameText>
      </SportsGameTime>
    </SportsGameCard>
  ));
  useEffect(() => {
    axios.get(url).then((res) => {
      setAllGames(res.data.data);
      console.log(allGames);
    });
  }, []);
  return (
    <SportsViewContainer>
      <ImageBackground
        source={require("../assets/viewallgames.jpg")}
        style={styles.mainBackground}
      >
        {listGames}
      </ImageBackground>
    </SportsViewContainer>
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

    width: "100%",
    height: "100%",
  },
  mainImage: {
    height: 300,
    width: 400,
  },
});

export default ViewAllGames;
