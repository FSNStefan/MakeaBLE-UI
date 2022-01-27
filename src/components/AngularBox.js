import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function AngularBox(props) {
  return (
    <Container {...props}>
      <Rect9>
        <Icon2Row>
          <MaterialCommunityIconsIcon
            name="angle-acute"
            style={{
              color: "#18191a",
              fontSize: 30,
              height: 33,
              width: 30
            }}
          ></MaterialCommunityIconsIcon>
          <Gyro>GYRO</Gyro>
        </Icon2Row>
        <X101>X : 1.00</X101>
        <Y101>Y : 1.00</Y101>
        <Z1002>Z : 1.00</Z1002>
      </Rect9>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect9 = styled.div`
  width: 128px;
  height: 144px;
  background-color: #bbe2ee;
  border-width: 1px;
  border-color: #000000;
  border-style: dashed;
  flex-direction: column;
  display: flex;
`;

const Gyro = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 18px;
  margin-left: 11px;
  margin-top: 6px;
`;

const Icon2Row = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-right: 40px;
`;

const X101 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 17px;
`;

const Y101 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 11px;
  margin-left: 15px;
`;

const Z1002 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 11px;
  margin-left: 15px;
`;

export default AngularBox;
