import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Movie, TV } from "../api";
import Poster from "../components/Poster";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Detail = ({ navigation: { setOptions }, route: { params } }) => {
  useEffect(() => {
    setOptions({
      title:
        "original_title" in params
          ? params.original_title
          : params.original_name,
    });
  }, []);
  return (
    <Container>
      <Poster path={params.poster_path || ""} />
    </Container>
  );
};
export default Detail;