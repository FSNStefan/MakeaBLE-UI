import React, { Component, useContext, useEffect, useState } from "react";
import useColumns from "../useColumns";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import Papa from "papaparse";


import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


function DataTable(props) {
    const columns = useColumns();
    const { currentData } = useContext(MakeaBLEContext);
    const [_data, setData] = currentData;
    const [dataToDisplay, setDataToDisplay] = useState([])

    useEffect(() => {
        Papa.parse("./Projects/Fall-01/Data/dataset_new.csv", {
            download: true,
            header: true,
            complete: data => {
              setData(data.data);
            }
          });
    }, [])

    return (
            <div>
            <ReactTable
                data={_data}
                columns={columns}
                defaultPageSize={10}
                style={{
                    display: "flex",
                    height: '100%',
                    width: '670px',
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

export default DataTable;