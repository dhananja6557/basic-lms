import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BellIcon, SunIcon, MoonIcon, UserIcon, ChevronDownIcon } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
const Header = () => {
  const {
    theme
  } = useTheme();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notifications = [{
    id: 1,
    message: "New course submission from Prof. Smith",
    time: "5 minutes ago"
  }, {
    id: 2,
    message: "Student enrollment deadline tomorrow",
    time: "1 hour ago"
  }, {
    id: 3,
    message: "System maintenance scheduled for tonight",
    time: "3 hours ago"
  }];
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  return <header className={`px-4 py-2 border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm flex items-center justify-between`}>
      <div className="md:w-64"></div>
      <div className="flex-1 md:text-center">
        <h2 className="text-lg font-semibold hidden md:block">University Learning Management System</h2>
      </div>
      <div className="flex items-center space-x-4">
        {/* Notifications Dropdown */}
        <div className="relative">
          <button className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`} onClick={toggleNotifications}>
            <BellIcon size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
          {isNotificationsOpen && <div className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg z-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium">Notifications</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map(notification => <div key={notification.id} className={`p-3 border-b ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} cursor-pointer`}>
                    <p className="text-sm font-medium">{notification.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                  </div>)}
              </div>
              <div className="p-2 text-center">
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all notifications</button>
              </div>
            </div>}
        </div>
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* User Menu */}
        <div className="relative">
          <button className={`flex items-center space-x-1 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} p-1 pr-2`} onClick={toggleUserMenu}>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <UserIcon size={16} />
            </div>
            <span className="hidden md:inline text-sm font-medium">Admin</span>
            <ChevronDownIcon size={16} />
          </button>
          {isUserMenuOpen && <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1">
                <a href="#profile" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Profile</a>
                <a href="#account" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Account Settings</a>
                <a href="#logout" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-gray-100'}`}>Logout</a>
              </div>
            </div>}
        </div>
      </div>
    </header>;
};
export default Header;