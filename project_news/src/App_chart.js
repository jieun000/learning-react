import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing the newer version of Chart.js

const MyChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const context = chartRef.current.getContext('2d');
    const myChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'test1',
            fill: false,
            data: [21, 19, 25, 20, 23, 26, 25],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      myChart.destroy(); // Cleanup the chart on component unmount
    };
  }, []); // Empty dependency array ensures the useEffect runs once after initial render

  return (
    <div style={{ width: '900px', height: '900px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MyChartComponent;
