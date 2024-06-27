import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  TooltipItem,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartData } from "../data/data";
export const options: ChartOptions<"bar"> = {
  indexAxis: "y", // Horizontal bar chart
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Combined Data Types in One Chart with ISP Status",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<"bar">) {
          const datasetLabel = tooltipItem.dataset.label || "";
          const value = tooltipItem.raw as number;
          if (datasetLabel === "Connection Status (1: Open, 0: Closed)") {
            return `${datasetLabel}: ${value > 0 ? "Open" : "Closed"}`;
          }
          if (datasetLabel === "ISP Status") {
            return `${datasetLabel}: ${value > 0 ? "ISP" : "Non-ISP"}`;
          }
          return `${datasetLabel}: ${value}`;
        },
      },
    },
    datalabels: {
      display: function (context) {
        return context.dataset.label === "ISP Status";
      },
      align: "center",
      anchor: "center",
      formatter: function (value) {
        return value > 0 ? "ISP" : "Non-ISP";
      },
      color: "white",
      backgroundColor: function (context) {
        return context.dataset.backgroundColor as string;
      },
      borderRadius: 4,
      padding: 4,
      font: {
        weight: "bold",
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      beginAtZero: true,
    },
    y: {
      stacked: true,
    },
  },
};
