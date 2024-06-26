// src/ChartComponent.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { options } from "../options/options";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartData } from "../data/data";

// Register necessary chart elements with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartComponent: React.FC = () => {
  return (
    <div>
      <h2>Combined Data in One Chart with ISP Status</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
