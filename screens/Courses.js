import React, { useState, useEffect } from "react";
import { StyledContainer } from "../components/Style";
import SelectDropdown from "react-native-select-dropdown";

const courses = ["Computer Science", "English", "Bussiness"];

const Courses = () => {
  const [selectedType, setSelectedType] = useState();

  //need to get specfic courses depending on the dropdown
  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);
  return (
    <StyledContainer>
      <SelectDropdown
        data={courses}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setSelectedType(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </StyledContainer>
  );
};

export default Courses;
