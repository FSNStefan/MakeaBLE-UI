import React, { Component, useContext, useState, useEffect } from "react";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import Papa from "papaparse";
import ReactTable from "react-table-6";
import {LabelingContext} from "../contexts/LabelingContext";

import "react-table-6/react-table.css";

function LabelTable() {
    const { columns, labelCounts } = useContext(LabelingContext);
    const [ori_columns, setColumns] = columns;
    const [label_count, setLabelCount] = labelCounts;

    const { currentData } = useContext(MakeaBLEContext);
    const [_data, setData] = currentData;

    useEffect(() => {
        Papa.parse("./Projects/Fall-01/Data/dataset_new.csv", {
            download: true,
            header: true,
            complete: data => {
              setData(data.data);
              /*const arr = data.data.map(i => `${i.Time} , ${i.AMB_LIGHT}`); // This is how to access data in each column
              console.log(arr)*/ 
            }
          });
    }, [])

    return (
            <div>
            <ReactTable
                data={_data}
                columns={ori_columns}
                defaultPageSize={10}
                style={{
                    display: "flex",
                    height: '100%',
                    width: '685px',
                    overflow: 'hidden',
                    flexdirection: 'column',
                    flex: '1 1 0%',
                    marginleft: '23px'
                }}
                className="-striped -highlight"
            />
          </div>
    );
}

export default LabelTable;