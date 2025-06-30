
import React, { useState } from 'react';
import { UserPlus, Save, X } from 'lucide-react';

const RoleCreationForms = ({ userRole, formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    reportingTo: '',
    permissions: []
  });

  const formConfigs = {
    'create-admin': {
      title: 'Create Head Admin',
      role: 'head-admin',
      departments: ['Sales', 'Marketing', 'Operations', 'Customer Success'],
      permissions: ['manage_team_leaders', 'assign_leads', 'view_reports', 'create_tickets']
    },
    'create-leader': {
      title: 'Create Team Leader',
      role: 'team-leader',
      departments: ['Sales Team A', 'Sales Team B', 'Marketing Team', 'Support Team'],
      permissions: ['manage_employees', 'assign_leads', 'create_tickets', 'view_team_reports']
    },
    'create-employee': {
      title: 'Add Employee',
      role: 'employee',
      departments: ['Inside Sales', 'Field Sales', 'Customer Support', 'Marketing'],
      permissions: ['view_assigned_leads', 'update_lead_status', 'manage_tickets']
    }
  };

  const config = formConfigs[formType] || formConfigs['create-employee'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating user:', { ...formData, role: config.role });
    // In real app, this would create the user in the database
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      reportingTo: '',
      permissions: []
    });
  };

  const handlePermissionChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <UserPlus className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-900">{config.title}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department *
            </label>
            <select
              required
              value={formData.department}
              onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Department</option>
              {config.departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reporting To
            </label>
            <input
              type="text"
              value={formData.reportingTo}
              onChange={(e) => setFormData(prev => ({ ...prev, reportingTo: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Manager/Supervisor name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Permissions
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {config.permissions.map(permission => (
              <label key={permission} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700 capitalize">
                  {permission.replace(/_/g, ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            Create {config.role.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleCreationForms;
