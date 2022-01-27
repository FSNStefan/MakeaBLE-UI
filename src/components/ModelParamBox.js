import React, { Component, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { RadioGroup, FormControl, FormControlLabel, Radio } from '@mui/material';
import {AIParamContext} from "../contexts/AIParamContext";
import Dropdown from "./drop_down";

function ModelParamBox(props) {
  const { description, learning, train_choice, pretrained_model, optimizer_choices } = useContext(AIParamContext);
  const [desc, setDescription] = description;
  const [trainChoice, setTrainChoice] = train_choice;
  
  const [optionLearningType, setLearningType] = learning;
  const [optionModel, setModel] = pretrained_model;
  const [optionOptimizer, setOptimizer] = optimizer_choices;
  
  const pretrained_models = ["Fall detection", "Pee detection"];
  const optimizers = ["Adam","SGD","RMSprop"];
  const learningTypes = ["Classification", "Regression"];

  const clickUnitPerLayer = () => {
    setDescription("A node, also called a neuron or Perceptron, is a computational unit that has one or more weighted input connections, a transfer function that combines the inputs in some way, and an output connection. Nodes are then organized into layers to comprise a network. If you have too few hidden units, you will get high training error and high generalization error due to underfitting and high statistical bias. If you have too many hidden units, you may get low training error but still have high generalization error due to overfitting and high variance.")
  }

  const clickLayerNum = () => {
    setDescription("Hidden layers play a vital role in the performance of Neural network especially in the case of complex problems where the accuracy and the time complexity are the main constraints. ... Usually implementing three numbers of hidden layers give the optimal performance in terms of time complexity and accuracy.")
  }

  const handleRadioChange = (e) => {
    setTrainChoice(e.target.value)
    if(e.target.value === "pretrained"){
      setDescription("Transfer learning is a machine learning method where a model developed for a task is reused as the starting point for a model on a second task. It is a popular approach in deep learning where pre-trained models are used as the starting point on computer vision and natural language processing tasks given the vast compute and time resources required to develop neural network models on these problems and from the huge jumps in skill that they provide on related problems.")
    }
    else if(e.target.value === "train"){
      setDescription("Train a neural network from scratch based on parameters set by users may result in slow computation. However, if enough data is provided, the resulting model might be more efficient.")
    }
  }

  return (
    <Container {...props}>
      <Rect5>
        <AiModelParameters>AI Model parameters</AiModelParameters>
        <LoremIpsumRow>
          <LoremIpsum>Choose learning type :</LoremIpsum>
          <LearningTypeSelect>
            <Dropdown options={learningTypes} selected={optionLearningType} setSelected={setLearningType} />
          </LearningTypeSelect>
        </LoremIpsumRow>
        <MaterialRadioStackRowRow>
          <MaterialRadioStackRow>
            <MaterialRadioStack>
            <FormControl>
            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group" value={trainChoice} onChange={handleRadioChange}>
                <FormControlLabel value="pretrained" control={<Radio />} label="" />
                <FormControlLabel value="train" control={<Radio />} label="" />
              </RadioGroup>
              </FormControl>
            </MaterialRadioStack>
            <LoremIpsum1Column>
              <LoremIpsum1>Choose pre-trained model :</LoremIpsum1>
              <LoremIpsum2>Train model from scratch :</LoremIpsum2>
            </LoremIpsum1Column>
          </MaterialRadioStackRow>
          <ModelSelect>
            <Dropdown options={pretrained_models} selected={optionModel} setSelected={setModel} />
          </ModelSelect>
        </MaterialRadioStackRowRow>
        <Rect9>
          <LoremIpsum4StackRow>
            <LoremIpsum4Stack>
              <LoremIpsum4></LoremIpsum4>
              <HiddenLayerNum>No. of hidden layers :</HiddenLayerNum>
            </LoremIpsum4Stack>
            <HiddenLayerInput
              placeholder="hidden layer"
              defaultValue="3"
              onFocus={clickLayerNum}
            ></HiddenLayerInput>
          </LoremIpsum4StackRow>
          <UnitPerLayerRowRow>
            <UnitPerLayerRow>
              <UnitPerLayer>Unit per layer :</UnitPerLayer>
              <HiddenUnitInput
                placeholder="hidden units"
                defaultValue="128"
                onFocus={clickUnitPerLayer}
              ></HiddenUnitInput>
              <Optimizer>Optimizer :</Optimizer>
            </UnitPerLayerRow>
            <OptimizerSelect>
            <Dropdown options={optimizers} selected={optionOptimizer} setSelected={setOptimizer} />
            </OptimizerSelect>
          </UnitPerLayerRowRow>
        </Rect9>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect5 = styled.div`
  background-color: rgba(210,233,247,1);
  border-width: 2px;
  border-color: #000000;
  border-style: dashed;
  height: 262px;
  flex-direction: column;
  display: flex;
`;

const AiModelParameters = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 21px;
  margin-top: 7px;
  margin-left: 7px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 21px;
`;

const LearningTypeSelect = styled.div`
  height: 24px;
  flex: 1 1 0%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const LoremIpsumRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;

const MaterialRadioStack = styled.div`
  width: 40px;
  height: 77px;
  position: relative;
`;

const LoremIpsum1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 21px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 21px;
  margin-top: 13px;
`;

const LoremIpsum1Column = styled.div`
  width: 251px;
  flex-direction: column;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const MaterialRadioStackRow = styled.div`
  flex-direction: row;
  display: flex;
`;

const ModelSelect = styled.div`
  height: 24px;
  background-color: transparent;
  flex: 1 1 0%;
  margin-left: 13px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

const MaterialRadioStackRowRow = styled.div`
  height: 77px;
  flex-direction: row;
  display: flex;
  margin-top: 14px;
  margin-left: 7px;
  margin-right: 24px;
`;

const Rect9 = styled.div`
  height: 85px;
  border-width: 2px;
  border-color: #000000;
  border-style: dotted;
  flex-direction: column;
  display: flex;
  margin-left: 27px;
  margin-right: 24px;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  top: 19px;
  left: 14px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const HiddenLayerNum = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
`;

const LoremIpsum4Stack = styled.div`
  width: 195px;
  height: 24px;
  position: relative;
`;

const HiddenLayerInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 24px;
  width: 129px;
  background-color: #ffffff;
  margin-left: 14px;
  border: none;
`;

const LoremIpsum4StackRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 6px;
  margin-left: 8px;
  margin-right: 104px;
`;

const UnitPerLayer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 10px;
`;

const HiddenUnitInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 24px;
  background-color: #ffffff;
  width: 50px;
  margin-left: 6px;
  margin-top: 5px;
  border: none;
`;

const Optimizer = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 20px;
`;

const UnitPerLayerRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
`;

const OptimizerSelect = styled.div`
  height: 24px;
  background-color: transparent;
  flex: 1 1 0%;
  margin-left: 17px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const UnitPerLayerRowRow = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 8px;
  margin-right: 19px;
`;

export default ModelParamBox;
