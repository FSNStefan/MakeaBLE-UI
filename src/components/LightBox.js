import React, { Component, useContext } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function LightBox(props) {

  const { light } = useContext(MakeaBLEContext);
  const [_light, setLight] = light;

  return (
    <Container {...props}>
      <Rect10>
        <EntypoIcon
          name="adjust"
          style={{
            color: "rgba(128,128,128,1)",
            fontSize: 30,
            height: 34,
            width: 30,
            marginTop: 2,
            marginLeft: 25
          }}
        ></EntypoIcon>
        <LoremIpsum2>{_light}</LoremIpsum2>
      </Rect10>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect10 = styled.div`
  width: 80px;
  height: 61px;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  text-align: center;
  margin-top: 1px;
  margin-left: 5px;
`;

export default LightBox;
