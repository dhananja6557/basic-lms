import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ChartComponent from '../components/ui/Chart';
import { BarChart3Icon, TrendingUpIcon, UsersIcon, BookOpenIcon, DownloadIcon } from 'lucide-react';
import { analyticsData } from '../utils/mockData';
const Analytics = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const [dateRange, setDateRange] = useState('month');
  // Line chart data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Course Completion Rate (%)',
      data: analyticsData.courseCompletionRate.map(item => item.rate),
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.3,
      fill: true
    }, {
      label: 'Student Engagement (%)',
      data: analyticsData.studentEngagement.map(item => item.engagement),
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.3,
      fill: true
    }]
  };
  // Bar chart data
  const barChartData = {
    labels: analyticsData.courseDistribution.labels,
    datasets: [{
      label: 'Number of Courses',
      data: analyticsData.courseDistribution.data,
      backgroundColor: '#3b82f6',
      borderColor: '#2563eb',
      borderWidth: 1
    }]
  };
  // Pie chart data
  const pieChartData = {
    labels: analyticsData.studentPerformance.labels,
    datasets: [{
      data: analyticsData.studentPerformance.data,
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
    }]
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <select className={`text-sm rounded-md border ${isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-700'} px-3 py-2`} value={dateRange} onChange={e => setDateRange(e.target.value)}>
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 90 days</option>
            <option value="year">Last year</option>
          </select>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            <DownloadIcon size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>
      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Course Completion</p>
              <h3 className="text-2xl font-bold mt-1">78%</h3>
              <p className="text-xs mt-1 text-green-600 dark:text-green-400">↑ 5% vs last period</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <BarChart3Icon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Engagement Rate</p>
              <h3 className="text-2xl font-bold mt-1">72%</h3>
              <p className="text-xs mt-1 text-green-600 dark:text-green-400">↑ 3% vs last period</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <TrendingUpIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Students</p>
              <h3 className="text-2xl font-bold mt-1">2,450</h3>
              <p className="text-xs mt-1 text-green-600 dark:text-green-400">↑ 8% vs last period</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <UsersIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Courses</p>
              <h3 className="text-2xl font-bold mt-1">98</h3>
              <p className="text-xs mt-1 text-amber-600 dark:text-amber-400">↑ 2% vs last period</p>
            </div>
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
              <BookOpenIcon size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Performance Trends</h2>
            <select className={`text-sm rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-700'} px-2 py-1`}>
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <ChartComponent type="line" data={lineChartData} height={300} />
        </div>
        <div className={`rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Course Distribution</h2>
            <select className={`text-sm rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-700'} px-2 py-1`}>
              <option>By Department</option>
              <option>By Level</option>
              <option>By Duration</option>
            </select>
          </div>
          <ChartComponent type="bar" data={barChartData} height={300} />
        </div>
        <div className={`rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Student Performance</h2>
            <select className={`text-sm rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-50 border-gray-200 text-gray-700'} px-2 py-1`}>
              <option>All Students</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
            </select>
          </div>
          <ChartComponent type="pie" data={pieChartData} height={300} />
        </div>
        <div className={`rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">AI-Driven Insights</h2>
          </div>
          <div className="space-y-4">
            <div className={`p-4 border-l-4 border-blue-500 rounded-r-md ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h3 className="font-medium text-blue-600 dark:text-blue-400">Enrollment Trends</h3>
              <p className="mt-1 text-sm">Computer Science courses have seen a 15% increase in enrollment this semester. Consider adding more sections to meet demand.</p>
            </div>
            <div className={`p-4 border-l-4 border-green-500 rounded-r-md ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
              <h3 className="font-medium text-green-600 dark:text-green-400">Student Success</h3>
              <p className="mt-1 text-sm">Students who participate in discussion forums are 30% more likely to complete their courses. Consider incentivizing forum participation.</p>
            </div>
            <div className={`p-4 border-l-4 border-amber-500 rounded-r-md ${isDark ? 'bg-gray-700' : 'bg-amber-50'}`}>
              <h3 className="font-medium text-amber-600 dark:text-amber-400">Resource Utilization</h3>
              <p className="mt-1 text-sm">Library resource usage peaks on Sundays and Mondays. Consider extending digital resource availability during these times.</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Analytics;