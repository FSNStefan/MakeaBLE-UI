import React, { Component } from "react";
import styled, { css } from "styled-components";
import ProjectTab from "../components/ProjectTab";
import LabelTab from "../components/LabelTab";
import AzureTab from "../components/AzureTab";
import ModelParamBox from "../components/ModelParamBox";
import DetailBox from "../components/DetailBox";
import TrainParamBox from "../components/TrainParamBox";
import Footer from "../components/Footer";
import { useHistory } from 'react-router-dom';

import {MakeaBLEProvider} from "../contexts/MakeaBLEContext";
import {AIParamProvider} from "../contexts/AIParamContext";

function MainWindowAi(props) {
  let history = useHistory ();

  const gotoProj = () => {
    history.push ("./MainWindow");
  }

  const gotoLabels = () => {
    history.push ("./MainWindowLabels");
  }

  return (
    <MakeaBLEProvider>
    <AIParamProvider>
    <Container>
      <RectColumn>
        <Rect>
          <ProjectFall01>Project : Fall-01</ProjectFall01>
        </Rect>
        <Rect2Row>
          <Rect2>
            <ProjectTab onClick={gotoProj}
              rect3="#d7e4e6"
              style={{
                height: 74,
                width: 261
              }}
            ></ProjectTab>
            <LabelTab onClick={gotoLabels}
              rect4="#d7e5e7"
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
              rect4="#d6e4e6"
            ></LabelTab>
            <AzureTab
              rect5="#d7e5e7"
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
              rect5="#e8f1f1"
            ></AzureTab>
          </Rect2>
          <Rect3>
            <LoremIpsum4StackRowColumn>
              <LoremIpsum4StackRow>
                <LoremIpsum4Stack>
                  <LoremIpsum4></LoremIpsum4>
                  <ModelParamBox
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: 262,
                      right: 0
                    }}
                  ></ModelParamBox>
                </LoremIpsum4Stack>
                <DetailBox
                  style={{
                    height: 262,
                    flex: 1,
                    marginLeft: 27
                  }}
                ></DetailBox>
              </LoremIpsum4StackRow>
              <TrainParamBox
                style={{
                  height: 81,
                  marginTop: 13,
                  marginLeft: 1
                }}
              ></TrainParamBox>
            </LoremIpsum4StackRowColumn>
            <Rect4></Rect4>
          </Rect3>
        </Rect2Row>
      </RectColumn>
      <RectColumnFiller></RectColumnFiller>
      <Footer
        style={{
          height: 38
        }}
      ></Footer>
    </Container>
    </AIParamProvider>
    </MakeaBLEProvider>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #b8cbcc;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect = styled.div`
  height: 70px;
  background-color: #d8e6e8;
  flex-direction: column;
  display: flex;
`;

const ProjectFall01 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #3c8398;
  font-size: 32px;
  margin-top: 16px;
  margin-left: 16px;
`;

const Rect2 = styled.div`
  width: 261px;
  height: 240px;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
`;

const Rect3 = styled.div`
  background-color: #e9f1f1;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-left: 31px;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  top: 188px;
  left: 50px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum4Stack = styled.div`
  height: 262px;
  flex: 1 1 0%;
  margin-right: 27px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LoremIpsum4StackRow = styled.div`
  height: 262px;
  flex-direction: row;
  display: flex;
  margin-right: 1px;
`;

const LoremIpsum4StackRowColumn = styled.div`
  flex-direction: column;
  margin-top: 14px;
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
`;

const Rect4 = styled.div`
  background-color: #c5e6f9;
  flex: 1 1 0%;
  margin-bottom: 14px;
  margin-top: 11px;
  margin-left: 13px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
`;

const Rect2Row = styled.div`
  height: 586px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
`;

const RectColumn = styled.div`
  flex-direction: column;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
`;

const RectColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

export default MainWindowAi;
