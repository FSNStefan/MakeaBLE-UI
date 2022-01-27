import React, { Component, useContext, useState } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function LabelTab(props) {
  const { aiTabSelected, projTabSelected, labelTabSelected } = React.useContext(MakeaBLEContext);
  const [aiTabState, changeAITabState] = aiTabSelected;
  const [projTabState, changeProjTabState] = projTabSelected;
  const [labelTabState, changeLabelTabState] = labelTabSelected;

  function selectLabel(){
    changeProjTabState(prevProjTabState => false);
    changeAITabState(prevAITabState => false);
    changeLabelTabState(prevLabelTabState => true);
  }

  return (
    <Container {...props}>
      <Rect4 onClick={selectLabel} style={{ backgroundColor: props.rect4 || "#d7e5e7" }}>
        <Icon2Row>
          <FontAwesomeIcon
            name="edit"
            style={{
              color: "#358098",
              fontSize: 40,
              height: 40,
              width: 40
            }}
          ></FontAwesomeIcon>
          <Labels>Labels</Labels>
        </Icon2Row>
      </Rect4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect4 = styled.div`
  width: 261px;
  height: 74px;
  flex-direction: row;
  display: flex;
  cursor: pointer;

  &:hover{
    background-color: white;
  }
`;

const Labels = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #358098;
  font-size: 24px;
  margin-left: 19px;
  margin-top: 6px;
`;

const Icon2Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 115px;
  margin-left: 16px;
  margin-top: 17px;
`;

export default LabelTab;
