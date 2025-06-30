
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TicketBoard from '../components/TicketBoard';

const Tickets = ({ userRole = 'employee' }) => {
  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ticket Management</h1>
          <p className="text-gray-600">Track and manage work tickets and assignments</p>
        </div>

        <TicketBoard userRole={userRole} />
      </div>
    </DashboardLayout>
  );
};

export default Tickets;
