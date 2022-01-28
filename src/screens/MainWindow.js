import React, { Component, useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import ProjectTab from "../components/ProjectTab";
import LabelTab from "../components/LabelTab";
import AzureTab from "../components/AzureTab";
import DeviceControlBox from "../components/DeviceControlBox";
import CurrentDataBox from "../components/CurrentDataBox";
import Footer from "../components/Footer";
import { useHistory } from 'react-router-dom';
import Papa from "papaparse";

import "../App.css";
import DataTable from "../components/DataTable";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function MainWindow(props) {
  const project_name = "Fall-01";
  let history = useHistory ();

  const { allData, count,
    currentData, temperature, pressure, light, 
    accel_x, accel_y , accel_z, current_time,
    gyro_x, gyro_y , gyro_z, isRecording } = useContext(MakeaBLEContext);

  const [_data, setData] = currentData;
  const [row_count, setCount] = count;
  const [all_data, setAllData] = allData;
  const [_temp, setTemp] = temperature;
  const [_press, setPress] = pressure;
  const [_light, setLight] = light;
  const [a_x, setAccelX] = accel_x;
  const [a_y, setAccelY] = accel_y;
  const [a_z, setAccelZ] = accel_z;
  const [g_x, setGyroX] = gyro_x;
  const [g_y, setGyroY] = gyro_y;
  const [g_z, setGyroZ] = gyro_z;
  const [is_recording, setRecording] = isRecording;
  const [dateTime, setDateTime] = current_time;

  useEffect(() => {
    Papa.parse("./Projects/Fall-01/Data/dataset_new.csv", {
        download: true,
        header: true,
        complete: data => {
          setAllData(data.data);
        }
      });
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date()); setCount(prev => prev + 1);
      if(is_recording){
        // If the device is on and user presses "Play", then record the most recent data.
        setData([..._data, all_data[row_count]]);
        setTemp(all_data[row_count].TEMPERATURE); setPress(all_data[row_count].PRESSURE); 
        setLight(all_data[row_count].AMB_LIGHT); setAccelX(all_data[row_count].ACCEL_X); 
        setAccelY(all_data[row_count].ACCEL_Y); setAccelZ(all_data[row_count].ACCEL_Z); 
        setGyroX(all_data[row_count].GYRO_X); setGyroY(all_data[row_count].GYRO_Y); 
        setGyroZ(all_data[row_count].GYRO_Z);
      }
    }, 1000);
    return () => {
        clearInterval(id);
    }
  }, [count]);

  const gotoLabels = () => {
    history.push ('./MainWindowLabels');
  }

  const gotoAI = () => {
    history.push ("./MainWindowAi");
  }

  return (
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
                  data={_data}
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
