import React, { Component, useContext } from "react";
import styled, { css } from "styled-components";
import MaterialButtonPrimary from "./MaterialButtonPrimary";
import MaterialButtonPink from "./MaterialButtonPink";
import {AIParamContext} from "../contexts/AIParamContext";

function TrainParamBox(props) {
  const { description } = useContext(AIParamContext);
  const [desc, setDescription] = description;

  const clickEpoch = () => {
    setDescription("The number of epochs is a hyperparameter that defines the number times that the learning algorithm will work through the entire training dataset. One epoch means that each sample in the training dataset has had an opportunity to update the internal model parameters. An epoch is comprised of one or more batches.")
  }

  const clickBatch = () => {
    setDescription("The batch size is a hyperparameter that defines the number of samples to work through before updating the internal model parameters. Think of a batch as a for-loop iterating over one or more samples and making predictions. At the end of the batch, the predictions are compared to the expected output variables and an error is calculated. From this error, the update algorithm is used to improve the model, e.g. move down along the error gradient. A training dataset can be divided into one or more batches.")
  }

  return (
    <Container {...props}>
      <Rect10>
        <TrainingParametersColumnRowRow>
          <TrainingParametersColumnRow>
            <TrainingParametersColumn>
              <TrainingParameters>Training parameters</TrainingParameters>
              <MaximumEpoch>Maximum number of epoch :</MaximumEpoch>
            </TrainingParametersColumn>
            <Placeholder placeholder="epochs" defaultValue="10" onFocus={clickEpoch}></Placeholder>
            <BatchSize>Batch size :</BatchSize>
            <Placeholder1
              placeholder="batch size"
              defaultValue="16"
              onFocus={clickBatch}
            ></Placeholder1>
          </TrainingParametersColumnRow>
          <TrainingParametersColumnRowFiller></TrainingParametersColumnRowFiller>
          <TrainButtonRow>
            <MaterialButtonPrimary
              style={{
                height: 36,
                width: 110,
                marginRight: 13
              }}
              caption="Train"
            ></MaterialButtonPrimary>
            <MaterialButtonPink
              caption="BUTTON"
              style={{
                height: 36,
                width: 100
              }}
              caption="Clear"
            ></MaterialButtonPink>
          </TrainButtonRow>
        </TrainingParametersColumnRowRow>
      </Rect10>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect10 = styled.div`
  background-color: #d2e9f7;
  border-width: 2px;
  border-color: #000000;
  border-style: dashed;
  height: 81px;
  flex-direction: column;
  display: flex;
`;

const TrainingParameters = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 18px;
`;

const MaximumEpoch = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 10px;
`;

const TrainingParametersColumn = styled.div`
  width: 246px;
  flex-direction: column;
  display: flex;
`;

const Placeholder = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 24px;
  width: 100px;
  background-color: #ffffff;
  margin-left: 10px;
  margin-top: 30px;
  border: none;
`;

const BatchSize = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-left: 15px;
  margin-top: 34px;
`;

const Placeholder1 = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 24px;
  background-color: #ffffff;
  width: 100px;
  margin-left: 15px;
  margin-top: 30px;
  border: none;
`;

const TrainingParametersColumnRow = styled.div`
  flex-direction: row;
  margin-bottom: 2px;
  display: flex;
`;

const TrainingParametersColumnRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const TrainButtonRow = styled.div`
  height: 36px;
  flex-direction: row;
  margin-top: 24px;
  display: flex;
`;

const TrainingParametersColumnRowRow = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
  margin-top: 7px;
  margin-left: 8px;
  margin-right: 12px;
`;

export default TrainParamBox;
