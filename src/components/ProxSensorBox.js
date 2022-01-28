import React, { Component } from "react";
import styled, { css } from "styled-components";
import AccelerationBox from "./AccelerationBox";
import AngularBox from "./AngularBox";

function ProxSensorBox(props) {
  
  return (
    <Container {...props}>
      <Rect7>
        <LoremIpsum>Proximity Sensor Data</LoremIpsum>
        <AccelerationBoxRow>
          <AccelerationBox
            style={{
              height: 144,
              width: 128
            }}
          ></AccelerationBox>
          <AngularBox
            style={{
              height: 144,
              width: 128,
              marginLeft: 20
            }}
          ></AngularBox>
        </AccelerationBoxRow>
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
  height: 192px;
  background-color: #aee0f0;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(14,136,142,1);
  font-size: 18px;
  margin-top: 8px;
  margin-left: 61px;
`;

const AccelerationBoxRow = styled.div`
  height: 144px;
  flex-direction: row;
  display: flex;
  margin-top: 8px;
  margin-left: 12px;
  margin-right: 10px;
`;

export default ProxSensorBox;
