import { useMemo } from "react";

export default function useData() {
  const data = useMemo(
    () => [
      {
        Year: 2019,
        Make: "BMW",
        Model: "i3",
        Category: "Hatchback",
        Accel_X: 0.01,
        Accel_Y: 0.01,
        Accel_Z: 0.01,
        Gyro_X: 0.05,
        Gyro_Y: 0.05,
        Gyro_Z: 0.23,
      },
      {
        Year: 2019,
        Make: "BMW",
        Model: "X6",
        Category: "SUV",
        Accel_X: 0.01,
        Accel_Y: 0.01,
        Accel_Z: 0.01,
        Gyro_X: 0.05,
        Gyro_Y: 0.05,
        Gyro_Z: 0.23,
      },
      {
        Year: 2019,
        Make: "BMW",
        Model: "X6 M",
        Category: "SUV",
        Accel_X: 0.01,
        Accel_Y: 0.01,
        Accel_Z: 0.01,
        Gyro_X: 0.05,
        Gyro_Y: 0.05,
        Gyro_Z: 0.23,
      },
      {
        Year: 2020,
        Make: "BMW",
        Model: "3 Series",
        Category: "Sedan",
        Accel_X: 0.01,
        Accel_Y: 0.01,
        Accel_Z: 0.01,
        Gyro_X: 0.05,
        Gyro_Y: 0.05,
        Gyro_Z: 0.23,
      },
    ],
    []
  );
  console.log(data);

  return data;
}