import React, { Component, useContext, useState } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function ProjectTab(props) {
  const { aiTabSelected, projTabSelected, labelTabSelected} = useContext(MakeaBLEContext);
  const [aiTabState, changeAITabState] = aiTabSelected;
  const [projTabState, changeProjTabState] = projTabSelected;
  const [labelTabState, changeLabelTabState] = labelTabSelected;
  
  function selectProjectTab(){
    changeProjTabState(prevProjTabState => true);
    changeAITabState(prevAITabState => false);
    changeLabelTabState(prevLabelTabState => false);
  }

  return (
    <Container {...props} >
      <Rect3 style={{ backgroundColor: props.rect3 || "#e9f1f1" }}>
        <IconRow>
          <FontAwesomeIcon
            name="folder-open"
            style={{
              color: "#368198",
              fontSize: 40,
              height: 40,
              width: 43
            }}
          ></FontAwesomeIcon>
          <CurrentProject>MakeaBLE</CurrentProject>
        </IconRow>
      </Rect3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect3 = styled.div`
  width: 261px;
  height: 74px;
  background-color: ${({ projTabState }) => (projTabState ? `#d7e5e7` : `#e9f1f1`)}; 
  flex-direction: row;
  display: flex;
  cursor: pointer;

  &:hover{
    background-color: white;
  }
`;

const CurrentProject = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #358098;
  font-size: 24px;
  margin-left: 16px;
  margin-top: 6px;
`;

const IconRow = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 22px;
  margin-left: 16px;
  margin-top: 17px;
`;

export default ProjectTab;
