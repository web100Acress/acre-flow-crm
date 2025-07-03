
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Database, 
  Mail, 
  Palette, 
  Globe,
  Save,
  Eye,
  EyeOff,
  Upload
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const SettingsContent = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    general: {
      companyName: '100Acres Real Estate',
      companyEmail: 'admin@100acres.com',
      companyPhone: '+91 9876543210',
      companyAddress: 'Mumbai, Maharashtra, India',
      timezone: 'Asia/Kolkata',
      language: 'en'
    },
    security: {
      twoFactorAuth: false,
      passwordPolicy: 'medium',
      sessionTimeout: 30,
      loginAttempts: 5
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      leadNotifications: true,
      ticketNotifications: true
    },
    appearance: {
      theme: 'light',
      primaryColor: 'green',
      sidebarCollapsed: false
    },
    backup: {
      autoBackup: true,
      backupFrequency: 'daily',
      backupRetention: 30
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'users', label: 'User Management', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'backup', label: 'Backup & Data', icon: Database },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ];

  const handleSaveSettings = (section) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully`,
    });
  };

  const handleUpdateSetting = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <input
            type="text"
            value={settings.general.companyName}
            onChange={(e) => handleUpdateSetting('general', 'companyName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Email</label>
          <input
            type="email"
            value={settings.general.companyEmail}
            onChange={(e) => handleUpdateSetting('general', 'companyEmail', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Phone</label>
          <input
            type="tel"
            value={settings.general.companyPhone}
            onChange={(e) => handleUpdateSetting('general', 'companyPhone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Timezone</label>
          <select
            value={settings.general.timezone}
            onChange={(e) => handleUpdateSetting('general', 'timezone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Company Address</label>
        <textarea
          value={settings.general.companyAddress}
          onChange={(e) => handleUpdateSetting('general', 'companyAddress', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <Button 
        onClick={() => handleSaveSettings('General')}
        className="bg-green-600 hover:bg-green-700"
      >
        <Save className="h-4 w-4 mr-2" />
        Save General Settings
      </Button>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.security.twoFactorAuth}
              onChange={(e) => handleUpdateSetting('security', 'twoFactorAuth', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password Policy</label>
          <select
            value={settings.security.passwordPolicy}
            onChange={(e) => handleUpdateSetting('security', 'passwordPolicy', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="low">Low - 6 characters minimum</option>
            <option value="medium">Medium - 8 characters with numbers</option>
            <option value="high">High - 12 characters with special chars</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Session Timeout (minutes)</label>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) => handleUpdateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Max Login Attempts</label>
            <input
              type="number"
              value={settings.security.loginAttempts}
              onChange={(e) => handleUpdateSetting('security', 'loginAttempts', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <Button 
        onClick={() => handleSaveSettings('Security')}
        className="bg-green-600 hover:bg-green-700"
      >
        <Save className="h-4 w-4 mr-2" />
        Save Security Settings
      </Button>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {[
          { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
          { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
          { key: 'pushNotifications', label: 'Push Notifications', desc: 'Receive browser push notifications' },
          { key: 'leadNotifications', label: 'Lead Notifications', desc: 'Get notified about new leads' },
          { key: 'ticketNotifications', label: 'Ticket Notifications', desc: 'Get notified about ticket updates' }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications[item.key]}
                onChange={(e) => handleUpdateSetting('notifications', item.key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        ))}
      </div>
      <Button 
        onClick={() => handleSaveSettings('Notifications')}
        className="bg-green-600 hover:bg-green-700"
      >
        <Save className="h-4 w-4 mr-2" />
        Save Notification Settings
      </Button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'security':
        return renderSecuritySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'users':
        return (
          <div className="text-center py-8">
            <User className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">User Management</h3>
            <p className="text-gray-500 mb-4">Manage users from the dedicated Users section</p>
            <Button className="bg-green-600 hover:bg-green-700">
              Go to User Management
            </Button>
          </div>
        );
      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Theme</label>
              <select
                value={settings.appearance.theme}
                onChange={(e) => handleUpdateSetting('appearance', 'theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Primary Color</label>
              <div className="flex gap-3">
                {['green', 'blue', 'purple', 'red'].map(color => (
                  <button
                    key={color}
                    onClick={() => handleUpdateSetting('appearance', 'primaryColor', color)}
                    className={`w-8 h-8 rounded-full bg-${color}-600 ${
                      settings.appearance.primaryColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            <Button 
              onClick={() => handleSaveSettings('Appearance')}
              className="bg-green-600 hover:bg-green-700"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Appearance Settings
            </Button>
          </div>
        );
      default:
        return (
          <div className="text-center py-8">
            <SettingsIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
            <p className="text-gray-500">This section is under development</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your application settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-green-50 border-r-2 border-green-600 text-green-700' 
                      : 'text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {tabs.find(t => t.id === activeTab)?.icon && (
                <tabs.find(t => t.id === activeTab).icon className="h-5 w-5" />
              )}
              {tabs.find(t => t.id === activeTab)?.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsContent;
