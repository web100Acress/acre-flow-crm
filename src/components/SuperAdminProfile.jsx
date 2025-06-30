
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Building2, Users, Ticket } from 'lucide-react';
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
      {/* Compact Header with Profile and Permissions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">100acres.com</h1>
            <p className="text-sm text-gray-600">Super Admin Control Panel</p>
          </div>
        </div>
        
        {/* Compact Profile and Permissions */}
        <div className="flex items-center space-x-3">
          {/* Profile Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <User className="h-4 w-4 text-white" />
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
              <button className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Shield className="h-4 w-4 text-white" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64" align="end">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">System Permissions</h4>
                <div className="space-y-1">
                  {superAdminData.permissions.map((permission, index) => (
                    <div key={index} className="flex items-center space-x-2 p-1 bg-green-50 rounded text-xs">
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

      {/* Compact Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg bg-gray-50`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Quick Actions */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Manage your organization efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary Action - Create Head Admin */}
            <div className="md:col-span-2">
              <Button 
                onClick={() => navigate('/create-admin')} 
                className="flex items-center bg-green-600 hover:bg-green-700 w-full h-12 text-base font-medium"
              >
                <UserPlus className="h-5 w-5 mr-3" />
                Create Head Admin
              </Button>
            </div>
            
            {/* Secondary Actions */}
            <Button 
              variant="outline" 
              onClick={() => navigate('/leads')} 
              className="h-11 font-medium hover:bg-green-50 hover:border-green-300"
            >
              <Building2 className="h-4 w-4 mr-2" />
              View All Leads
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/tickets')} 
              className="h-11 font-medium hover:bg-blue-50 hover:border-blue-300"
            >
              <Ticket className="h-4 w-4 mr-2" />
              View All Tickets
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/users')} 
              className="h-11 font-medium hover:bg-purple-50 hover:border-purple-300"
            >
              <Users className="h-4 w-4 mr-2" />
              Manage Users
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/settings')} 
              className="h-11 font-medium hover:bg-gray-50 hover:border-gray-400"
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
