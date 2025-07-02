
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import LeadTable from '../components/LeadTable';

const Leads = ({ userRole = 'employee' }) => {
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600">Manage and track your real estate leads</p>
        </div>

        <LeadTable userRole={userRole} />
      </div>
    </DashboardLayout>
  );
};

export default Leads;
