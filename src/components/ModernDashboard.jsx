
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, Calendar, TrendingUp, Users, DollarSign, Clock, MapPin, User, Bell, Home, Grid3X3, FileText, MessageSquare, BarChart3, Settings } from 'lucide-react';

const ModernDashboard = ({ userRole, userName }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Department-specific data based on user role
  const getDepartmentData = () => {
    switch (userRole) {
      case 'super-admin':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Weekly Balance', value: '$120k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '💰' },
            { title: 'Orders In Line', value: '2,450', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '📦' },
            { title: 'New Clients', value: '350', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '👥' }
          ],
          salesData: {
            current: '$50k',
            previous: '$40k',
            growth: '+25%'
          },
          analytics: {
            totalIntake: '2500k',
            newCustomers: '12k +5%',
            totalRevenue: '180k',
            onlineVisitors: '35k',
            offlineVisitors: '12k'
          }
        };
      case 'head-admin':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Team Revenue', value: '$85k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '💼' },
            { title: 'Active Projects', value: '1,200', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '📋' },
            { title: 'Team Members', value: '125', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '👨‍💼' }
          ],
          salesData: {
            current: '$35k',
            previous: '$28k',
            growth: '+20%'
          },
          analytics: {
            totalIntake: '1800k',
            newCustomers: '8k +3%',
            totalRevenue: '120k',
            onlineVisitors: '28k',
            offlineVisitors: '9k'
          }
        };
      case 'team-leader':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Team Sales', value: '$45k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '📊' },
            { title: 'Tasks Completed', value: '650', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '✅' },
            { title: 'Active Members', value: '85', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '👥' }
          ],
          salesData: {
            current: '$25k',
            previous: '$20k',
            growth: '+18%'
          },
          analytics: {
            totalIntake: '850k',
            newCustomers: '5k +2%',
            totalRevenue: '75k',
            onlineVisitors: '18k',
            offlineVisitors: '6k'
          }
        };
      case 'hr-manager':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Monthly Payroll', value: '$458k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '💳' },
            { title: 'Employees Present', value: '198', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '👔' },
            { title: 'Total Staff', value: '247', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '👥' }
          ],
          salesData: {
            current: '80%',
            previous: '75%',
            growth: '+5%'
          },
          analytics: {
            totalIntake: '247 Employees',
            newCustomers: '12 New Hires',
            totalRevenue: '$458k Payroll',
            onlineVisitors: '198 Present',
            offlineVisitors: '49 Absent'
          }
        };
      case 'hr-assistant':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Leave Requests', value: '24', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '📅' },
            { title: 'Attendance Rate', value: '92%', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '⏰' },
            { title: 'New Joiners', value: '8', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '🆕' }
          ],
          salesData: {
            current: '92%',
            previous: '88%',
            growth: '+4%'
          },
          analytics: {
            totalIntake: '180 Active',
            newCustomers: '8 New Staff',
            totalRevenue: '92% Attendance',
            onlineVisitors: '24 Requests',
            offlineVisitors: '16 Processed'
          }
        };
      case 'payroll-admin':
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'Total Payroll', value: '$458k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '💰' },
            { title: 'Processed', value: '235', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '✓' },
            { title: 'Pending', value: '12', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '⏳' }
          ],
          salesData: {
            current: '$458k',
            previous: '$435k',
            growth: '+5.3%'
          },
          analytics: {
            totalIntake: '$458k Total',
            newCustomers: '235 Processed',
            totalRevenue: '$23k Increase',
            onlineVisitors: '95% Complete',
            offlineVisitors: '12 Pending'
          }
        };
      default:
        return {
          greeting: `Hello, ${userName}`,
          mainCards: [
            { title: 'My Sales', value: '$12k', color: 'bg-gradient-to-r from-emerald-400 to-cyan-400', illustration: '💼' },
            { title: 'Tasks Done', value: '28', color: 'bg-gradient-to-r from-yellow-400 to-orange-400', illustration: '✅' },
            { title: 'Clients', value: '15', color: 'bg-gradient-to-r from-purple-400 to-pink-400', illustration: '🤝' }
          ],
          salesData: {
            current: '$12k',
            previous: '$9k',
            growth: '+33%'
          },
          analytics: {
            totalIntake: '45 Tasks',
            newCustomers: '3 New Clients',
            totalRevenue: '$12k Sales',
            onlineVisitors: '28 Completed',
            offlineVisitors: '17 Pending'
          }
        };
    }
  };

  const data = getDepartmentData();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-gray-900 flex flex-col items-center py-6 space-y-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
        </div>
        
        {[Home, Grid3X3, FileText, MessageSquare, BarChart3, User, Settings].map((Icon, index) => (
          <button key={index} className={`p-3 rounded-xl transition-colors ${index === 0 ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-white hover:bg-gray-800'}`}>
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-20">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white w-80 rounded-xl"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-2xl font-bold text-white italic">Dashboard</span>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-white text-sm font-medium">{userName}</p>
                <p className="text-gray-400 text-xs">{userName.toLowerCase().replace(' ', '')}@gmail.com</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{userName.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 text-white space-y-6">
          {/* Greeting */}
          <h1 className="text-3xl font-bold">{data.greeting}</h1>

          {/* Main Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.mainCards.map((card, index) => (
              <Card key={index} className="bg-transparent border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${card.color} p-6 rounded-2xl relative overflow-hidden`}>
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <p className="text-black text-sm font-medium mb-2">{card.title}</p>
                        <p className="text-black text-3xl font-bold mb-3">{card.value}</p>
                        <button className="text-black text-xs underline font-medium">View entire list</button>
                      </div>
                      <div className="text-4xl opacity-80">
                        {card.illustration}
                      </div>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -right-2 top-4 grid grid-cols-3 gap-1">
                      {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-black opacity-20 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Analytics Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Sales Chart */}
            <div className="xl:col-span-2 space-y-6">
              <Card className="bg-gray-800 border-gray-700 rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Sales</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white rounded-lg">
                      2022
                    </Button>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center relative">
                    {/* Simulated chart area */}
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-end justify-center space-x-8 p-6">
                      {/* Chart lines simulation */}
                      <div className="flex items-end space-x-2 h-full">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="h-20 w-1 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-400">Toys</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="h-32 w-1 bg-gray-600 rounded-full border-dashed border-gray-500"></div>
                          <span className="text-xs text-gray-400">Animal Care</span>
                        </div>
                      </div>
                      {/* Character illustration placeholder */}
                      <div className="absolute right-8 bottom-8 w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Sales Bar Chart */}
              <Card className="bg-gray-800 border-gray-700 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between h-32 space-x-4">
                    {[
                      { day: 'Mon', height: 'h-20', color: 'bg-orange-500' },
                      { day: 'Tue', height: 'h-16', color: 'bg-pink-500' },
                      { day: 'Wed', height: 'h-12', color: 'bg-yellow-500' },
                      { day: 'Thu', height: 'h-24', color: 'bg-green-500' },
                      { day: 'Fri', height: 'h-28', color: 'bg-red-500' },
                      { day: 'Sat', height: 'h-14', color: 'bg-gray-500' }
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center space-y-2 flex-1">
                        <div className="text-xs text-white bg-gray-700 px-2 py-1 rounded">$10k</div>
                        <div className={`w-full ${bar.height} ${bar.color} rounded-t-lg`}></div>
                        <span className="text-xs text-gray-400">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Platform Distribution */}
              <Card className="bg-gray-800 border-gray-700 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-sm">petshop.com</CardTitle>
                  <div className="text-xs text-gray-400">Today</div>
                </CardHeader>
                <CardContent>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Pie chart simulation */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 via-yellow-500 via-blue-500 to-green-500"></div>
                    <div className="absolute inset-4 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-400">Facebook</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-400">Youtube</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-gray-400">Instagram</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400">Website</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="bg-gray-800 border-gray-700 rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white">Calendar</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Feb 2023</span>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">View</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="p-2 text-gray-400 font-medium">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 2; // Start from -2 to show previous month days
                      return (
                        <div key={i} className={`p-2 rounded hover:bg-gray-700 cursor-pointer text-xs ${
                          day === 5 ? 'bg-yellow-500 text-black font-bold' : 
                          day > 0 && day <= 28 ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {day > 0 && day <= 28 ? day : day <= 0 ? 28 + day : day - 28}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Analytics */}
              <Card className="bg-gray-800 border-gray-700 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Total Intake</span>
                    <span className="text-white font-bold">{data.analytics.totalIntake}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">New Customers</span>
                    <span className="text-green-400 font-bold text-sm">{data.analytics.newCustomers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Repeat Customers</span>
                    <span className="text-white font-bold">1.5k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Total Revenue</span>
                    <span className="text-white font-bold">{data.analytics.totalRevenue}</span>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Online Visitors</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{data.analytics.onlineVisitors}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Offline Visitors</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{data.analytics.offlineVisitors}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Customer Details Table */}
          <Card className="bg-gray-800 border-gray-700 rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Customer Details</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                  Filter
                </Button>
                <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 text-left">
                      <th className="text-gray-400 py-3 text-sm">Id</th>
                      <th className="text-gray-400 py-3 text-sm">Customer</th>
                      <th className="text-gray-400 py-3 text-sm">Date</th>
                      <th className="text-gray-400 py-3 text-sm">Invoiced Amount</th>
                      <th className="text-gray-400 py-3 text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'RZ17308', customer: 'Principets', date: '13/01/2022', amount: '$ 54,000', status: 'Shipped', statusColor: 'bg-blue-500' },
                      { id: 'RZ6308', customer: 'Adom.com', date: '13/01/2022', amount: '$ 86,050', status: 'Delivered', statusColor: 'bg-green-500' },
                      { id: 'RZ8765', customer: 'Charles Tea', date: '13/01/2022', amount: '$ 4,000', status: 'Paid', statusColor: 'bg-yellow-500' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-800">
                        <td className="py-4 text-white text-sm">{row.id}</td>
                        <td className="py-4 text-white text-sm">{row.customer}</td>
                        <td className="py-4 text-gray-400 text-sm">{row.date}</td>
                        <td className="py-4 text-white font-medium text-sm">{row.amount}</td>
                        <td className="py-4">
                          <Badge className={`${row.statusColor} text-white text-xs px-3 py-1`}>
                            {row.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;
