
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Clock, 
  DollarSign, 
  Calendar, 
  UserCheck, 
  UserX, 
  Search,
  Download,
  TrendingUp,
  Award,
  AlertCircle
} from 'lucide-react';

const HRDashboard = ({ userRole, userName }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample HR data
  const hrStats = [
    { title: 'Total Employees', value: '247', color: 'bg-gradient-to-r from-blue-500 to-blue-600', icon: Users, trend: '+12' },
    { title: 'Present Today', value: '198', color: 'bg-gradient-to-r from-green-500 to-green-600', icon: UserCheck, trend: '80%' },
    { title: 'Monthly Payroll', value: '$458k', color: 'bg-gradient-to-r from-purple-500 to-purple-600', icon: DollarSign, trend: '+5%' },
    { title: 'Avg. Hours/Day', value: '8.2', color: 'bg-gradient-to-r from-orange-500 to-orange-600', icon: Clock, trend: '+0.3' }
  ];

  const attendanceData = [
    { name: 'John Doe', id: 'EMP001', checkIn: '09:15 AM', status: 'Present', department: 'Sales' },
    { name: 'Jane Smith', id: 'EMP002', checkIn: '09:00 AM', status: 'Present', department: 'Marketing' },
    { name: 'Mike Johnson', id: 'EMP003', checkIn: '--', status: 'Absent', department: 'IT' },
    { name: 'Sarah Wilson', id: 'EMP004', checkIn: '08:45 AM', status: 'Present', department: 'HR' },
    { name: 'David Brown', id: 'EMP005', checkIn: '10:30 AM', status: 'Late', department: 'Finance' }
  ];

  const salaryData = [
    { name: 'John Doe', id: 'EMP001', basic: '$3,200', allowances: '$800', deductions: '$200', net: '$3,800' },
    { name: 'Jane Smith', id: 'EMP002', basic: '$3,500', allowances: '$900', deductions: '$150', net: '$4,250' },
    { name: 'Mike Johnson', id: 'EMP003', basic: '$4,000', allowances: '$1,000', deductions: '$300', net: '$4,700' },
    { name: 'Sarah Wilson', id: 'EMP004', basic: '$2,800', allowances: '$700', deductions: '$100', net: '$3,400' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white w-80"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            HR Dashboard
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">{userName}</span>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Hello, {userName}</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {hrStats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className={`${stat.color} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-white text-sm font-medium opacity-90">{stat.title}</p>
                      <p className="text-white text-3xl font-bold mt-2">{stat.value}</p>
                      <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-2">
                        {stat.trend}
                      </Badge>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Attendance Section */}
          <div className="xl:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Today's Attendance
                </CardTitle>
                <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceData.map((employee, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{employee.name}</div>
                          <div className="text-gray-400 text-sm">{employee.id} • {employee.department}</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-medium">{employee.checkIn}</div>
                        <Badge 
                          variant="secondary" 
                          className={`mt-1 ${
                            employee.status === 'Present' ? 'bg-green-500/20 text-green-400' :
                            employee.status === 'Late' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {employee.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Quick Stats */}
          <div className="space-y-6">
            {/* Department Wise Attendance */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Department Attendance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { dept: 'Sales', present: 45, total: 50, percentage: 90 },
                  { dept: 'Marketing', present: 28, total: 32, percentage: 87 },
                  { dept: 'IT', present: 35, total: 40, percentage: 87 },
                  { dept: 'HR', present: 12, total: 15, percentage: 80 }
                ].map((dept, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{dept.dept}</span>
                      <span className="text-white font-bold">{dept.present}/{dept.total}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${dept.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">{dept.percentage}% Present</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Process Payroll
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Award className="h-4 w-4 mr-2" />
                  Employee Reports
                </Button>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Leave Management
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Salary Information */}
        <div className="mt-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Monthly Salary Overview
              </CardTitle>
              <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Download className="h-4 w-4 mr-2" />
                Generate Payslips
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left text-gray-400 py-3">Employee</th>
                      <th className="text-left text-gray-400 py-3">Basic Salary</th>
                      <th className="text-left text-gray-400 py-3">Allowances</th>
                      <th className="text-left text-gray-400 py-3">Deductions</th>
                      <th className="text-left text-gray-400 py-3">Net Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((employee, i) => (
                      <tr key={i} className="border-b border-gray-800">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {employee.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-medium">{employee.name}</div>
                              <div className="text-gray-400 text-sm">{employee.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-white font-medium py-4">{employee.basic}</td>
                        <td className="text-green-400 font-medium py-4">{employee.allowances}</td>
                        <td className="text-red-400 font-medium py-4">{employee.deductions}</td>
                        <td className="text-white font-bold py-4">{employee.net}</td>
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

export default HRDashboard;
