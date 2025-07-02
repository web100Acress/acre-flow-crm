
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Building2, Users, Ticket, Crown, Camera, Edit3, TrendingUp, Activity, BarChart3, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperAdminProfile = ({ onCreateAdmin }) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Super Administrator');
  const [isEditingName, setIsEditingName] = useState(false);

  const superAdminData = {
    name: userName,
    email: localStorage.getItem('userEmail') || 'superadmin@100acres.com',
    phone: '+91 9876543210',
    role: 'Super Admin',
    company: '100acres.com',
    joinDate: '2024-01-01',
    permissions: [
      'Full System Access',
      'Create Head Admins',
      'Manage All Users',
      'View All Reports',
      'System Configuration',
      'Access All Data'
    ]
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (newName) => {
    setUserName(newName);
    localStorage.setItem('userName', newName);
    setIsEditingName(false);
  };

  const statsData = [
    { title: 'Total Users', value: '147', change: '+12%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Active Leads', value: '1,234', change: '+18%', icon: Building2, color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Open Tickets', value: '89', change: '-5%', icon: Ticket, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'System Health', value: '99.9%', change: '+0.1%', icon: Shield, color: 'text-emerald-600', bgColor: 'bg-emerald-50' }
  ];

  const activityData = [
    { action: 'New Head Admin Created', time: '2 hours ago', type: 'success' },
    { action: 'System Backup Completed', time: '4 hours ago', type: 'info' },
    { action: 'Security Alert Resolved', time: '6 hours ago', type: 'warning' },
    { action: 'Monthly Report Generated', time: '1 day ago', type: 'info' }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Logo */}
      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-6 rounded-xl border border-green-200 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Company Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src="https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/100acre/logo/logo.webp" 
                alt="100acres.com" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg" style={{ display: 'none' }}>
                <Building2 className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                100acres.com
              </h1>
              <p className="text-lg text-gray-600 font-medium">Super Admin Control Panel</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">System Online</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Activity Indicator */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2">
                <Activity className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Live Activity</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Profile Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="relative group">
                  <Avatar className="w-12 h-12 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                    <AvatarImage src={profileImage} alt={superAdminData.name} />
                    <AvatarFallback className="bg-gradient-to-br from-green-600 to-green-700 text-white font-semibold">
                      {superAdminData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={profileImage} alt={superAdminData.name} />
                        <AvatarFallback className="bg-green-600 text-white">
                          {superAdminData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <label className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                        <Camera className="h-3 w-3 text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      {isEditingName ? (
                        <input
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          onBlur={() => handleNameChange(userName)}
                          onKeyPress={(e) => e.key === 'Enter' && handleNameChange(userName)}
                          className="text-base font-semibold bg-transparent border-b border-gray-300 focus:border-green-600 outline-none"
                          autoFocus
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-base">{superAdminData.name}</h3>
                          <button onClick={() => setIsEditingName(true)}>
                            <Edit3 className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                          </button>
                        </div>
                      )}
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs mt-1">
                        <Crown className="h-3 w-3 mr-1" />
                        {superAdminData.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-3 w-3 text-gray-500" />
                      <span className="font-medium">{superAdminData.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-gray-500" />
                      <span>{superAdminData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <span>{superAdminData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3 text-gray-500" />
                      <span>Joined {superAdminData.joinDate}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Permissions Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Shield className="h-5 w-5 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold text-sm">System Permissions</h4>
                  </div>
                  <div className="space-y-2">
                    {superAdminData.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-md text-xs border border-green-200">
                        <Shield className="h-3 w-3 text-green-600" />
                        <span className="text-green-800 font-medium">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid with Animations */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor} shadow-inner`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions and Activity Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Enhanced Quick Actions */}
        <div className="xl:col-span-2">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
              <CardTitle className="text-xl flex items-center">
                <Crown className="h-5 w-5 mr-2 text-yellow-600" />
                Administrative Actions
              </CardTitle>
              <CardDescription className="text-base">Manage your organization with powerful administrative tools</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Primary Action */}
                <div className="md:col-span-2">
                  <Button 
                    onClick={() => navigate('/create-admin')} 
                    className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <Crown className="h-6 w-6 mr-3 text-yellow-300" />
                    Create Head Admin
                    <UserPlus className="h-5 w-5 ml-3" />
                  </Button>
                </div>
                
                {/* Secondary Actions */}
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/leads')} 
                  className="h-12 font-medium hover:bg-green-50 hover:border-green-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Manage All Leads
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/tickets')} 
                  className="h-12 font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Ticket className="h-4 w-4 mr-2" />
                  Support Tickets
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/users')} 
                  className="h-12 font-medium hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Users className="h-4 w-4 mr-2" />
                  User Management
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/settings')} 
                  className="h-12 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest system activities</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="space-y-4">
              {activityData.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status Bar */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Performance: Excellent</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminProfile;
