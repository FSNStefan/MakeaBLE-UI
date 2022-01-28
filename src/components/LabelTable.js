import React, { Component, useContext, useState, useEffect } from "react";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import Papa from "papaparse";
import ReactTable from "react-table-6";
import {LabelingContext} from "../contexts/LabelingContext";

import "react-table-6/react-table.css";

function LabelTable() {
    const { columns, labelCounts, displayedData } = useContext(LabelingContext);
    const [ori_columns, setColumns] = columns;
    const [label_count, setLabelCount] = labelCounts;
    const [data_to_display, setDisplayedData] = displayedData;

    const { currentData } = useContext(MakeaBLEContext);
    const [_data, setData] = currentData;

    useEffect(() => {
      if(data_to_display.length != _data.length){
        setDisplayedData(_data);
      }
    }, [])

    return (
            <div>
            <ReactTable
                data={data_to_display}
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