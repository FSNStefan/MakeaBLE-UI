import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonGrey from "./MaterialButtonGrey";

function LabelBox(props) {

  const applyClass = () => {

  }
  
  return (
    <Container {...props}>
      <Rect6Filler></Rect6Filler>
      <Rect6>
        <EndWrapperFillerRow>
          <EndWrapperFiller></EndWrapperFiller>
          <SelectedRowRow>
            <SelectedRow>Selected row:</SelectedRow>
            <Placeholder placeholder=""></Placeholder>
          </SelectedRowRow>
        </EndWrapperFillerRow>
        <EndWrapperFillerRow>
          <EndWrapperFiller></EndWrapperFiller>
          <ClassAssignedRow>
            <ClassAssigned>Class assigned:</ClassAssigned>
            <Placeholder1 placeholder=""></Placeholder1>
          </ClassAssignedRow>
        </EndWrapperFillerRow>
        <EndWrapperFillerRow>
          <EndWrapperFiller></EndWrapperFiller>
          <MaterialButtonGreyRow>
            <MaterialButtonGrey
              style={{
                height: 20,
                width: 40,
                marginRight: 40
              }}
              caption="Apply"
            ></MaterialButtonGrey>
            <MaterialButtonGrey
              style={{
                height: 20,
                width: 40
              }}
              caption="Clear"
            ></MaterialButtonGrey>
          </MaterialButtonGreyRow>
        </EndWrapperFillerRow>
      </Rect6>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rect6Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Rect6 = styled.div`
  height: 161px;
  background-color: rgba(214,234,245,1);
  width: 320px;
  flex-direction: column;
  display: flex;
`;

const EndWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const SelectedRow = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-right: 11px;
`;

const Placeholder = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 20px;
  width: 126px;
  background-color: white;
  border: none;
`;

const SelectedRowRow = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
`;

const EndWrapperFillerRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
  margin-left: 34px;
  margin-right: 46px;
`;

const ClassAssigned = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 14px;
  margin-right: 17px;
`;

const Placeholder1 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 20px;
  width: 126px;
  background-color: white;
  border: none;
`;

const ClassAssignedRow = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
`;

const MaterialButtonGreyRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
`;

export default LabelBox;
