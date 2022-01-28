import React, { Component, useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import EnvBox from "./EnvBox";
import ProxSensorBox from "./ProxSensorBox";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function CurrentDataBox(props) {
  const { current_time } = useContext(MakeaBLEContext);
  const [dateTime, setDateTime] = current_time;
  
  return (
    <Container {...props}>
      <Rect6>
        <Time>Time: {dateTime.toLocaleString()}</Time>
        <EnvBox
          style={{
            height: 107,
            width: 298,
            marginTop: 21,
            marginLeft: 19
          }}
        ></EnvBox>
        <ProxSensorBox
          style={{
            height: 192,
            width: 298,
            marginTop: 14,
            marginLeft: 19
          }}
        ></ProxSensorBox>
      </Rect6>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect6 = styled.div`
  width: 336px;
  height: 396px;
  background-color: #c5e6f9;
  flex-direction: column;
  display: flex;
`;

const Time = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  margin-top: 22px;
  margin-left: 19px;
`;

export default CurrentDataBox;
