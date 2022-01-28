import React, {createContext, useState} from 'react';

export const MakeaBLEContext = createContext();

export const MakeaBLEProvider = (props) => {
    
    const [count, setCount] = useState(0); // Data record count during simulation
    const [isRecording, changeRecordingState] = useState(false); // Recording status of the companion software
    const [aiTabSelected, changeAITabState] = useState(false); // Is the AI Tab selected?
    const [projTabSelected, changeProjTabState] = useState(true); // Is the project tab selected?
    const [labelTabSelected, changeLabelTabState] = useState(false); // Is data labeling tab selected?

    const [dateTime, setDateTime] = useState(new Date()); // current time

    const [currentData, setData] = useState([]) // Data stored from simulation or from "Open Project"
    const [allData, setAllData] = useState([]) // All data (for UI testing only)
    
    // The following are current values from sensors. (Just for ease of management.)
    const [light, setLight] = useState("NAN")
    const [pressure, setPressure] = useState("NAN")
    const [temperature, setTemperature] = useState("NAN")
    const [gyro_x, setGyroX] = useState("NAN")
    const [gyro_y, setGyroY] = useState("NAN")
    const [gyro_z, setGyroZ] = useState("NAN")
    const [accel_x, setAccelX] = useState("NAN")
    const [accel_y, setAccelY] = useState("NAN")
    const [accel_z, setAccelZ] = useState("NAN")

    const [play_icon, changePlayIcon] = useState("controller-play");
    const [play_ellipseColor, changePlayEllipse] = useState("#d1eab8");

    return (
        <MakeaBLEContext.Provider value={
            { 
                count: [count, setCount], isRecording: [isRecording, changeRecordingState],
                aiTabSelected: [aiTabSelected, changeAITabState], allData: [allData, setAllData],
                projTabSelected: [projTabSelected, changeProjTabState],
                labelTabSelected: [labelTabSelected, changeLabelTabState],
                currentData : [currentData, setData], current_time: [dateTime, setDateTime],
                temperature : [temperature, setTemperature],
                pressure: [pressure, setPressure], light: [light, setLight],
                gyro_x: [gyro_x, setGyroX], gyro_y: [gyro_y, setGyroY],
                gyro_z: [gyro_z, setGyroZ], accel_x: [accel_x, setAccelX],
                accel_y: [accel_y, setAccelY], accel_z: [accel_z, setAccelZ],
                play_icon: [play_icon, changePlayIcon], play_ellipse: [play_ellipseColor, changePlayEllipse]
            }
        }>
            {props.children}
        </MakeaBLEContext.Provider>)
}
