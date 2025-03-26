import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PlusIcon, SearchIcon, FilterIcon, ClipboardCheckIcon, ClockIcon, CheckCircleIcon, MoreVerticalIcon } from 'lucide-react';
import { assignmentStats } from '../utils/mockData';
const Assignments = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock assignment data
  const assignments = [{
    id: 1,
    title: "Final Project - Web Development",
    course: "Introduction to Web Development",
    dueDate: "2023-12-15",
    submissions: "145/180",
    status: "active",
    averageGrade: "82%"
  }, {
    id: 2,
    title: "Research Paper - Business Ethics",
    course: "Business Ethics",
    dueDate: "2023-12-10",
    submissions: "98/143",
    status: "active",
    averageGrade: "78%"
  }, {
    id: 3,
    title: "Algorithm Analysis Assignment",
    course: "Data Structures and Algorithms",
    dueDate: "2023-11-30",
    submissions: "112/120",
    status: "grading",
    averageGrade: "75%"
  }, {
    id: 4,
    title: "Literary Analysis Essay",
    course: "Modern Literature",
    dueDate: "2023-11-25",
    submissions: "87/90",
    status: "completed",
    averageGrade: "88%"
  }, {
    id: 5,
    title: "Physics Lab Report",
    course: "Physics 101",
    dueDate: "2023-11-20",
    submissions: "102/105",
    status: "completed",
    averageGrade: "79%"
  }, {
    id: 6,
    title: "Marketing Strategy Presentation",
    course: "Marketing Fundamentals",
    dueDate: "2023-12-20",
    submissions: "0/132",
    status: "upcoming",
    averageGrade: "N/A"
  }];
  const getStatusColor = status => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'grading':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'upcoming':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || assignment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Assignment Management</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <PlusIcon size={18} />
          <span>Create Assignment</span>
        </button>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Assignments</p>
              <h3 className="text-2xl font-bold mt-1">{assignmentStats.total}</h3>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <ClipboardCheckIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pending Grading</p>
              <h3 className="text-2xl font-bold mt-1">{assignmentStats.pending}</h3>
            </div>
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
              <ClockIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Graded</p>
              <h3 className="text-2xl font-bold mt-1">{assignmentStats.graded}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <CheckCircleIcon size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* Search and Filter */}
      <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Search assignments..." className={`pl-10 pr-4 py-2 w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon size={18} className="text-gray-400" />
              </div>
              <select className={`pl-10 pr-4 py-2 rounded-md border appearance-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="grading">Grading</option>
                <option value="completed">Completed</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <button className={`px-4 py-2 border rounded-md ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
              Advanced Filters
            </button>
          </div>
        </div>
      </div>
      {/* Assignment List */}
      <div className={`rounded-lg shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Assignment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Submissions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Avg. Grade
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAssignments.map(assignment => <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{assignment.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(assignment.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.submissions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.averageGrade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <MoreVerticalIcon size={18} />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Assignments;