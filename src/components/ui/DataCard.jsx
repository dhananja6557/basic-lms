import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
const DataCard = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  color = 'blue'
}) => {
  const {
    theme
  } = useTheme();
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300',
    green: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300',
    red: 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
  };
  const trendColor = trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  return <div className={`${cardBg} rounded-lg shadow-sm p-5 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorMap[color]}`}>
          {icon}
        </div>
      </div>
      {trend && <div className="flex items-center">
          <span className={`text-sm font-medium ${trendColor}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
        </div>}
    </div>;
};
export default DataCard;