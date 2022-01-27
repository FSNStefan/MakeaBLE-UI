import React, { Component, useState, useContext } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function RecordButton(props) {
  const { isRecording } = useContext(MakeaBLEContext);
  const [stillRecording, changeRecordingState] = isRecording;
  const [icon_name, changeIcon] = useState("controller-play");
  const [ellipseColor, changeEllipse] = useState("#d1eab8");

  function startRecording(){
    changeRecordingState(true);
    if(icon_name === "controller-play"){
      changeIcon("controller-stop");
      changeEllipse("#94C973");
    }
    else{
      changeIcon("controller-play");
      changeEllipse("#d1eab8");
    }
  }

  return (
    <Container {...props} onClick={startRecording}>
      <Ellipse2Stack>
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
            top: 12,
            left: 26,
            position: "absolute",
            color: "rgba(65,117,5,1)",
            fontSize: 40
          }}
        ></EntypoIcon>
      </Ellipse2Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Ellipse2Stack = styled.div`
  width: 92px;
  height: 75px;
  position: relative;
`;

export default RecordButton;
