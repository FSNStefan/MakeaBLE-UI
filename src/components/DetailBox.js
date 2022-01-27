import React, { Component , useContext} from "react";
import styled, { css } from "styled-components";
import {AIParamContext} from "../contexts/AIParamContext";

function DetailBox(props) {
  const { description } = useContext(AIParamContext);
  const [desc, setDescription] = description;

  return (
    <Container {...props}>
      <Rect6Filler></Rect6Filler>
      <Rect6>
        <Detail>Detail:</Detail>
        <StyledTextarea
          value={desc} 
          editable={false}
          />
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
  background-color: rgba(212,228,229,1);
  height: 262px;
  width: 421px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
`;

const Detail = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  margin-top: 7px;
  margin-right: 346px;
`;

const StyledTextarea = styled.textarea`
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  color: #121212;
  width: 393px;
  height: 200px;
  background-color: rgba(230, 230, 230,1);
  margin-top: 13px;
  margin-right: 12px;
  border: none;
`;

export default DetailBox;
