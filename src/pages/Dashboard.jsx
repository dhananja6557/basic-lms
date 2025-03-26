import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DataCard from '../components/ui/DataCard';
import ChartComponent from '../components/ui/Chart';
import { BookOpenIcon, UsersIcon, ClipboardCheckIcon, GraduationCapIcon } from 'lucide-react';
import { courseStats, studentStats, assignmentStats, analyticsData, recentActivities } from '../utils/mockData';
const Dashboard = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const chartData = {
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
  const pieChartData = {
    labels: analyticsData.courseDistribution.labels,
    datasets: [{
      data: analyticsData.courseDistribution.data,
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6b7280']
    }]
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select className={`text-sm rounded-md border ${isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-700'} px-3 py-2`}>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
          <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Export Report
          </button>
        </div>
      </div>
      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DataCard title="Total Courses" value={courseStats.total} icon={<BookOpenIcon size={20} />} trend="up" trendValue="12%" color="blue" />
        <DataCard title="Total Students" value={studentStats.total} icon={<UsersIcon size={20} />} trend="up" trendValue="8%" color="green" />
        <DataCard title="Assignments" value={assignmentStats.total} icon={<ClipboardCheckIcon size={20} />} trend="up" trendValue="5%" color="amber" />
        <DataCard title="Graduating Soon" value={studentStats.graduating} icon={<GraduationCapIcon size={20} />} trend="down" trendValue="3%" color="purple" />
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`lg:col-span-2 rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-medium mb-4">Performance Trends</h2>
          <ChartComponent type="line" data={chartData} height={300} />
        </div>
        <div className={`rounded-lg shadow-sm p-5 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-medium mb-4">Course Distribution</h2>
          <ChartComponent type="pie" data={pieChartData} height={300} />
        </div>
      </div>
      {/* Recent Activities */}
      <div className={`rounded-lg shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium">Recent Activities</h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className={`text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentActivities.map(activity => <tr key={activity.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{activity.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{activity.action}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{activity.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{activity.time}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;