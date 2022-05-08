import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  BookCard,
  BookDescription,
  BookTitle,
  BookViewer,
  Colors,
  LocationGenre,
  StyledContainer,
} from "../components/Style";

import { Ionicons } from "@expo/vector-icons";
import { BackTickButton } from "../components/GlobalComponents";
import { NavigationContainer } from "@react-navigation/native";

const { primaryGreen, secondaryGreen, primary } = Colors;
const axios = require("axios").default;

const Books = ({ navigation }) => {
  const [books, setbooks] = useState([]);

  const listBooks = books.map((book) => (
    <BookCard>
      <BookTitle>{book.name}</BookTitle>
      <BookDescription>{book.description}</BookDescription>
      <LocationGenre>
        <Ionicons name="location-outline" size={15} color={"red"}>
          {book.location}
        </Ionicons>
        <Ionicons name="bookmark-outline" size={15} color={"red"}>
          {book.genre}
        </Ionicons>
      </LocationGenre>
    </BookCard>
  ));
  const url = "https://salty-bastion-49991.herokuapp.com/books/getbooks";
  useEffect(() => {
    axios.get(url).then((res) => {
      setbooks(res.data.data);
      //console.log(books);
    });
  }, []);

  return (
    <StyledContainer>
      <BackTickButton onPress={() => navigation.navigate("Library")}>
        <Ionicons name="arrow-back-outline" size={40}>
          Go Back
        </Ionicons>
      </BackTickButton>
      <ScrollView>
        <BookViewer>{listBooks}</BookViewer>
      </ScrollView>
    </StyledContainer>
  );
};

export default Books;
// arrow-back-outline
