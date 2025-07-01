
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import LeadTable from '../components/LeadTable';
import { Users, TrendingUp, Target, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Leads = ({ userRole = 'employee' }) => {
  const stats = [
    { title: 'Total Leads', value: '1,234', icon: Users, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { title: 'Hot Leads', value: '89', icon: TrendingUp, color: 'from-red-500 to-red-600', change: '+23%' },
    { title: 'Conversions', value: '156', icon: Target, color: 'from-green-500 to-green-600', change: '+8%' },
    { title: 'Pending', value: '45', icon: Clock, color: 'from-orange-500 to-orange-600', change: '-3%' }
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-slate-200/60">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Lead Management
              </h1>
              <p className="text-slate-600 mt-2 text-lg">Manage and track your real estate leads efficiently</p>
            </div>
            <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        stat.change.startsWith('+') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lead Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          <LeadTable userRole={userRole} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
