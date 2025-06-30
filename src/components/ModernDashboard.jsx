
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, Calendar, TrendingUp, Users, DollarSign, Clock, MapPin, User, Bell } from 'lucide-react';

const ModernDashboard = ({ userRole, userName }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Role-specific dashboard data
  const getDashboardData = () => {
    switch (userRole) {
      case 'super-admin':
        return {
          greeting: `Hello, ${userName}`,
          stats: [
            { title: 'Total Revenue', value: '$120k', color: 'bg-gradient-to-r from-green-400 to-green-600', icon: DollarSign, trend: '+12%' },
            { title: 'Active Users', value: '2.5k', color: 'bg-gradient-to-r from-yellow-400 to-orange-500', icon: Users, trend: '+8%' },
            { title: 'New Leads', value: '450', color: 'bg-gradient-to-r from-purple-400 to-pink-500', icon: TrendingUp, trend: '+15%' }
          ],
          charts: [
            { title: 'Sales Analytics', type: 'line' },
            { title: 'User Growth', type: 'bar' }
          ]
        };
      case 'head-admin':
        return {
          greeting: `Hello, ${userName}`,
          stats: [
            { title: 'Team Revenue', value: '$85k', color: 'bg-gradient-to-r from-blue-400 to-blue-600', icon: DollarSign, trend: '+10%' },
            { title: 'Team Members', value: '25', color: 'bg-gradient-to-r from-green-400 to-green-600', icon: Users, trend: '+2' },
            { title: 'Completed Tasks', value: '180', color: 'bg-gradient-to-r from-purple-400 to-purple-600', icon: TrendingUp, trend: '+20%' }
          ],
          charts: [
            { title: 'Team Performance', type: 'line' },
            { title: 'Task Completion', type: 'bar' }
          ]
        };
      case 'team-leader':
        return {
          greeting: `Hello, ${userName}`,
          stats: [
            { title: 'Team Sales', value: '$45k', color: 'bg-gradient-to-r from-indigo-400 to-indigo-600', icon: DollarSign, trend: '+7%' },
            { title: 'Active Members', value: '12', color: 'bg-gradient-to-r from-teal-400 to-teal-600', icon: Users, trend: '+1' },
            { title: 'This Month', value: '95', color: 'bg-gradient-to-r from-pink-400 to-pink-600', icon: TrendingUp, trend: '+18%' }
          ],
          charts: [
            { title: 'Team Analytics', type: 'line' },
            { title: 'Monthly Progress', type: 'bar' }
          ]
        };
      default:
        return {
          greeting: `Hello, ${userName}`,
          stats: [
            { title: 'My Sales', value: '$12k', color: 'bg-gradient-to-r from-cyan-400 to-cyan-600', icon: DollarSign, trend: '+5%' },
            { title: 'Tasks Done', value: '28', color: 'bg-gradient-to-r from-lime-400 to-lime-600', icon: TrendingUp, trend: '+3' },
            { title: 'Clients', value: '15', color: 'bg-gradient-to-r from-rose-400 to-rose-600', icon: Users, trend: '+2' }
          ],
          charts: [
            { title: 'My Performance', type: 'line' },
            { title: 'Weekly Progress', type: 'bar' }
          ]
        };
    }
  };

  const dashboardData = getDashboardData();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white w-80"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dashboard
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">{userName}</span>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Greeting */}
        <h1 className="text-3xl font-bold mb-8">{dashboardData.greeting}</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {dashboardData.stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className={`${stat.color} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-white text-sm font-medium opacity-90">{stat.title}</p>
                      <p className="text-white text-3xl font-bold mt-2">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                          {stat.trend}
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Decorative illustration placeholder */}
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Data Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Sales Chart */}
          <div className="xl:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Sales Analytics</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024
                  </Button>
                  <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-900 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-400">Sales chart visualization</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive chart will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="p-2 text-gray-400 font-medium">{day}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i} className={`p-2 rounded hover:bg-gray-700 cursor-pointer ${
                      i === 14 ? 'bg-blue-600 text-white' : 'text-gray-300'
                    }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Panel */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Intake</span>
                  <span className="text-white font-bold">1500k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">New Customers</span>
                  <span className="text-green-400 font-bold">7k +1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Revenue</span>
                  <span className="text-white font-bold">130k</span>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Online Visitors</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">20k</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Offline Visitors</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">7k</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Sales and Customer Details */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          {/* Weekly Sales */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Weekly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-40 space-x-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                  <div key={day} className="flex flex-col items-center space-y-2">
                    <div 
                      className={`w-8 rounded-t-lg ${
                        ['bg-orange-500', 'bg-pink-500', 'bg-yellow-500', 'bg-green-500', 'bg-red-500', 'bg-gray-500'][i]
                      }`}
                      style={{ height: `${Math.random() * 80 + 40}px` }}
                    ></div>
                    <span className="text-xs text-gray-400">{day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Customer Details</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: 'RZ17308', customer: 'Prancipets', date: '13/01/2022', amount: '$4,000', status: 'Shipped' },
                  { id: 'RZ6308', customer: 'Adom.com', date: '13/01/2022', amount: '$6,050', status: 'Delivered' },
                  { id: 'RZ8765', customer: 'Charles Tea', date: '13/01/2022', amount: '$4,000', status: 'Paid' }
                ].map((customer, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                    <div className="flex-1">
                      <div className="text-white font-medium">{customer.customer}</div>
                      <div className="text-gray-400 text-sm">{customer.id}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{customer.date}</div>
                    <div className="text-white font-medium">{customer.amount}</div>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        customer.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                        customer.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {customer.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;
