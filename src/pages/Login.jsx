import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { BookOpenIcon, LockIcon, MailIcon } from 'lucide-react';
const Login = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, this would validate credentials
    navigate('/');
  };
  return <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="p-4 bg-blue-600 rounded-full">
            <BookOpenIcon size={32} className="text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          University LMS
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Learning Management System
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`py-8 px-4 sm:rounded-lg sm:px-10 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow`}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className={`pl-10 block w-full rounded-md ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} shadow-sm`} placeholder="admin@university.edu" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className="text-gray-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className={`pl-10 block w-full rounded-md ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} shadow-sm`} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className={`h-4 w-4 rounded ${isDark ? 'bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500' : 'border-gray-300 text-blue-600 focus:ring-blue-500'}`} />
                <label htmlFor="remember_me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#forgot-password" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${isDark ? 'bg-gray-800' : 'bg-white'} text-gray-500`}>
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a href="#sso" className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${isDark ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'}`}>
                  SSO
                </a>
              </div>
              <div>
                <a href="#guest" className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${isDark ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'}`}>
                  Guest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Login;