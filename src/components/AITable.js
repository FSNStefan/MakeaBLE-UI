import React, { Component, useContext, useEffect, useState } from "react";
import useColumns from "../useColumns";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import { LabelingContext } from "../contexts/LabelingContext";
import { LineChart, Line, XAxis, YAxis } from "recharts";

import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const accuracies = [];
const rand = 10;
for (let i = 0; i < 6; i++) {
  let d = {
    epoch: i,
    value: Math.random() * (rand + 5) + 80
  };

  accuracies.push(d);
}

const loss = []
const rand = 10;
for (let i = 0; i < 6; i++) {
    let d = {
      epoch: i,
      value: 30 - Math.random() * (rand + 5)
    };
  
    loss.push(d);
  }

function TrainCell(props){
    // This Cell will be for rendering graphs of training progress in terms of loss and accuracy
    // Axis X: # of epoch, Axis Y : metric values
    return ( 
    <LineChart width="25%" height="25%" data={props.metrics} >
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        <XAxis dataKey="epoch" />
        <YAxis />
    </LineChart>); 
}

function ModelCell(props){
    // This is the code to create a Cell object for rendering Model detail on the AI table.
    const [modelID, setModelID] = useState("Model #1");
    const [label_name, setLabelName] = useState("LABEL_1");
    const dataset_name = props.project_name;

    return (
        <Container {...props}>
          <Rect>
            <ModelName>{modelID}</ModelName>
            <Group>
              <Rect2>
                <DatasetRow>
                  <Dataset>Dataset:</Dataset>
                  <ProjectNameTxt>{dataset_name}</ProjectNameTxt>
                </DatasetRow>
                <TargetRow>
                  <Target>Target:</Target>
                  <LabelNameTxt>{label_name}</LabelNameTxt>
                </TargetRow>
              </Rect2>
            </Group>
          </Rect>
        </Container>
      );
}

export default function AITable(props){
    const [table_columns, setColumns] = useState([
        { Header: "Model", accessor: "Model"},
        { Header: "Accuracy", accessor: "Accuracy"},
        { Header: "Loss", accessor: "Loss"},
    ]);

    //const { columns, labelCounts } = useContext(LabelingContext);
    //const { currentData } = useContext(MakeaBLEContext);
    const [_results, setResults] = useState([
        {
            Model: <ModelCell project_name="Fall-01" />,
            Accuracy: <TrainCell metrics={accuracies} />,
            Loss: <TrainCell metrics={loss} />,
          },
    ]);

    return (<div>
        <ReactTable
            data={_results}
            columns={table_columns}
            defaultPageSize={10}
            style={{
                display: "flex", height: '100%',
                width: '670px', overflow: 'hidden',
                flexdirection: 'column', flex: '1 1 0%',
                marginleft: '23px'
            }}
            className="-striped -highlight"
        />
    </div>);
}

const Container = styled.div`
  display: flex; flex-direction: column;
`;

const Rect = styled.div`
  background-color: rgba(230,250,253,1); flex-direction: column; display: flex; flex: 1 1 0%;
`;

const ModelName = styled.span`
  font-family: Roboto; font-style: normal;
  font-weight: 700; color: rgba(34,69,185,1);
  text-align: center; font-size: 21px;
  margin-top: 14px; margin-left: 89px;
`;

const Group = styled.div`
  flex-direction: column; display: flex; flex: 1 1 0%; margin-bottom: 18px;
  margin-top: 10px; margin-left: 13px; margin-right: 10px;
`;

const Rect2 = styled.div`
  width: 239px; height: 78px; background-color: rgba(237,245,247,1);
  border-width: 2px; border-color: rgba(100,176,184,1);
  border-radius: 8px; border-style: dashed;
  flex-direction: column; display: flex;
`;

const Dataset = styled.span`
  font-family: Roboto; font-style: normal;
  font-weight: 700; color: #121212; font-size: 21px;
`;

const ProjectNameTxt = styled.span`
  font-family: Roboto; font-style: normal;
  font-weight: 400; color: #121212; font-size: 21px; text-align: left; 
  margin-left: 49px; margin-top: 2px;
`;

const DatasetRow = styled.div`
  height: 26px; flex-direction: row; display: flex;
  margin-top: 10px; margin-left: 10px; margin-right: 40px;
`;

const Target = styled.span`
  font-family: Roboto; font-style: normal;
  font-weight: 700; color: #121212; font-size: 21px;
`;

const LabelNameTxt = styled.span`
  font-family: Roboto; font-style: normal;
  font-weight: 400; color: #121212;
  font-size: 21px; text-align: left; margin-left: 58px;
`;

const TargetRow = styled.div`
  height: 24px; flex-direction: row; display: flex;
  margin-top: 14px; margin-left: 13px; margin-right: 19px;
`;