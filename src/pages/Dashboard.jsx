
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import ModernDashboard from '../components/ModernDashboard';
import HRDashboard from '../components/HRDashboard';
import SuperAdminProfile from '../components/SuperAdminProfile';

const Dashboard = ({ userRole = 'employee' }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'User';

  const handleCreateAdmin = () => {
    navigate('/create-admin');
  };

  // Show Super Admin Profile for super-admin role
  if (userRole === 'super-admin') {
    return (
      <DashboardLayout userRole={userRole}>
        <SuperAdminProfile onCreateAdmin={handleCreateAdmin} />
      </DashboardLayout>
    );
  }

  // Show HR Dashboard for HR roles
  if (userRole === 'hr-manager' || userRole === 'hr-assistant' || userRole === 'payroll-admin') {
    return <HRDashboard userRole={userRole} userName={userName} />;
  }

  // Use Modern Dashboard for all other roles
  return <ModernDashboard userRole={userRole} userName={userName} />;
};

export default Dashboard;
