
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import SettingsContent from '../components/SettingsContent';

const Settings = ({ userRole = 'super-admin' }) => {
  return (
    <DashboardLayout userRole={userRole}>
      <SettingsContent userRole={userRole} />
    </DashboardLayout>
  );
};

export default Settings;
