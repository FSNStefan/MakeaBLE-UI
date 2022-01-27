import React, { Component, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import MaterialButtonPrimary from "./MaterialButtonPrimary";

import {LabelingContext} from "../contexts/LabelingContext";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";

function addKeyValue(obj, key, data){
  obj[key] = data;
}

function LabelTipBox(props) {
  
  const { columns, labelCounts } = useContext(LabelingContext);
  const [ori_columns, setColumns] = columns;
  const [label_count, setLabelCount] = labelCounts;

  const { currentData } = useContext(MakeaBLEContext);
  const [rows, setRows] = currentData;

  const updateMyData = (rowIndex, columnId, value) => {
    setRows(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // Create an editable cell renderer. This is a custom function that we supplied to our table instance.
  const EditableCell = ({value: initialValue, row: { index }, column: { id }}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <input value={value} onChange={onChange} onBlur={onBlur} style={{backgroundColor: "transparent"}} />
  }

  const addLabel = () => {
    // Add new column for new label.
    setColumns(prevColumn => [...prevColumn, {Header: "LABEL_" + label_count, accessor: "LABEL_" + label_count, Cell: EditableCell}])
    setLabelCount(prevCount => prevCount + 1);
  }

  const uploadLabel = () => {
    // Upload new CSV file for new label.
    addLabel();
    
  }

  return (
    <Container {...props}>
      <Rect5Filler></Rect5Filler>
      <Rect5>
        <LoremIpsum>
          Tips: Upload the label files or {"\n"}add a new column of labels{" "}
          {"\n"}for labeling.
        </LoremIpsum>
        <EndWrapperFillerRow>
          <EndWrapperFiller></EndWrapperFiller>
          <MaterialButtonPrimaryRow>
            <MaterialButtonPrimary
              style={{
                height: 36,
                width: 80,
                marginRight: 27
              }}
              caption="Add Label"
              onClick={addLabel}
            ></MaterialButtonPrimary>
            <MaterialButtonPrimary
              style={{
                height: 36,
                width: 80
              }}
              caption="Upload CSV"
            ></MaterialButtonPrimary>
          </MaterialButtonPrimaryRow>
        </EndWrapperFillerRow>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Rect5Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Rect5 = styled.div`
  height: 170px;
  background-color: #c5e6f9;
  width: 320px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  text-align: center;
  align-self: flex-end;
  margin-top: 12px;
  margin-right: 19px;
`;

const EndWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const MaterialButtonPrimaryRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
`;

const EndWrapperFillerRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 27px;
  margin-left: 21px;
  margin-right: 20px;
`;

export default LabelTipBox;
