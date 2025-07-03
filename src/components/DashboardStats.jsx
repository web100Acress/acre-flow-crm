
import React from 'react';
import { Users, Building2, Ticket, TrendingUp, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardStats = ({ userRole }) => {
  const getStatsForRole = (role) => {
    const baseStats = {
      'super-admin': [
        { 
          label: 'Earning', 
          value: '₹198k', 
          change: '+37.8%', 
          changeLabel: 'this month',
          icon: DollarSign, 
          bgColor: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600',
          iconBg: 'bg-green-500'
        },
        { 
          label: 'Balance', 
          value: '₹2.4k', 
          change: '-2%', 
          changeLabel: 'this month',
          icon: Building2, 
          bgColor: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-500'
        },
        { 
          label: 'Total Sales', 
          value: '₹89k', 
          change: '+11%', 
          changeLabel: 'this week',
          icon: TrendingUp, 
          bgColor: 'bg-gradient-to-br from-pink-100 to-pink-50',
          iconColor: 'text-pink-600',
          iconBg: 'bg-pink-500'
        }
      ],
      'head-admin': [
        { 
          label: 'Team Leads', 
          value: '156', 
          change: '+8%', 
          changeLabel: 'this month',
          icon: Building2, 
          bgColor: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600',
          iconBg: 'bg-purple-500'
        },
        { 
          label: 'Team Members', 
          value: '12', 
          change: '+2%', 
          changeLabel: 'this month',
          icon: Users, 
          bgColor: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600',
          iconBg: 'bg-green-500'
        },
        { 
          label: 'Conversion Rate', 
          value: '24%', 
          change: '+3%', 
          changeLabel: 'this month',
          icon: TrendingUp, 
          bgColor: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-500'
        }
      ],
      'team-leader': [
        { 
          label: 'My Leads', 
          value: '45', 
          change: '+15%', 
          changeLabel: 'this month',
          icon: Building2, 
          bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-50',
          iconColor: 'text-indigo-600',
          iconBg: 'bg-indigo-500'
        },
        { 
          label: 'Team Size', 
          value: '6', 
          change: '0%', 
          changeLabel: 'this month',
          icon: Users, 
          bgColor: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600',
          iconBg: 'bg-green-500'
        },
        { 
          label: 'This Month', 
          value: '₹8.5L', 
          change: '+25%', 
          changeLabel: 'vs last month',
          icon: DollarSign, 
          bgColor: 'bg-gradient-to-br from-pink-100 to-pink-50',
          iconColor: 'text-pink-600',
          iconBg: 'bg-pink-500'
        }
      ],
      'employee': [
        { 
          label: 'Assigned Leads', 
          value: '18', 
          change: '+6%', 
          changeLabel: 'this month',
          icon: Building2, 
          bgColor: 'bg-gradient-to-br from-cyan-100 to-cyan-50',
          iconColor: 'text-cyan-600',
          iconBg: 'bg-cyan-500'
        },
        { 
          label: 'Follow-ups', 
          value: '5', 
          change: '+2%', 
          changeLabel: 'this week',
          icon: Calendar, 
          bgColor: 'bg-gradient-to-br from-orange-100 to-orange-50',
          iconColor: 'text-orange-600',
          iconBg: 'bg-orange-500'
        },
        { 
          label: 'Target Progress', 
          value: '78%', 
          change: '+12%', 
          changeLabel: 'this month',
          icon: TrendingUp, 
          bgColor: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
          iconColor: 'text-emerald-600',
          iconBg: 'bg-emerald-500'
        }
      ]
    };
    
    return baseStats[role] || baseStats['employee'];
  };

  const stats = getStatsForRole(userRole);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isPositive = stat.change.startsWith('+');
        const ChangeIcon = isPositive ? ArrowUpRight : ArrowDownRight;
        
        return (
          <div key={index} className={`${stat.bgColor} rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all duration-200`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center space-x-1">
                <ChangeIcon className={`h-4 w-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500">{stat.changeLabel}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
