import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  max-width: 100%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export function Dropdown(props) {
  return (
      <StyledSelect onSelect={props.onSelect}>
        {props.children}
      </StyledSelect>
  );
}

export function Option(props) {
    return (
      <StyledOption value={props.value}>
        {props.value}
      </StyledOption>
    );
  }