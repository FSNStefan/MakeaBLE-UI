import React, { Component, useContext } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function PressureBox(props) {

  const { pressure } = useContext(MakeaBLEContext);
  const [_press, setPress] = pressure;

  return (
    <Container {...props}>
      <Rect9>
        <EntypoIcon
          name="water"
          style={{
            color: "#4e88ec",
            fontSize: 30,
            height: 34,
            width: 30,
            marginTop: 2,
            marginLeft: 25
          }}
        ></EntypoIcon>
        <LoremIpsum1>{_press}</LoremIpsum1>
      </Rect9>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect9 = styled.div`
  width: 80px;
  height: 61px;
  background-color: #dfeef9;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  text-align: center;
  margin-top: 1px;
  margin-left: 5px;
`;

export default PressureBox;
