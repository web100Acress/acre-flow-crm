import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  User,
  Users,
  UserPlus,
  Ticket,
  Building2,
  Home,
  LogOut,
  Settings,
  Code
} from 'lucide-react';

const Sidebar = ({ userRole, isCollapsed, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };

  const userName = localStorage.getItem('userName') || 'User';
  const userEmail = localStorage.getItem('userEmail') || '';

  const navigationItems = {
    'super-admin': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'All Leads' },
      { path: '/users', icon: Users, label: 'Manage Users' },
      { path: '/create-admin', icon: UserPlus, label: 'Create Admin' },
      { path: '/tickets', icon: Ticket, label: 'All Tickets' },
      { path: '/settings', icon: Settings, label: 'Settings' },
      { path: '/developer', icon: Code, label: 'Developer' }
    ],
    'head-admin': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'My Leads' },
      { path: '/team', icon: Users, label: 'Team Management' },
      { path: '/create-leader', icon: UserPlus, label: 'Create Team Leader' },
      { path: '/tickets', icon: Ticket, label: 'Team Tickets' }
    ],
    'team-leader': [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'Assigned Leads' },
      { path: '/employees', icon: Users, label: 'My Employees' },
      { path: '/create-employee', icon: UserPlus, label: 'Add Employee' },
      { path: '/tickets', icon: Ticket, label: 'Manage Tickets' }
    ],
    employee: [
      { path: '/', icon: Home, label: 'Dashboard' },
      { path: '/leads', icon: Building2, label: 'My Leads' },
      { path: '/tickets', icon: Ticket, label: 'My Tickets' }
    ]
  };

  const navItems = navigationItems[userRole] || navigationItems['employee'];

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'super-admin':
        return 'Super Admin';
      case 'head-admin':
        return 'Head Admin';
      case 'team-leader':
        return 'Team Leader';
      case 'employee':
        return 'Employee';
      default:
        return 'User';
    }
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Building2 className="icon" />
          </div>
          {!isCollapsed && (
            <div className="sidebar-title">
              <h1>100acres.com</h1>
              <p>CRM Dashboard</p>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
               <NavLink
  to={item.path}
  end={item.path === '/'} // exact match for "/"
  className={({ isActive }) =>
    `sidebar-link ${isActive ? 'active' : ''}`
  }
>

  <Icon className="icon" />
  {!isCollapsed && <span>{item.label}</span>}
</NavLink>

                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-icon">
              <User className="icon-small" />
            </div>
            {!isCollapsed && (
              <div className="user-info">
                <p className="user-name">{userName}</p>
                <p className="user-role">{getRoleDisplayName(userRole)}</p>
              </div>
            )}
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut className="icon" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      <style>{`
        .sidebar {
          background: linear-gradient(145deg, #1e293b, #111827);
          box-shadow: 4px 0 12px rgba(0,0,0,0.3);
          color: white;
          border-right: 1px solid #334155;
          transition: width 0.3s ease;
          width: 16rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Segoe UI', sans-serif;
        }

        .sidebar.collapsed {
          width: 4rem;
        }

        .sidebar-header {
          padding: 1.25rem 1rem;
          border-bottom: 1px solid #334155;
          display: flex;
          align-items: center;
        }

        .sidebar-logo {
          background-color: #3b82f6;
          padding: 0.6rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        .sidebar-title {
          margin-left: 0.85rem;
        }

        .sidebar-title h1 {
          font-size: 1rem;
          font-weight: 600;
        }

        .sidebar-title p {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0.75rem;
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          padding: 0.6rem 0.85rem;
          margin-bottom: 0.5rem;
          border-radius: 0.6rem;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        .sidebar-link:hover {
          background-color: #334155;
          transform: translateX(2px);
        }

        .sidebar-link.active {
          background-color: #e0e7ff;
          color: #1e293b;
          font-weight: 700;
          box-shadow: inset 4px 0 0 0 #3b82f6;
        }

        .sidebar-link .icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .sidebar-link span {
          margin-left: 0.85rem;
          font-size: 0.95rem;
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid #334155;
        }

        .sidebar-user {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .user-icon {
          background: white;
          color: #1e293b;
          padding: 0.5rem;
          border-radius: 999px;
          box-shadow: 0 2px 4px rgba(255,255,255,0.1);
        }

        .icon-small {
          width: 1rem;
          height: 1rem;
        }

        .user-info {
          margin-left: 0.75rem;
        }

        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .user-role {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: #cbd5e1;
          cursor: pointer;
          padding: 0.6rem 0.85rem;
          border-radius: 0.6rem;
          width: 100%;
          transition: background 0.2s ease;
        }

        .logout-btn:hover {
          background-color: #334155;
        }

        .logout-btn .icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .logout-btn span {
          margin-left: 0.75rem;
          font-size: 0.95rem;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
