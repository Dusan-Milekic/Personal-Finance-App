"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface Props {
  incomeData?: number[];
  expenseData?: number[];
  labels?: string[];
}

export default function IncomeExpenseChart({
  incomeData = [5000, 6000, 5500, 7000, 6500, 8000],
  expenseData = [3000, 3500, 3200, 4000, 3800, 4500],
  labels = ["January", "February", "March", "April", "May", "June"],
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const totalIncome = incomeData.reduce((a, b) => a + b, 0);
    const totalExpense = expenseData.reduce((a, b) => a + b, 0);

    chartRef.current = new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            data: [totalIncome, totalExpense],
            backgroundColor: ["#4CAF50", "#F44336"],
            borderColor: ["#388E3C", "#D32F2F"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.parsed;
                const total = totalIncome + totalExpense;
                const percentage = ((value / total) * 100).toFixed(1);
                return ` $${value.toLocaleString()} (${percentage}%)`;
              },
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [incomeData, expenseData]);

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <canvas ref={canvasRef} />
    </div>
  );
}