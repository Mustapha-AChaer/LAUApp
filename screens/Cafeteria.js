import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  BookCard,
  BookDescription,
  BookTitle,
  CafeteriaTitle,
  DishCard,
  DishImage,
  DishInformation,
  DishPrice,
  InnerContainer,
  StyledContainer,
} from "../components/Style";
import { Ionicons } from "@expo/vector-icons";

const axios = require("axios").default;
const Cafeteria = () => {
  const [dishes, setDishes] = useState([]);
  //console.log(dishes[0].imgURL);
  const listDishes = dishes.map((dish) => (
    <DishCard>
      <DishImage
        source={{
          uri: dish.imgURL,
        }}
      />
      <DishInformation>
        <BookTitle>{dish.name}</BookTitle>
        <BookDescription>{dish.ingredients}</BookDescription>
        <DishPrice>
          <Ionicons name="cash-outline" size={17}>
            {dish.price}$
          </Ionicons>
        </DishPrice>
      </DishInformation>
    </DishCard>
  ));
  const url = "https://salty-bastion-49991.herokuapp.com/cafeteria/get-dishes";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDishes(res.data.data);
        console.log(dishes);
        console.log("====================================");
        console.log();
        console.log("====================================");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <StyledContainer>
        <CafeteriaTitle>Sage Menu</CafeteriaTitle>

        {listDishes}
      </StyledContainer>
    </ScrollView>
  );
};

export default Cafeteria;
