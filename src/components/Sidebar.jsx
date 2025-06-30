
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User, Users, UserPlus, Ticket, Building2, Home, LogOut, Settings } from 'lucide-react';

const Sidebar = ({ userRole, isCollapsed, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session and redirect to login
    navigate('/login');
  };

  const navigationItems = {
    'super-admin': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'All Leads' },
      { path: '/users', icon: Users, label: 'Manage Users' },
      { path: '/create-admin', icon: UserPlus, label: 'Create Admin' },
      { path: '/tickets', icon: Ticket, label: 'All Tickets' },
      { path: '/settings', icon: Settings, label: 'Settings' },
    ],
    'head-admin': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'My Leads' },
      { path: '/team', icon: Users, label: 'Team Management' },
      { path: '/create-leader', icon: UserPlus, label: 'Create Team Leader' },
      { path: '/tickets', icon: Ticket, label: 'Team Tickets' },
    ],
    'team-leader': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'Assigned Leads' },
      { path: '/employees', icon: Users, label: 'My Employees' },
      { path: '/create-employee', icon: UserPlus, label: 'Add Employee' },
      { path: '/tickets', icon: Ticket, label: 'Manage Tickets' },
    ],
    'employee': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'My Leads' },
      { path: '/tickets', icon: Ticket, label: 'My Tickets' },
    ]
  };

  const navItems = navigationItems[userRole] || navigationItems['employee'];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Building2 className="h-6 w-6" />
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <h1 className="text-lg font-bold text-gray-900">100Acres</h1>
              <p className="text-sm text-gray-500">CRM Dashboard</p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <User className="h-4 w-4" />
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500 capitalize">{userRole.replace('-', ' ')}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
