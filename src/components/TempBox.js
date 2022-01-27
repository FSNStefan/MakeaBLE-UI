import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function TempBox(props) {
  return (
    <Container {...props}>
      <Rect8>
        <MaterialCommunityIconsIcon
          name="temperature-celsius"
          style={{
            color: "#63a4b5",
            fontSize: 30,
            height: 33,
            width: 30,
            marginTop: 2,
            marginLeft: 24
          }}
        ></MaterialCommunityIconsIcon>
        <LoremIpsum>27</LoremIpsum>
      </Rect8>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect8 = styled.div`
  width: 80px;
  height: 61px;
  background-color: #b6e8f0;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  text-align: center;
  margin-top: 2px;
  margin-left: 28px;
`;

export default TempBox;
