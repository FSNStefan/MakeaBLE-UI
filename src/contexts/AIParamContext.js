import React, {createContext, useState} from 'react';

export const AIParamContext = createContext();

export const AIParamProvider = (props) => {
    
    const [description, setDescription] = useState("Click on parameter to learn more...");
    const [learning, setLearning] = useState("Classification");
    const [train_choice, setTrainChoice] = useState("pretrained");
    const [pretrained_model, setPretrainedModel] = useState("Fall detection");
    const [optimizer_choices, setOptimizer] = useState("Adam");

    return (
        <AIParamContext.Provider value={
            { 
                description: [description, setDescription],
                learning : [learning, setLearning],
                train_choice : [train_choice, setTrainChoice],
                pretrained_model : [pretrained_model, setPretrainedModel],
                optimizer_choices : [optimizer_choices, setOptimizer]
            }
        }>
            {props.children}
        </AIParamContext.Provider>)
}
