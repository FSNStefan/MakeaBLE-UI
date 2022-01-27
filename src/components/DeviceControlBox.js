import React, { Component } from "react";
import styled, { css } from "styled-components";
import RecordButton from "./RecordButton";
import StopButton from "./StopButton";

function DeviceControlBox(props) {
  return (
    <Container {...props}>
      <Rect5>
        <EllipseRow>
          <svg
            viewBox="0 0 36 36"
            style={{
              width: 36,
              height: 36
            }}
          >
            <ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="#7ed322"
              cx={18}
              cy={18}
              rx={18}
              ry={18}
            ></ellipse>
          </svg>
          <DeviceId00001>Device ID: 00001</DeviceId00001>
        </EllipseRow>
        <RecordButtonRow>
          <RecordButton
            style={{
              height: 75,
              width: 92
            }}
          ></RecordButton>
          <StopButton
            style={{
              height: 75,
              width: 92,
              marginLeft: 23
            }}
          ></StopButton>
        </RecordButtonRow>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect5 = styled.div`
  width: 336px;
  height: 150px;
  background-color: #c5e6f9;
  flex-direction: column;
  display: flex;
`;

const DeviceId00001 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 28px;
  margin-left: 18px;
  margin-top: 2px;
`;

const EllipseRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 31px;
  margin-right: 38px;
`;

const RecordButtonRow = styled.div`
  height: 75px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 76px;
  margin-right: 53px;
`;

export default DeviceControlBox;
