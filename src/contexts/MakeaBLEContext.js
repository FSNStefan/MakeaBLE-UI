import React, {createContext, useState} from 'react';

export const MakeaBLEContext = createContext();

export const MakeaBLEProvider = (props) => {
    
    const [count, setCount] = useState(0); // Data record count during simulation
    const [isRecording, changeRecordingState] = useState(false); // Recording status of the companion software
    const [aiTabSelected, changeAITabState] = useState(false); // Is the AI Tab selected?
    const [projTabSelected, changeProjTabState] = useState(true); // Is the project tab selected?
    const [labelTabSelected, changeLabelTabState] = useState(false); // Is data labeling tab selected?

    const [currentData, setData] = useState([]) // Data stored from simulation or from "Open Project"

    return (
        <MakeaBLEContext.Provider value={
            { 
                count: [count, setCount], isRecording: [isRecording, changeRecordingState],
                aiTabSelected: [aiTabSelected, changeAITabState], 
                projTabSelected: [projTabSelected, changeProjTabState],
                labelTabSelected: [labelTabSelected, changeLabelTabState],
                currentData : [currentData, setData]
            }
        }>
            {props.children}
        </MakeaBLEContext.Provider>)
}
