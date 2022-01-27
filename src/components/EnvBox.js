import React, { Component } from "react";
import styled, { css } from "styled-components";
import TempBox from "./TempBox";
import PressureBox from "./PressureBox";
import LightBox from "./LightBox";

function EnvBox(props) {
  return (
    <Container {...props}>
      <Rect7>
        <EnvironmentalData>Environmental Data</EnvironmentalData>
        <TempBoxRow>
          <TempBox
            style={{
              height: 61,
              width: 80
            }}
          ></TempBox>
          <PressureBox
            style={{
              height: 61,
              width: 80,
              marginLeft: 16
            }}
          ></PressureBox>
          <LightBox
            style={{
              height: 61,
              width: 80,
              marginLeft: 14
            }}
          ></LightBox>
        </TempBoxRow>
      </Rect7>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect7 = styled.div`
  width: 298px;
  height: 107px;
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const EnvironmentalData = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 18px;
  margin-top: 3px;
  margin-left: 71px;
`;

const TempBoxRow = styled.div`
  height: 61px;
  flex-direction: row;
  display: flex;
  margin-top: 9px;
  margin-left: 13px;
  margin-right: 15px;
`;

export default EnvBox;
