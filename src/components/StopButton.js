import React, { Component, useState, useContext } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import Papa from "papaparse";
import { saveAs } from 'file-saver';

function downloadCSV(csv){
  var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
  saveAs(csvData, "dataset.csv");
}

function StopButton(props) {
  const { isRecording, currentData, play_icon, play_ellipse } = useContext(MakeaBLEContext);
  const [stillRecording, changeRecordingState] = isRecording;
  const [_data, setData] = currentData;
  const [icon_name, changeIcon] = useState("save");
  const [play_icon_name, changePlayIcon] = play_icon;
  const [ellipseColor, changeEllipse] = useState("rgba(245,204,209,1)");
  const [play_ellipseColor, changePlayEllipse] = play_ellipse;

  function stopRecording(){
    if(isRecording){
      changeRecordingState(false);
      changePlayIcon("controller-play");
      changePlayEllipse("#d1eab8")
    }
    if(_data){
      downloadCSV(Papa.unparse(_data));
    }
  }
  
  return (
    <Container {...props} onClick={stopRecording}>
      <Ellipse3Stack>
        <svg
          viewBox="0 0 92 75"
          style={{
            top: 0,
            left: 0,
            width: 92,
            height: 75,
            position: "absolute"
          }}
        >
          <ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill={ellipseColor}
            cx={46}
            cy={38}
            rx={46}
            ry={38}
          ></ellipse>
        </svg>
        <EntypoIcon
          name={icon_name}
          style={{
            top: 15,
            left: 26,
            position: "absolute",
            color: "rgba(208,2,27,1)",
            fontSize: 40
          }}
        ></EntypoIcon>
      </Ellipse3Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Ellipse3Stack = styled.div`
  width: 92px;
  height: 75px;
  position: relative;
`;

export default StopButton;
