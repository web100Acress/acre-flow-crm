
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Building2, Users, Ticket, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperAdminProfile = ({ onCreateAdmin }) => {
  const navigate = useNavigate();

  const superAdminData = {
    name: localStorage.getItem('userName') || 'Super Administrator',
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

  const statsData = [
    { title: 'Total Users', value: '147', icon: Users, color: 'text-blue-600' },
    { title: 'Active Leads', value: '1,234', icon: Building2, color: 'text-green-600' },
    { title: 'Open Tickets', value: '89', icon: Ticket, color: 'text-orange-600' },
    { title: 'System Health', value: '99.9%', icon: Shield, color: 'text-emerald-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">100acres.com</h1>
              <p className="text-lg text-gray-600 font-medium">Super Admin Control Panel</p>
            </div>
          </div>
          
          {/* Profile and Permissions Icons */}
          <div className="flex items-center space-x-3">
            {/* Profile Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <User className="h-5 w-5 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{superAdminData.name}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        {superAdminData.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-3 w-3 text-gray-500" />
                      <span>{superAdminData.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-gray-500" />
                      <span>{superAdminData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <span>{superAdminData.phone}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Permissions Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Shield className="h-5 w-5 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64" align="end">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">System Permissions</h4>
                  <div className="space-y-1">
                    {superAdminData.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-green-50 rounded-md text-xs">
                        <Shield className="h-3 w-3 text-green-600" />
                        <span className="text-green-800">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 border-0 shadow-md">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gray-50`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Quick Actions */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
          <CardTitle className="text-xl flex items-center">
            <Crown className="h-5 w-5 mr-2 text-yellow-600" />
            Administrative Actions
          </CardTitle>
          <CardDescription className="text-base">Manage your organization with powerful administrative tools</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Action - Enhanced Create Head Admin */}
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
            
            {/* Secondary Actions Grid */}
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
              <Shield className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminProfile;
