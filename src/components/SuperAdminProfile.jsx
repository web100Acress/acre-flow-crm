import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Shield, 
  UserPlus, 
  Building2, 
  Users, 
  Ticket, 
  Crown,
  Settings,
  TrendingUp,
  Activity,
  DollarSign,
  BarChart3,
  Zap,
  Globe,
  Star,
  ChevronRight,
  Eye,
  Plus
} from 'lucide-react';
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
    { 
      title: 'Total Users', 
      value: '147', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      change: '+12%',
      changeType: 'positive'
    },
    { 
      title: 'Active Leads', 
      value: '1,234', 
      icon: Building2, 
      color: 'from-emerald-500 to-emerald-600',
      change: '+8%',
      changeType: 'positive'
    },
    { 
      title: 'Open Tickets', 
      value: '89', 
      icon: Ticket, 
      color: 'from-orange-500 to-orange-600',
      change: '-5%',
      changeType: 'negative'
    },
    { 
      title: 'Revenue', 
      value: '₹45.2L', 
      icon: DollarSign, 
      color: 'from-purple-500 to-purple-600',
      change: '+18%',
      changeType: 'positive'
    }
  ];

  const quickActions = [
    {
      title: 'Create Head Admin',
      description: 'Add new head administrator to your organization',
      icon: Crown,
      action: () => navigate('/create-admin'),
      color: 'from-yellow-400 to-yellow-500',
      featured: true
    },
    {
      title: 'Manage All Leads',
      description: 'View and manage all leads across teams',
      icon: Building2,
      action: () => navigate('/leads'),
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Support Tickets',
      description: 'Monitor and resolve support tickets',
      icon: Ticket,
      action: () => navigate('/tickets'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'User Management',
      description: 'Manage users, roles and permissions',
      icon: Users,
      action: () => navigate('/users'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences and security',
      icon: Settings,
      action: () => navigate('/settings'),
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: 'Analytics Dashboard',
      description: 'View detailed analytics and reports',
      icon: BarChart3,
      action: () => navigate('/analytics'),
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const recentActivities = [
    { action: 'New user registered', user: 'John Doe', time: '2 minutes ago', type: 'user' },
    { action: 'Lead converted to sale', user: 'Sarah Khan', time: '15 minutes ago', type: 'sale' },
    { action: 'Ticket resolved', user: 'Mike Davis', time: '1 hour ago', type: 'ticket' },
    { action: 'System backup completed', user: 'System', time: '2 hours ago', type: 'system' }
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 rounded-2xl p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 flex justify-between items-start">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">100acres.com</h1>
                <p className="text-xl text-emerald-100 font-medium">Super Admin Control Center</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-emerald-100">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span className="text-sm">System Status: Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>
          
          {/* Profile and Permissions Popovers */}
          <div className="flex items-center space-x-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                  <User className="h-6 w-6 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{superAdminData.name}</h3>
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        {superAdminData.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span>{superAdminData.company}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{superAdminData.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{superAdminData.phone}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                  <Shield className="h-6 w-6 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    System Permissions
                  </h4>
                  <div className="space-y-2">
                    {superAdminData.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-emerald-50 rounded-lg text-xs">
                        <Star className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-800">{permission}</span>
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
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>

          {/* Featured Action */}
          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-8 relative">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg">
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs font-medium">
                      Featured Action
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Create Head Admin</h3>
                    <p className="text-gray-600 mt-1">Expand your administrative team with new head administrators</p>
                  </div>
                  <Button 
                    onClick={() => navigate('/create-admin')} 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.slice(1).map((action, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md" onClick={action.action}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} w-fit shadow-md`}>
                        <action.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">{action.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center">
                <Activity className="h-5 w-5 mr-2 text-emerald-600" />
                Live Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'sale' ? 'bg-emerald-500' :
                    activity.type === 'ticket' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4" size="sm">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center">
                <Zap className="h-5 w-5 mr-2 text-emerald-600" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <Badge className="bg-emerald-100 text-emerald-800 text-xs">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <Badge className="bg-emerald-100 text-emerald-800 text-xs">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Response</span>
                  <Badge className="bg-emerald-100 text-emerald-800 text-xs">Fast</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Backup</span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;