import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PlusIcon, SearchIcon, FilterIcon, BookOpenIcon, UsersIcon, ClockIcon, MoreVerticalIcon } from 'lucide-react';
import { courseStats } from '../utils/mockData';
const Courses = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock course data
  const courses = [{
    id: 1,
    name: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    students: 245,
    duration: "16 weeks",
    status: "active",
    progress: 65
  }, {
    id: 2,
    name: "Advanced Mathematics",
    instructor: "Prof. Robert Chen",
    students: 187,
    duration: "14 weeks",
    status: "active",
    progress: 42
  }, {
    id: 3,
    name: "Digital Marketing Fundamentals",
    instructor: "Dr. Emily Parker",
    students: 156,
    duration: "10 weeks",
    status: "active",
    progress: 78
  }, {
    id: 4,
    name: "Business Ethics",
    instructor: "Prof. Michael Rodriguez",
    students: 143,
    duration: "8 weeks",
    status: "active",
    progress: 91
  }, {
    id: 5,
    name: "Introduction to Psychology",
    instructor: "Dr. Lisa Thompson",
    students: 201,
    duration: "12 weeks",
    status: "draft",
    progress: 0
  }, {
    id: 6,
    name: "Web Development Bootcamp",
    instructor: "Prof. David Wilson",
    students: 0,
    duration: "20 weeks",
    status: "draft",
    progress: 0
  }];
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <PlusIcon size={18} />
          <span>Create Course</span>
        </button>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Courses</p>
              <h3 className="text-2xl font-bold mt-1">{courseStats.total}</h3>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <BookOpenIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Courses</p>
              <h3 className="text-2xl font-bold mt-1">{courseStats.active}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <UsersIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Draft Courses</p>
              <h3 className="text-2xl font-bold mt-1">{courseStats.draft}</h3>
            </div>
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
              <ClockIcon size={20} />
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
            <input type="text" placeholder="Search courses..." className={`pl-10 pr-4 py-2 w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon size={18} className="text-gray-400" />
              </div>
              <select className={`pl-10 pr-4 py-2 rounded-md border appearance-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <button className={`px-4 py-2 border rounded-md ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
              Advanced Filters
            </button>
          </div>
        </div>
      </div>
      {/* Course List */}
      <div className={`rounded-lg shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Course Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredCourses.map(course => <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{course.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.students}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${course.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'}`}>
                      {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                    width: `${course.progress}%`
                  }}></div>
                    </div>
                    <span className="text-xs mt-1 block">{course.progress}%</span>
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
export default Courses;