import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const BudgetChart = () => {
  const bills = useSelector((state: RootState) => state.bills.bills);

  const chartData = {
    labels: bills.map((bill) => bill.date),
    datasets: [
      {
        label: "Monthly Bills",
        data: bills.map((bill) => bill.amount),
        fill: false,
        backgroundColor: "#4CAF50",
        borderColor: "#4CAF50",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BudgetChart;
