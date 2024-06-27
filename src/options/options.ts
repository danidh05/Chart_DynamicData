import { Chart as ChartJS, ChartOptions, TooltipItem } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartData } from "../data/data";

// Define the chart options for a bar chart
export const options: ChartOptions<"bar"> = {
  // Configure the chart to be a horizontal bar chart
  indexAxis: "y", // This sets the index axis to the y-axis, making the chart horizontal
  responsive: true, // Ensures the chart is responsive and adjusts to fit the container

  // Configuration for various plugins used in the chart
  plugins: {
    // Configuration for the legend, which is the chart's label/key
    legend: {
      position: "top", // Positions the legend at the top of the chart
    },
    // Configuration for the title of the chart
    title: {
      display: true, // Displays the chart title
      text: "Combined Data Types in One Chart with ISP Status", // The text of the chart title
    },
    // Configuration for tooltips that appear when hovering over data points
    tooltip: {
      callbacks: {
        // Custom function to format the tooltip label
        label: function (tooltipItem: TooltipItem<"bar">) {
          // Retrieve the label of the dataset
          const datasetLabel = tooltipItem.dataset.label || "";
          // Retrieve the value of the data point
          const value = tooltipItem.raw as number;

          // Custom label for "Connection Status"
          if (datasetLabel === "Connection Status (1: Open, 0: Closed)") {
            // Format the label to show "Open" or "Closed" based on the value
            return `${datasetLabel}: ${value > 0 ? "Open" : "Closed"}`;
          }
          // Custom label for "ISP Status"
          if (datasetLabel === "ISP Status") {
            // Format the label to show "ISP" or "Non-ISP" based on the value
            return `${datasetLabel}: ${value > 0 ? "ISP" : "Non-ISP"}`;
          }
          // Default label for other datasets
          return `${datasetLabel}: ${value}`;
        },
      },
    },
    // Configuration for data labels displayed on the chart
    datalabels: {
      // Function to determine if data labels should be displayed
      display: function (context) {
        // Display data labels for the "ISP Status" and "Connection Status" datasets
        return (
          context.dataset.label === "ISP Status" ||
          context.dataset.label === "Connection Status (1: Open, 0: Closed)"
        );
      },
      align: "end", // Aligns the label text to the end inside the bar
      anchor: "end", // Anchors the label inside the end of the bar
      offset: -7, // Moves the label a bit inside the bar
      // Function to format the data label value
      formatter: function (value, context) {
        // Format the value to show "ISP" or "Non-ISP" for ISP Status dataset
        if (context.dataset.label === "ISP Status") {
          return value > 0 ? "ISP" : "Non-ISP";
        }
        // Format the value to show "Open" or "Closed" for Connection Status dataset
        if (
          context.dataset.label === "Connection Status (1: Open, 0: Closed)"
        ) {
          return value > 0 ? "Open" : "Closed";
        }
        return value; // Default return value
      },
      color: "white", // Sets the text color of the data labels to white
      // Function to determine the background color of the data labels
      backgroundColor: function (context) {
        // Sets the background color of the label to the same as the dataset's color
        return context.dataset.backgroundColor as string;
      },
      borderRadius: 4, // Rounds the corners of the label's background with a radius of 4
      padding: 3, // Adds 4 pixels of padding around the label
      font: {
        weight: "bold", // Sets the font weight of the label text to bold
      },
    },
  },

  // Configuration for the scales of the chart
  scales: {
    // Configuration for the x-axis
    x: {
      stacked: true, // Enables stacking of bars on the x-axis
      beginAtZero: true, // Ensures the x-axis starts at zero
    },
    // Configuration for the y-axis
    y: {
      stacked: true, // Enables stacking of bars on the y-axis
    },
  },
};
