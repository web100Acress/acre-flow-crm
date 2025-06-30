import React, { useState } from 'react';
import { Search, Filter, Eye, MessageSquare, Phone, Mail, MapPin, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FollowUpModal from './FollowUpModal';
import CreateLeadForm from './CreateLeadForm';

const LeadTable = ({ userRole, leads = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [showCreateLead, setShowCreateLead] = useState(false);
  const [leadsList, setLeadsList] = useState(leads.length > 0 ? leads : [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@email.com',
      phone: '+91 9876543210',
      location: 'Gurgaon',
      budget: '₹50L - ₹75L',
      property: '3BHK Apartment',
      status: 'Hot',
      assignedTo: 'Amit Singh',
      assignedBy: 'Team Leader',
      lastContact: '2024-01-15',
      followUps: 3
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@email.com',
      phone: '+91 9876543211',
      location: 'Mumbai',
      budget: '₹1Cr - ₹1.5Cr',
      property: '4BHK Villa',
      status: 'Warm',
      assignedTo: 'Sarah Khan',
      assignedBy: 'Head Admin',
      lastContact: '2024-01-14',
      followUps: 1
    },
    {
      id: 3,
      name: 'Vikram Patel',
      email: 'vikram@email.com',
      phone: '+91 9876543212',
      location: 'Pune',
      budget: '₹30L - ₹45L',
      property: '2BHK Flat',
      status: 'Cold',
      assignedTo: 'Ravi Kumar',
      assignedBy: 'Team Leader',
      lastContact: '2024-01-10',
      followUps: 0
    }
  ]);

  const filteredLeads = leadsList.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || lead.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'hot': return 'bg-red-100 text-red-800';
      case 'warm': return 'bg-orange-100 text-orange-800';
      case 'cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFollowUp = (lead) => {
    setSelectedLead(lead);
    setShowFollowUp(true);
  };

  const handleCreateLead = () => {
    setShowCreateLead(true);
  };

  const handleDeleteLead = (leadId) => {
    if (window.confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      setLeadsList(prev => prev.filter(lead => lead.id !== leadId));
      console.log('Lead deleted:', leadId);
    }
  };

  const handleSaveLead = (newLeadData) => {
    const newLead = {
      ...newLeadData,
      id: leadsList.length + 1,
      assignedTo: localStorage.getItem('userName') || 'Current User',
      assignedBy: localStorage.getItem('userRole') || 'Admin',
      lastContact: new Date().toISOString().split('T')[0],
      followUps: 0
    };
    
    setLeadsList(prev => [...prev, newLead]);
    console.log('New lead created:', newLead);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Lead Management</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="hot">Hot</option>
                <option value="warm">Warm</option>
                <option value="cold">Cold</option>
              </select>
            </div>
            
            <Button 
              onClick={handleCreateLead}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Lead
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead Info</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                    <div className="text-sm text-gray-500">ID: #{lead.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-900">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      {lead.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {lead.location}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{lead.property}</div>
                    <div className="text-sm text-gray-500">{lead.budget}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{lead.assignedTo}</div>
                    <div className="text-sm text-gray-500">by {lead.assignedBy}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleFollowUp(lead)}
                      className="text-green-600 hover:text-green-900 p-1 hover:bg-green-50 rounded relative"
                    >
                      <MessageSquare className="h-4 w-4" />
                      {lead.followUps > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {lead.followUps}
                        </span>
                      )}
                    </button>
                    {userRole === 'super-admin' && (
                      <button 
                        onClick={() => handleDeleteLead(lead.id)}
                        className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded"
                        title="Delete Lead"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showFollowUp && selectedLead && (
        <FollowUpModal
          lead={selectedLead}
          onClose={() => setShowFollowUp(false)}
          userRole={userRole}
        />
      )}

      <CreateLeadForm
        isOpen={showCreateLead}
        onClose={() => setShowCreateLead(false)}
        onSave={handleSaveLead}
      />
    </div>
  );
};

export default LeadTable;
