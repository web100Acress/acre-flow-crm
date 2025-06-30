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
  TrendingUp,
  Activity,
  Zap,
  Star,
  Heart,
  Sparkles,
  Rocket,
  Target,
  Award,
  BarChart3,
  PieChart,
  Settings,
  Bell,
  CheckCircle,
  AlertTriangle,
  Clock,
  Database,
  Globe,
  Wifi
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
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      change: '+12%',
      changeType: 'positive'
    },
    { 
      title: 'Active Leads', 
      value: '1,234', 
      icon: Building2, 
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      change: '+8%',
      changeType: 'positive'
    },
    { 
      title: 'Open Tickets', 
      value: '89', 
      icon: Ticket, 
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      change: '-5%',
      changeType: 'negative'
    },
    { 
      title: 'Revenue', 
      value: '₹45.2L', 
      icon: TrendingUp, 
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      change: '+18%',
      changeType: 'positive'
    }
  ];

  const quickActions = [
    {
      title: 'Create Head Admin',
      description: 'Add new administrative users',
      icon: Crown,
      gradient: 'from-yellow-400 to-orange-500',
      action: () => navigate('/create-admin'),
      featured: true
    },
    {
      title: 'Manage Leads',
      description: 'View and organize leads',
      icon: Target,
      gradient: 'from-blue-400 to-purple-500',
      action: () => navigate('/leads')
    },
    {
      title: 'Support Tickets',
      description: 'Handle customer support',
      icon: Heart,
      gradient: 'from-pink-400 to-red-500',
      action: () => navigate('/tickets')
    },
    {
      title: 'User Management',
      description: 'Manage team members',
      icon: Users,
      gradient: 'from-green-400 to-blue-500',
      action: () => navigate('/users')
    },
    {
      title: 'Analytics',
      description: 'View detailed reports',
      icon: BarChart3,
      gradient: 'from-indigo-400 to-purple-500',
      action: () => navigate('/analytics')
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      gradient: 'from-gray-400 to-gray-600',
      action: () => navigate('/settings')
    }
  ];

  const recentActivities = [
    { 
      action: 'New user registered', 
      user: 'John Doe', 
      time: '2 minutes ago',
      type: 'user',
      color: 'bg-green-100 text-green-800'
    },
    { 
      action: 'Lead converted to sale', 
      user: 'Sarah Smith', 
      time: '15 minutes ago',
      type: 'sale',
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      action: 'Support ticket resolved', 
      user: 'Mike Johnson', 
      time: '1 hour ago',
      type: 'support',
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      action: 'System backup completed', 
      user: 'System', 
      time: '2 hours ago',
      type: 'system',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const systemHealth = [
    { name: 'Server Status', status: 'Excellent', color: 'bg-green-500', percentage: 99 },
    { name: 'Database', status: 'Good', color: 'bg-blue-500', percentage: 95 },
    { name: 'API Response', status: 'Great', color: 'bg-purple-500', percentage: 97 },
    { name: 'Storage', status: 'Normal', color: 'bg-yellow-500', percentage: 78 }
  ];

  return (
    <div className="space-y-8">
      {/* Colorful Header with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">100acres.com</h1>
              <p className="text-xl text-purple-100 font-medium">Super Admin Control Center</p>
              <div className="flex items-center mt-2 space-x-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium Account
                </Badge>
                <Badge className="bg-green-500/20 text-green-100 border-green-400/30">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  All Systems Online
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Interactive Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="relative w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 group">
                  <Bell className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold">3</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-blue-600" />
                    Recent Notifications
                  </h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium">New lead assigned</p>
                      <p className="text-xs text-gray-600">2 minutes ago</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium">System backup completed</p>
                      <p className="text-xs text-gray-600">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Profile */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{superAdminData.name}</h3>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                        {superAdminData.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span>{superAdminData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4 text-green-500" />
                      <span>{superAdminData.phone}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Colorful Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
            <CardContent className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <Badge className={`${stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions - Enhanced */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Rocket className="h-6 w-6 mr-3 text-blue-600" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-base">Manage your organization with powerful tools</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Featured Action */}
              <div className="mb-6">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 shadow-xl">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Crown className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Create Head Admin</h3>
                          <p className="text-orange-100">Expand your administrative team</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate('/create-admin')}
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        Create Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.slice(1).map((action, index) => (
                  <Button
                    key={index}
                    onClick={action.action}
                    variant="outline"
                    className="h-20 p-4 border-2 hover:border-transparent hover:shadow-lg transition-all duration-300 group"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, transparent 100%)`,
                    }}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${action.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">{action.title}</p>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed & System Health */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-green-600" />
                Live Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                    </div>
                    <Badge className={activity.color}>
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 hover:bg-blue-50">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-lg">
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-purple-600" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {systemHealth.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <Badge className="bg-gray-100 text-gray-800">{item.status}</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-800 font-medium">All systems operational</span>
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