import React, { Component } from "react";
import styled, { css } from "styled-components";
import EnvBox from "./EnvBox";
import ProxSensorBox from "./ProxSensorBox";

function CurrentDataBox(props) {
  return (
    <Container {...props}>
      <Rect6>
        <Time>Time: 2022/01/12 12:15:14 PM</Time>
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
