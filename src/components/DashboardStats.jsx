
import React from 'react';
import { Users, Building2, Ticket, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const DashboardStats = ({ userRole }) => {
  const getStatsForRole = (role) => {
    const baseStats = {
      'super-admin': [
        { label: 'Total Leads', value: '1,245', change: '+12%', icon: Building2, color: 'blue' },
        { label: 'Active Users', value: '87', change: '+5%', icon: Users, color: 'green' },
        { label: 'Open Tickets', value: '23', change: '-8%', icon: Ticket, color: 'orange' },
        { label: 'Monthly Revenue', value: '₹45.2L', change: '+18%', icon: DollarSign, color: 'purple' }
      ],
      'head-admin': [
        { label: 'Team Leads', value: '156', change: '+8%', icon: Building2, color: 'blue' },
        { label: 'Team Members', value: '12', change: '+2%', icon: Users, color: 'green' },
        { label: 'Assigned Tickets', value: '8', change: '-15%', icon: Ticket, color: 'orange' },
        { label: 'Conversion Rate', value: '24%', change: '+3%', icon: TrendingUp, color: 'purple' }
      ],
      'team-leader': [
        { label: 'My Leads', value: '45', change: '+15%', icon: Building2, color: 'blue' },
        { label: 'Team Size', value: '6', change: '0%', icon: Users, color: 'green' },
        { label: 'Pending Tasks', value: '12', change: '-20%', icon: Ticket, color: 'orange' },
        { label: 'This Month', value: '₹8.5L', change: '+25%', icon: DollarSign, color: 'purple' }
      ],
      'employee': [
        { label: 'Assigned Leads', value: '18', change: '+6%', icon: Building2, color: 'blue' },
        { label: 'Follow-ups', value: '5', change: '+2%', icon: Calendar, color: 'green' },
        { label: 'My Tickets', value: '3', change: '-1', icon: Ticket, color: 'orange' },
        { label: 'Target Progress', value: '78%', change: '+12%', icon: TrendingUp, color: 'purple' }
      ]
    };
    
    return baseStats[role] || baseStats['employee'];
  };

  const stats = getStatsForRole(userRole);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.change.startsWith('+') ? 'text-green-600' : 
                  stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg border ${getColorClasses(stat.color)}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
