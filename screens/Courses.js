import React, { useState, useEffect } from "react";
import { StyledContainer } from "../components/Style";
import { Text, StyleSheet, ScrollView } from "react-native";

import SelectDropdown from "react-native-select-dropdown";
import {
  CourseCard,
  CourseDescription,
  CourseHeading,
  CourseInstructor,
  CourseRef,
  CoursesContainer,
  CoursesListingContainer,
  CourseTitle,
} from "../components/CoursesStyle";

const courses = ["All", "Computer Science", "English", "Business"];
const axios = require("axios").default;

const Courses = () => {
  const [selectedType, setSelectedType] = useState("");
  const [courseList, setCourseList] = useState([]);
  const url = "https://salty-bastion-49991.herokuapp.com/course/get-course";
  let courseListView = null;

  courseListView = courseList.map((course) => (
    <CourseCard>
      <CourseTitle>
        <CourseHeading>Title:</CourseHeading>
        &nbsp; {course.title}
      </CourseTitle>
      <CourseRef>
        <CourseHeading>Reference:</CourseHeading>
        &nbsp; {course.reference}
      </CourseRef>
      <CourseRef>
        <CourseHeading>Instructor:</CourseHeading>
        <CourseInstructor> &nbsp; {course.instructor}</CourseInstructor>
      </CourseRef>
      <CourseDescription>&nbsp; {course.description}</CourseDescription>
    </CourseCard>
  ));

  //need to get specfic courses depending on the dropdown
  useEffect(() => {
    console.log(selectedType);
    if (
      selectedType === "All" ||
      selectedType === undefined ||
      selectedType === ""
    ) {
      axios.post(url, null, { params: { type: "" } }).then((result) => {
        setCourseList(result.data.data);
      });
    } else {
      axios
        .post(url, null, { params: { type: selectedType } })
        .then((result) => {
          let data = result.data.data;
          setCourseList(data);
        });
    }
  }, [selectedType]);

  return (
    <CoursesContainer>
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
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <CoursesListingContainer>
        <ScrollView>{courseListView}</ScrollView>
      </CoursesListingContainer>
    </CoursesContainer>
  );
};

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: "60%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 30,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Courses;
