
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import DashboardStats from '../components/DashboardStats';
import LeadTable from '../components/LeadTable';
import TicketBoard from '../components/TicketBoard';
import SuperAdminProfile from '../components/SuperAdminProfile';

const Dashboard = ({ userRole = 'employee' }) => {
  const navigate = useNavigate();

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

  // Regular dashboard for other roles
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your 100Acres CRM dashboard</p>
        </div>

        <DashboardStats userRole={userRole} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <LeadTable userRole={userRole} />
          </div>
          <div>
            <TicketBoard userRole={userRole} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
