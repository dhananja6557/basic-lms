import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SaveIcon, BellIcon, LockIcon, UserIcon, GlobeIcon, ServerIcon, ShieldIcon, MailIcon } from 'lucide-react';
const Settings = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    siteName: 'University LMS',
    siteDescription: 'A comprehensive learning management system for university education',
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    darkMode: theme === 'dark',
    language: 'en',
    timezone: 'UTC-5',
    twoFactorAuth: true,
    sessionTimeout: '30',
    maintenanceMode: false
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Handle dark mode toggle
    if (name === 'darkMode') {
      toggleTheme();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, this would save the settings to a backend
    alert('Settings saved successfully!');
  };
  const tabs = [{
    id: 'general',
    name: 'General',
    icon: <GlobeIcon size={18} />
  }, {
    id: 'notifications',
    name: 'Notifications',
    icon: <BellIcon size={18} />
  }, {
    id: 'security',
    name: 'Security',
    icon: <ShieldIcon size={18} />
  }, {
    id: 'account',
    name: 'Account',
    icon: <UserIcon size={18} />
  }, {
    id: 'system',
    name: 'System',
    icon: <ServerIcon size={18} />
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button onClick={handleSubmit} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <SaveIcon size={18} />
          <span>Save Changes</span>
        </button>
      </div>
      <div className={`rounded-lg overflow-hidden shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
          {tabs.map(tab => <button key={tab.id} className={`flex items-center gap-2 px-4 py-3 font-medium text-sm whitespace-nowrap border-b-2 ${activeTab === tab.id ? `border-blue-600 ${isDark ? 'text-blue-400' : 'text-blue-600'}` : `border-transparent ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}`} onClick={() => setActiveTab(tab.id)}>
              {tab.icon}
              {tab.name}
            </button>)}
        </div>
        {/* Settings Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* General Settings */}
            {activeTab === 'general' && <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium">General Settings</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Configure basic settings for your Learning Management System.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Site Name</label>
                    <input type="text" name="siteName" value={formData.siteName} onChange={handleChange} className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Language</label>
                    <select name="language" value={formData.language} onChange={handleChange} className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`}>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Timezone</label>
                    <select name="timezone" value={formData.timezone} onChange={handleChange} className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`}>
                      <option value="UTC-12">UTC-12:00</option>
                      <option value="UTC-8">UTC-8:00 (PST)</option>
                      <option value="UTC-5">UTC-5:00 (EST)</option>
                      <option value="UTC">UTC+0:00 (GMT)</option>
                      <option value="UTC+1">UTC+1:00 (CET)</option>
                      <option value="UTC+8">UTC+8:00 (CST)</option>
                      <option value="UTC+9">UTC+9:00 (JST)</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" name="darkMode" checked={formData.darkMode} onChange={handleChange} className="sr-only" />
                        <div className={`w-10 h-5 rounded-full ${formData.darkMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.darkMode ? 'transform translate-x-5' : ''}`}></div>
                      </div>
                      <span className="ml-3 text-sm">Enable Dark Mode</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Site Description</label>
                  <textarea name="siteDescription" value={formData.siteDescription} onChange={handleChange} rows="3" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`}></textarea>
                </div>
              </div>}
            {/* Notification Settings */}
            {activeTab === 'notifications' && <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium">Notification Settings</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Configure how and when you receive notifications.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MailIcon size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span>Email Notifications</span>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" name="emailNotifications" checked={formData.emailNotifications} onChange={handleChange} className="sr-only" />
                        <div className={`w-10 h-5 rounded-full ${formData.emailNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.emailNotifications ? 'transform translate-x-5' : ''}`}></div>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BellIcon size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span>Push Notifications</span>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" name="pushNotifications" checked={formData.pushNotifications} onChange={handleChange} className="sr-only" />
                        <div className={`w-10 h-5 rounded-full ${formData.pushNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.pushNotifications ? 'transform translate-x-5' : ''}`}></div>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MailIcon size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span>SMS Notifications</span>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" name="smsNotifications" checked={formData.smsNotifications} onChange={handleChange} className="sr-only" />
                        <div className={`w-10 h-5 rounded-full ${formData.smsNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.smsNotifications ? 'transform translate-x-5' : ''}`}></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-medium mb-2">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">New Course Submissions</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications when new courses are submitted for approval</p>
                        </div>
                        <select className={`rounded-md border ${isDark ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} px-2 py-1 text-sm`}>
                          <option>Immediate</option>
                          <option>Daily Digest</option>
                          <option>Weekly Digest</option>
                          <option>Never</option>
                        </select>
                      </div>
                    </div>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Student Enrollments</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications when students enroll in courses</p>
                        </div>
                        <select className={`rounded-md border ${isDark ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} px-2 py-1 text-sm`}>
                          <option>Immediate</option>
                          <option>Daily Digest</option>
                          <option>Weekly Digest</option>
                          <option>Never</option>
                        </select>
                      </div>
                    </div>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Assignment Deadlines</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive reminders about upcoming assignment deadlines</p>
                        </div>
                        <select className={`rounded-md border ${isDark ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} px-2 py-1 text-sm`}>
                          <option>1 day before</option>
                          <option>3 days before</option>
                          <option>1 week before</option>
                          <option>Never</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Security Settings */}
            {activeTab === 'security' && <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium">Security Settings</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Configure security settings for your account and the platform.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <LockIcon size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                        <span>Two-Factor Authentication</span>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" name="twoFactorAuth" checked={formData.twoFactorAuth} onChange={handleChange} className="sr-only" />
                          <div className={`w-10 h-5 rounded-full ${formData.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                          <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.twoFactorAuth ? 'transform translate-x-5' : ''}`}></div>
                        </div>
                      </label>
                    </div>
                    {formData.twoFactorAuth && <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className="text-sm">Two-factor authentication is enabled. This adds an extra layer of security to your account.</p>
                        <button className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                          Configure 2FA settings
                        </button>
                      </div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Session Timeout (minutes)</label>
                    <div className="flex items-center">
                      <input type="number" name="sessionTimeout" value={formData.sessionTimeout} onChange={handleChange} min="5" max="120" className={`w-24 rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">minutes</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Users will be logged out after this period of inactivity
                    </p>
                  </div>
                  <div>
                    <h3 className="text-md font-medium mb-2">Password Policy</h3>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'} space-y-2`}>
                      <div className="flex items-center">
                        <input type="checkbox" checked disabled className="rounded text-blue-600 focus:ring-blue-500 mr-2" />
                        <span className="text-sm">Minimum 8 characters</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" checked disabled className="rounded text-blue-600 focus:ring-blue-500 mr-2" />
                        <span className="text-sm">At least one uppercase letter</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" checked disabled className="rounded text-blue-600 focus:ring-blue-500 mr-2" />
                        <span className="text-sm">At least one number</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" checked disabled className="rounded text-blue-600 focus:ring-blue-500 mr-2" />
                        <span className="text-sm">At least one special character</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {/* Account Settings */}
            {activeTab === 'account' && <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium">Account Settings</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Manage your account information and preferences.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" defaultValue="Admin" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" defaultValue="User" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input type="email" defaultValue="admin@university.edu" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" defaultValue="(555) 123-4567" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-medium mb-3">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Current Password</label>
                      <input type="password" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">New Password</label>
                        <input type="password" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                        <input type="password" className={`w-full rounded-md border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button type="button" className="text-red-600 dark:text-red-400 hover:underline font-medium">
                    Deactivate Account
                  </button>
                </div>
              </div>}
            {/* System Settings */}
            {activeTab === 'system' && <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium">System Settings</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Configure system-wide settings and maintenance options.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Maintenance Mode</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        When enabled, the site will be inaccessible to users except administrators
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" name="maintenanceMode" checked={formData.maintenanceMode} onChange={handleChange} className="sr-only" />
                        <div className={`w-10 h-5 rounded-full ${formData.maintenanceMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${formData.maintenanceMode ? 'transform translate-x-5' : ''}`}></div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">System Backup</h3>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <p className="text-sm mb-3">Last backup: <span className="font-medium">November 15, 2023 at 03:00 AM</span></p>
                      <div className="flex gap-3">
                        <button type="button" className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md">
                          Backup Now
                        </button>
                        <button type="button" className={`text-sm px-3 py-1.5 rounded-md border ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-600' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                          Configure Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Storage Usage</h3>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Used: 42.3 GB</span>
                        <span>Total: 100 GB</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: '42%'
                    }}></div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">42% of your storage space is used</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">System Logs</h3>
                    <div className={`p-4 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm">View system activity logs</span>
                        <button type="button" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                          Download Logs
                        </button>
                      </div>
                      <select className={`w-full rounded-md border ${isDark ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'} px-3 py-2 mb-3`}>
                        <option>Application Logs</option>
                        <option>Authentication Logs</option>
                        <option>Error Logs</option>
                        <option>Admin Activity</option>
                      </select>
                      <div className={`p-3 rounded border text-sm font-mono overflow-auto max-h-40 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                        <div>2023-11-15 08:32:15 - User admin@university.edu logged in</div>
                        <div>2023-11-15 08:45:22 - Course "Introduction to Computer Science" updated</div>
                        <div>2023-11-15 09:12:05 - New student enrolled: emma.t@university.edu</div>
                        <div>2023-11-15 10:03:48 - System backup completed successfully</div>
                        <div>2023-11-15 11:27:33 - Assignment "Research Paper" created</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
          </form>
        </div>
      </div>
    </div>;
};
export default Settings;