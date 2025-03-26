import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Chart from 'chart.js/auto';
const ChartComponent = ({
  type = 'line',
  data,
  options = {},
  height = 300
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const {
    theme
  } = useTheme();
  // Set chart colors based on theme
  const getChartColors = () => {
    return {
      gridColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      textColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
    };
  };
  useEffect(() => {
    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const {
      gridColor,
      textColor
    } = getChartColors();
    // Default options with theme-specific colors
    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
          }
        },
        y: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
    // Merge default options with provided options
    const chartOptions = {
      ...defaultOptions,
      ...options
    };
    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type,
      data,
      options: chartOptions
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options, theme, type]);
  return <div style={{
    height: `${height}px`
  }} className="w-full">
      <canvas ref={chartRef} />
    </div>;
};
export default ChartComponent;