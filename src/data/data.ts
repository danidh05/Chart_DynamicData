// src/data/chartData.ts
import { ChartData } from "chart.js";

export const chartData: ChartData<"bar", number[], string> = {
  labels: ["IT", "HR", "Network"],
  datasets: [
    {
      label: "Numeric Value",
      data: [50, 20, 75],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      stack: "Stack 0",
    },
    {
      label: "Connection Status (1: Open, 0: Closed)",
      data: [1, 0, 1],
      backgroundColor: "rgba(153, 102, 255, 0.6)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
      stack: "Stack 1",
    },
    {
      label: "ISP Status",
      data: [1, 0, 1],
      backgroundColor: "rgba(255, 159, 64, 0.6)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
      stack: "Stack 2",
    },
  ],
};
