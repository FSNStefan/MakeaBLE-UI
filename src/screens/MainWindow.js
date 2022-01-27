import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import ProjectTab from "../components/ProjectTab";
import LabelTab from "../components/LabelTab";
import AzureTab from "../components/AzureTab";
import DeviceControlBox from "../components/DeviceControlBox";
import CurrentDataBox from "../components/CurrentDataBox";
import Footer from "../components/Footer";
import { useHistory } from 'react-router-dom';


import "../App.css";
import DataTable from "../components/DataTable";
import {MakeaBLEProvider} from "../contexts/MakeaBLEContext";

function MainWindow(props) {
  const project_name = "Fall-01";
  let history = useHistory ();

  const gotoLabels = () => {
    history.push ('./MainWindowLabels');
  }

  const gotoAI = () => {
    history.push ("./MainWindowAi");
  }

  return (
    <MakeaBLEProvider>
    <Container>
      <RectColumn>
        <Rect>
          <ProjectFall01>Project : {project_name}</ProjectFall01>
        </Rect>
        <Rect2Row>
          <Rect2>
            <ProjectTab
              style={{
                height: 74,
                width: 261
              }}
            ></ProjectTab>
            <LabelTab onClick={() => history.push('/MainWindowLabels')}
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
            ></LabelTab>
            <AzureTab onClick={() => history.push('/MainWindowAi')}
              style={{
                height: 74,
                width: 261,
                marginTop: 9
              }}
            ></AzureTab>
          </Rect2>
          <Rect3>
            <DeviceControlBoxColumnRow>
              <DeviceControlBoxColumn>
                <DeviceControlBox
                  style={{
                    width: 336,
                    height: 150
                  }}
                ></DeviceControlBox>
                <CurrentDataBox
                  style={{
                    width: 336,
                    height: 396,
                    marginTop: 12
                  }}
                ></CurrentDataBox>
              </DeviceControlBoxColumn>
              <Rect4>
                  <DataTable isRecording={true} />
              </Rect4>
            </DeviceControlBoxColumnRow>
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

const DeviceControlBoxColumn = styled.div`
  width: 336px;
  flex-direction: column;
  display: flex;
`;

const Rect4 = styled.div`
  background-color: #c5e6f9;
  flex: 1 1 0%;
  margin-left: 23px;
  display: flex;
  flex-direction: column;
`;

const DeviceControlBoxColumnRow = styled.div`
  height: 558px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 16px;
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

export default MainWindow;
