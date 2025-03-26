import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { HomeIcon, BookOpenIcon, UsersIcon, ClipboardCheckIcon, BarChart3Icon, SettingsIcon, MenuIcon, XIcon } from 'lucide-react';
const Sidebar = () => {
  const {
    theme
  } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    name: 'Dashboard',
    path: '/',
    icon: <HomeIcon size={20} />
  }, {
    name: 'Courses',
    path: '/courses',
    icon: <BookOpenIcon size={20} />
  }, {
    name: 'Students',
    path: '/students',
    icon: <UsersIcon size={20} />
  }, {
    name: 'Assignments',
    path: '/assignments',
    icon: <ClipboardCheckIcon size={20} />
  }, {
    name: 'Analytics',
    path: '/analytics',
    icon: <BarChart3Icon size={20} />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon size={20} />
  }];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const baseClasses = theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
  const activeClasses = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-600';
  return <>
      {/* Mobile menu button */}
      <button className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-blue-600 text-white" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {/* Sidebar for mobile */}
      <div className={`
        fixed inset-y-0 left-0 z-20 w-64 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        ${baseClasses} shadow-lg
      `}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">UniLMS</h1>
          <p className="text-sm opacity-70">Admin Dashboard</p>
        </div>
        <nav className="mt-4 px-2">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `
                flex items-center gap-3 px-4 py-3 rounded-md mb-1 transition-colors
                ${isActive ? activeClasses : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
              `} onClick={() => setIsMobileMenuOpen(false)}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>)}
        </nav>
      </div>
      {/* Sidebar for desktop */}
      <div className={`hidden md:block w-64 ${baseClasses} shadow-lg`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">UniLMS</h1>
          <p className="text-sm opacity-70">Admin Dashboard</p>
        </div>
        <nav className="mt-4 px-2">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `
                flex items-center gap-3 px-4 py-3 rounded-md mb-1 transition-colors
                ${isActive ? activeClasses : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
              `}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>)}
        </nav>
      </div>
    </>;
};
export default Sidebar;