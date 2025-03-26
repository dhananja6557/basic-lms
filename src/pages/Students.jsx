import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PlusIcon, SearchIcon, FilterIcon, UsersIcon, UserPlusIcon, GraduationCapIcon, MoreVerticalIcon } from 'lucide-react';
import { studentStats } from '../utils/mockData';
const Students = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock student data
  const students = [{
    id: 1,
    name: "Emma Thompson",
    email: "emma.t@university.edu",
    program: "Computer Science",
    year: "Junior",
    gpa: "3.8",
    status: "active"
  }, {
    id: 2,
    name: "Michael Johnson",
    email: "m.johnson@university.edu",
    program: "Business Administration",
    year: "Senior",
    gpa: "3.5",
    status: "active"
  }, {
    id: 3,
    name: "Sophia Chen",
    email: "s.chen@university.edu",
    program: "Mathematics",
    year: "Sophomore",
    gpa: "4.0",
    status: "active"
  }, {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@university.edu",
    program: "Engineering",
    year: "Freshman",
    gpa: "3.2",
    status: "probation"
  }, {
    id: 5,
    name: "Olivia Martinez",
    email: "o.martinez@university.edu",
    program: "Psychology",
    year: "Senior",
    gpa: "3.9",
    status: "active"
  }, {
    id: 6,
    name: "Ethan Brown",
    email: "e.brown@university.edu",
    program: "English Literature",
    year: "Junior",
    gpa: "2.7",
    status: "probation"
  }];
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.email.toLowerCase().includes(searchTerm.toLowerCase()) || student.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <PlusIcon size={18} />
          <span>Add Student</span>
        </button>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Students</p>
              <h3 className="text-2xl font-bold mt-1">{studentStats.total}</h3>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <UsersIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">New This Month</p>
              <h3 className="text-2xl font-bold mt-1">{studentStats.newThisMonth}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <UserPlusIcon size={20} />
            </div>
          </div>
        </div>
        <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Graduating Soon</p>
              <h3 className="text-2xl font-bold mt-1">{studentStats.graduating}</h3>
            </div>
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
              <GraduationCapIcon size={20} />
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
            <input type="text" placeholder="Search students..." className={`pl-10 pr-4 py-2 w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon size={18} className="text-gray-400" />
              </div>
              <select className={`pl-10 pr-4 py-2 rounded-md border appearance-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="probation">Probation</option>
              </select>
            </div>
            <button className={`px-4 py-2 border rounded-md ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
              Advanced Filters
            </button>
          </div>
        </div>
      </div>
      {/* Students List */}
      <div className={`rounded-lg shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr className={isDark ? 'bg-gray-700' : 'bg-gray-50'}>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Program
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  GPA
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredStudents.map(student => <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.program}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.gpa}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${student.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
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
export default Students;