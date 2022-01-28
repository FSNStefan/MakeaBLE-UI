import React, {createContext, useState} from 'react';

export const LabelingContext = createContext();

export const LabelingProvider = (props) => {

    const [label_count, setLabelCount] = useState(1)
    const [displayedData, setDisplayedData] = useState([])
    const [columns, setColumns] = useState([
        { Header: "Time", accessor: "Time"},
        { Header: "AMB_LIGHT", accessor: "AMB_LIGHT"},
        { Header: "PRESSURE", accessor: "PRESSURE"},
        { Header: "TEMPERATURE", accessor: "TEMPERATURE"},
        { Header: "ACCEL_X", accessor: "ACCEL_X"},
        { Header: "ACCEL_Y", accessor: "ACCEL_Y"},
        { Header: "ACCEL_Z", accessor: "ACCEL_Z"},
        { Header: "GYRO_X", accessor: "GYRO_X"},
        { Header: "GYRO_Y", accessor: "GYRO_Y"},
        { Header: "GYRO_Z", accessor: "GYRO_Z"},
    ])

    return (
        <LabelingContext.Provider value={
            { 
                labelCounts: [label_count, setLabelCount], columns: [columns, setColumns],
                displayedData: [displayedData, setDisplayedData]
            }
        }>
            {props.children}
        </LabelingContext.Provider>)
}
