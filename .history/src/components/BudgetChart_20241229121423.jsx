import React from "react";
import { useSelector } from "react-redux";
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
  const bills = useSelector((state) => state.bills.bills);

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

  return (
    <div className="budget-chart-container">
      <h2>Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BudgetChart;
