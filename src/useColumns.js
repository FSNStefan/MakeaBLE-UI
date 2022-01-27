import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Time",
        accessor: "Time"
      },
      {
        Header: "AMB_LIGHT",
        accessor: "AMB_LIGHT"
      },
      {
        Header: "PRESSURE",
        accessor: "PRESSURE"
      },
      {
        Header: "TEMPERATURE",
        accessor: "TEMPERATURE"
      },
      {
        Header: "ACCEL_X",
        accessor: "ACCEL_X"
      },
      {
        Header: "ACCEL_Y",
        accessor: "ACCEL_Y"
      },
      {
        Header: "ACCEL_Z",
        accessor: "ACCEL_Z"
      },
      {
        Header: "GYRO_X",
        accessor: "GYRO_X"
      },
      {
        Header: "GYRO_Y",
        accessor: "GYRO_Y"
      },
      {
        Header: "GYRO_Z",
        accessor: "GYRO_Z"
      },
    ],
    []
  );

  return columns;
}