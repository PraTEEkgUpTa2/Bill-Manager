import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

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

  return <Line data={chartData} options={options} />;
};

export default BudgetChart;