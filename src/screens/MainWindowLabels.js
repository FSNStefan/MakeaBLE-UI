import React, { Component, useContext } from "react";
import styled, { css } from "styled-components";
import ProjectTab from "../components/ProjectTab";
import LabelTab from "../components/LabelTab";
import AzureTab from "../components/AzureTab";
import LabelTipBox from "../components/LabelTipBox";
import LabelBox from "../components/LabelBox";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonPink from "../components/MaterialButtonPink";
import Footer from "../components/Footer";
import { useHistory } from 'react-router-dom';

import LabelTable from "../components/LabelTable";
import {LabelingProvider} from "../contexts/LabelingContext";

function MainWindowLabels(props) {
  const project_name = "Fall-01";
  let history = useHistory ();
  
  const gotoProj = () => {
    history.push ('./MainWindow');
  }

  const gotoAI = () => {
    history.push ("./MainWindowAi");
  }

  return (
    <LabelingProvider>
    <Container>
      <RectColumn>
        <Rect>
          <ProjectFall01>Project : {project_name}</ProjectFall01>
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
            <LabelTab
              rect4="#e8f1f1"
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
            ></LabelTab>
            <AzureTab onClick={gotoAI}
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
            ></AzureTab>
          </Rect2>
          <Rect3>
            <Rect4Row>
              <Rect4>
              <LabelTable />
              </Rect4>
              <LabelTipBoxColumn>
                <LabelTipBox
                  style={{
                    width: 320,
                    height: 170
                  }}
                ></LabelTipBox>
                <LabelBox
                  style={{
                    width: 320,
                    height: 161,
                    marginTop: 14
                  }}
                ></LabelBox>
                <MaterialButtonViolet
                  style={{
                    height: 36,
                    width: 100,
                    marginTop: 16,
                    marginRight: 121
                  }}
                  caption="Save labels"
                ></MaterialButtonViolet>
                <MaterialButtonPink
                  style={{
                    height: 36,
                    width: 100,
                    marginTop: 18,
                    marginRight: 121
                  }}
                  caption="Clear labels"
                ></MaterialButtonPink>
              </LabelTipBoxColumn>
            </Rect4Row>
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
    </LabelingProvider>
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

const Rect4 = styled.div`
  background-color: #c5e6f9;
  flex: 1 1 0%;
  margin-right: 19px;
  display: flex;
  flex-direction: column;
`;

const LabelTipBoxColumn = styled.div`
  width: 320px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
`;

const Rect4Row = styled.div`
  height: 551px;
  flex-direction: row;
  display: flex;
  margin-top: 19px;
  margin-left: 13px;
  margin-right: 16px;
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

export default MainWindowLabels;
