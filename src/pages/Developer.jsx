
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DeveloperContent from '../components/DeveloperContent';

const Developer = ({ userRole = 'super-admin' }) => {
  return (
    <DashboardLayout userRole={userRole}>
      <DeveloperContent userRole={userRole} />
    </DashboardLayout>
  );
};

export default Developer;
