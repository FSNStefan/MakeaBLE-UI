import React, { Component, useContext } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function AccelerationBox(props) {

  const { accel_x, accel_y , accel_z } = useContext(MakeaBLEContext);
  const [a_x, setAccelX] = accel_x;
  const [a_y, setAccelY] = accel_y;
  const [a_z, setAccelZ] = accel_z;

  return (
    <Container {...props}>
      <Rect8>
        <IconRow>
          <IoniconsIcon
            name="ios-speedometer"
            style={{
              color: "#18191a",
              fontSize: 30,
              height: 33,
              width: 26
            }}
          ></IoniconsIcon>
          <Accel2>ACCEL</Accel2>
        </IconRow>
        <X100>X : {a_x}</X100>
        <Y100>Y : {a_y}</Y100>
        <Z100>Z : {a_z}</Z100>
      </Rect8>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect8 = styled.div`
  width: 128px;
  height: 144px;
  background-color: #bbe2ee;
  border-width: 1px;
  border-color: #000000;
  border-style: dashed;
  flex-direction: column;
  display: flex;
`;

const Accel2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 18px;
  margin-left: 14px;
  margin-top: 6px;
`;

const IconRow = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 6px;
  margin-right: 27px;
`;

const X100 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 19px;
`;

const Y100 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 11px;
  margin-left: 19px;
`;

const Z100 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 11px;
  margin-left: 19px;
`;

export default AccelerationBox;
