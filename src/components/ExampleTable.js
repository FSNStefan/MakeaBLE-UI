import React, { Component, useContext, useState, useEffect } from "react";
import {MakeaBLEContext} from "../contexts/MakeaBLEContext";
import styled from 'styled-components'
import Papa from "papaparse";
import ReactTable, { useTable, usePagination } from "react-table";
import "react-table-6/react-table.css";


const Styles = styled.div`
  padding: 1rem;
  height: '100%';
  max-width: 100vw;
  table {
    border-spacing: 0; border: 1px solid black;
     overflow-x: scroll;
    font-size: 14px;
    width: '100%';
    tr {
        overflow-y: auto;
      :last-child {
        td { border-bottom: 0; }
      }
    }
    th, td {
      margin: 0; padding: 0.5rem; border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
      input {
        font-size: 1rem; padding: 0; margin: 0; border: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
  }
`

// Create an editable cell renderer. This is a custom function that we supplied to our table instance.
const EditableCell = ({value: initialValue, row: { index }, column: { id }, updateMyData, }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

     // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
}

function Table({ columns, data, updateMyData, skipPageReset }) {
    // For this example, we're using pagination to illustrate how to stop
    // the current page from resetting when our data changes
    // Otherwise, nothing is different here.
    const {getTableProps, getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
        // use the skipPageReset option to disable page resetting temporarily
        autoResetPage: !skipPageReset,
        // updateMyData isn't part of the API, but
        // anything we put into these options will
        // automatically be available on the instance.
        // That way we can call this function from our
        // cell renderer!
        updateMyData,
      },
      usePagination
    )
  
    // Render the UI for your table
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input type="number" defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }

function LabelTable() {
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
        { Header: "LABEL_1", accessor: "LABEL_1"},
    ])

    const { currentData } = useContext(MakeaBLEContext);
    const {selected_rows, setSelectedRows} = useState([]);
    const [_data, setData] = currentData;

    useEffect(() => {
        Papa.parse("./Projects/Fall-01/Data/dataset_new.csv", {
            download: true,
            header: true,
            complete: data => {
              setData(data.data);
            }
          });
    }, [])

    //const [data, setData] = useState(() => makeData(20))
    const [originalData] = useState(_data)
    const [skipPageReset, setSkipPageReset] = useState(false)

    const addLabel = () => {

    }

    const applyClass = () => {

    }

    // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  useEffect(() => {
    setSkipPageReset(false)
  }, [_data])

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
/*
  return (
    <Styles>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={_data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  )*/

    return (
            <div>
            <ReactTable
                data={_data}
                columns={columns}
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