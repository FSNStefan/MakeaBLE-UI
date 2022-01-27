import React, { Component, useContext, useState } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function AzureTab(props) {
  const { aiTabSelected, projTabSelected, labelTabSelected} = React.useContext(MakeaBLEContext);
  const [aiTabState, changeAITabState] = aiTabSelected;
  const [projTabState, changeProjTabState] = projTabSelected;
  const [labelTabState, changeLabelTabState] = labelTabSelected;

  function selectAITab(){
    changeProjTabState(prevProjTabState => false);
    changeAITabState(prevAITabState => true);
    changeLabelTabState(prevLabelTabState => false);
  }

  return (
    <Container {...props}>
      <Rect5 onClick={selectAITab} style={{ backgroundColor: props.rect5 || "#d7e5e7" }}>
        <Icon3Row>
          <MaterialCommunityIconsIcon
            name="azure"
            style={{
              color: "#358098",
              fontSize: 40,
              height: 44,
              width: 40
            }}
          ></MaterialCommunityIconsIcon>
          <AzureMl>AI Models</AzureMl>
        </Icon3Row>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect5 = styled.div`
  width: 261px;
  height: 74px;
  flex-direction: row;
  display: flex;
  cursor: pointer;

  &:hover{
    background-color: white;
  }
`;

const AzureMl = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #358098;
  font-size: 24px;
  margin-left: 16px;
  margin-top: 6px;
`;

const Icon3Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 83px;
  margin-left: 13px;
  margin-top: 15px;
`;

export default AzureTab;
