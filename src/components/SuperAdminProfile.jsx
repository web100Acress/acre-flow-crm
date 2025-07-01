
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Building2, Users, Ticket, Crown, Sparkles, TrendingUp } from 'lucide-react';
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
    { title: 'Total Users', value: '147', icon: Users, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Leads', value: '1,234', icon: Building2, color: 'from-green-500 to-green-600', bg: 'bg-green-50' },
    { title: 'Open Tickets', value: '89', icon: Ticket, color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50' },
    { title: 'System Health', value: '99.9%', icon: Shield, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50' }
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-8 rounded-3xl border border-slate-200/60 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl flex items-center justify-center shadow-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <Crown className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                100acres.com
              </h1>
              <p className="text-xl text-slate-600 font-semibold mt-1">Super Admin Control Panel</p>
              <div className="flex items-center mt-2">
                <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-slate-500 font-medium">Premium Enterprise Dashboard</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile and Permissions Icons */}
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <button className="group relative w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <User className="h-6 w-6 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white/95 backdrop-blur-md border-slate-200/60" align="end">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-md">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{superAdminData.name}</h3>
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold shadow-md">
                        {superAdminData.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <Building2 className="h-4 w-4 text-slate-500" />
                      <span className="font-medium">{superAdminData.company}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <Mail className="h-4 w-4 text-slate-500" />
                      <span>{superAdminData.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <Phone className="h-4 w-4 text-slate-500" />
                      <span>{superAdminData.phone}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <button className="group relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <Shield className="h-6 w-6 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72 bg-white/95 backdrop-blur-md border-slate-200/60" align="end">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-200">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-lg text-slate-900">System Permissions</h4>
                  </div>
                  <div className="space-y-2">
                    {superAdminData.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200/50 transition-all duration-200 hover:shadow-sm">
                        <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-800">{permission}</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200/60 shadow-lg group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-600 mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 mb-3">{stat.value}</p>
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                    <span className="text-xs font-semibold text-green-600">+12% this month</span>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Quick Actions */}
      <Card className="shadow-xl border-slate-200/60 bg-white/80 backdrop-blur-md">
        <CardHeader className="pb-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-t-2xl border-b border-slate-200">
          <CardTitle className="text-2xl flex items-center">
            <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 mr-3 shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
            Administrative Actions
          </CardTitle>
          <CardDescription className="text-lg text-slate-600">Manage your organization with powerful administrative tools</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Action - Enhanced Create Head Admin */}
            <div className="md:col-span-2">
              <Button 
                onClick={() => navigate('/create-admin')} 
                className="group flex items-center justify-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 w-full h-16 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Crown className="h-7 w-7 mr-4 text-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
                Create Head Admin
                <UserPlus className="h-6 w-6 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Secondary Actions Grid */}
            <Button 
              variant="outline" 
              onClick={() => navigate('/leads')} 
              className="h-14 font-semibold text-base hover:bg-green-50 hover:border-green-300 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl group border-2"
            >
              <Building2 className="h-5 w-5 mr-3 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              Manage All Leads
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/tickets')} 
              className="h-14 font-semibold text-base hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl group border-2"
            >
              <Ticket className="h-5 w-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              Support Tickets
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/users')} 
              className="h-14 font-semibold text-base hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl group border-2"
            >
              <Users className="h-5 w-5 mr-3 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              User Management
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/settings')} 
              className="h-14 font-semibold text-base hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl group border-2"
            >
              <Shield className="h-5 w-5 mr-3 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
              System Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminProfile;
