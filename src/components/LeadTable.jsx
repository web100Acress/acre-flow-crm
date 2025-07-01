import React, { useState } from 'react';
import { Search, Filter, Eye, MessageSquare, Phone, Mail, MapPin, Plus, Trash2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      case 'hot': return 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md';
      case 'warm': return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md';
      case 'cold': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md';
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
    <div className="p-0">
      {/* Enhanced Header */}
      <div className="p-8 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Lead Management</h2>
            <p className="text-slate-600">Track and manage all your leads in one place</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full sm:w-64 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm shadow-sm appearance-none transition-all duration-200"
              >
                <option value="all">All Status</option>
                <option value="hot">Hot</option>
                <option value="warm">Warm</option>
                <option value="cold">Cold</option>
              </select>
            </div>
            
            <Button 
              onClick={handleCreateLead}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl font-semibold"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Lead
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Lead Info</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Contact</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Property</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Assignment</th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {filteredLeads.map((lead, index) => (
              <tr key={lead.id} className="hover:bg-slate-50/50 transition-all duration-200 group">
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold text-sm">{lead.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900">{lead.name}</div>
                      <div className="text-xs text-slate-500 font-medium">ID: #{lead.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-700">
                      <div className="p-1.5 rounded-lg bg-green-100 mr-3">
                        <Phone className="h-3 w-3 text-green-600" />
                      </div>
                      {lead.phone}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="p-1.5 rounded-lg bg-blue-100 mr-3">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </div>
                      {lead.email}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="p-1.5 rounded-lg bg-orange-100 mr-3">
                        <MapPin className="h-3 w-3 text-orange-600" />
                      </div>
                      {lead.location}
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{lead.property}</div>
                    <div className="text-sm text-slate-600 font-medium">{lead.budget}</div>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <Badge className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getStatusColor(lead.status)} border-0`}>
                    {lead.status}
                  </Badge>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{lead.assignedTo}</div>
                    <div className="text-xs text-slate-500">by {lead.assignedBy}</div>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="p-2.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:shadow-md">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleFollowUp(lead)}
                      className="p-2.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-xl transition-all duration-200 hover:shadow-md relative"
                    >
                      <MessageSquare className="h-4 w-4" />
                      {lead.followUps > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                          {lead.followUps}
                        </span>
                      )}
                    </button>
                    {userRole === 'super-admin' && (
                      <button 
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-2.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-xl transition-all duration-200 hover:shadow-md"
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

      {/* Enhanced Modals */}
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
