import React, { Component } from "react";
import styled, { css } from "styled-components";

function Footer(props) {
  return (
    <Container {...props}>
      <Rect4Filler></Rect4Filler>
      <Rect4>
        <LoremIpsum>2022 MakeaBLE - ImagineCup. All rights reserved.</LoremIpsum>
      </Rect4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect4Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect4 = styled.div`
  height: 38px;
  background-color: #358095;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(251,250,250,1);
  font-size: 18px;
  margin-top: 9px;
  margin-left: 543px;
`;

export default Footer;
