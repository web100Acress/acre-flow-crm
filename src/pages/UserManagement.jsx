
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import UserManagement from '../components/UserManagement';

const UserManagementPage = ({ userRole = 'super-admin' }) => {
  return (
    <DashboardLayout userRole={userRole}>
      <UserManagement />
    </DashboardLayout>
  );
};

export default UserManagementPage;
