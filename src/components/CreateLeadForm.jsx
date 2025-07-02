import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Save, User, Mail, Phone, MapPin, DollarSign, Building, Target, Users } from 'lucide-react';

const CreateLeadForm = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    property: '',
    status: 'Cold',
    assignedTo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      onSave(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        budget: '',
        property: '',
        status: 'Cold',
        assignedTo: ''
      });
      onClose();
    }
  };

  const budgetOptions = [
    '₹20L - ₹30L',
    '₹30L - ₹45L',
    '₹45L - ₹60L',
    '₹60L - ₹80L',
    '₹80L - ₹1Cr',
    '₹1Cr - ₹1.5Cr',
    '₹1.5Cr+'
  ];

  const propertyOptions = [
    '1BHK Apartment',
    '2BHK Apartment',
    '2BHK Flat',
    '3BHK Apartment',
    '3BHK Flat',
    '4BHK Apartment',
    '4BHK Villa',
    'Villa',
    'Independent House',
    'Plot'
  ];

  const assignmentOptions = [
    {
      category: 'Sales Management',
      members: [
        { id: 'sales_director', name: 'Sales Director', level: 1 },
        { id: 'sales_manager', name: 'Sales Manager', level: 2 },
        { id: 'senior_sales_exec', name: 'Senior Sales Executive', level: 3 },
      ]
    },
    {
      category: 'Sales Team',
      members: [
        { id: 'sales_exec_1', name: 'Sales Executive - Rajesh Kumar', level: 4 },
        { id: 'sales_exec_2', name: 'Sales Executive - Priya Sharma', level: 4 },
        { id: 'sales_exec_3', name: 'Sales Executive - Amit Singh', level: 4 },
        { id: 'sales_exec_4', name: 'Sales Executive - Neha Gupta', level: 4 },
      ]
    },
    {
      category: 'Junior Sales Team',
      members: [
        { id: 'junior_sales_1', name: 'Junior Sales - Rohit Verma', level: 5 },
        { id: 'junior_sales_2', name: 'Junior Sales - Sneha Patel', level: 5 },
        { id: 'junior_sales_3', name: 'Junior Sales - Vikash Yadav', level: 5 },
      ]
    },
    {
      category: 'Telecalling Team',
      members: [
        { id: 'telecaller_1', name: 'Telecaller - Ravi Kumar', level: 6 },
        { id: 'telecaller_2', name: 'Telecaller - Sunita Singh', level: 6 },
        { id: 'telecaller_3', name: 'Telecaller - Manoj Tiwari', level: 6 },
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-md border-slate-200/60">
        <DialogHeader className="pb-6 border-b border-slate-200">
          <DialogTitle className="flex items-center text-2xl font-bold text-slate-800">
            <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 mr-3 shadow-lg">
              <User className="h-5 w-5 text-white" />
            </div>
            Create New Lead
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information Section */}
          <div className="bg-slate-50/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
              <User className="h-5 w-5 mr-2 text-slate-600" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
                    placeholder="City/Area"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Property Information Section */}
          <div className="bg-blue-50/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
              <Building className="h-5 w-5 mr-2 text-slate-600" />
              Property Requirements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm appearance-none transition-all duration-200"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm appearance-none transition-all duration-200"
                  >
                    <option value="">Select property</option>
                    {propertyOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Section */}
          <div className="bg-green-50/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
              <Target className="h-5 w-5 mr-2 text-slate-600" />
              Lead Assignment
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Lead Status
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm appearance-none transition-all duration-200"
                  >
                    <option value="Cold">Cold</option>
                    <option value="Warm">Warm</option>
                    <option value="Hot">Hot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Assign To *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm appearance-none transition-all duration-200"
                    required
                  >
                    <option value="">Select assignee</option>
                    {assignmentOptions.map(category => (
                      <optgroup key={category.category} label={category.category}>
                        {category.members.map(member => (
                          <option key={member.id} value={member.id}>
                            {'  '.repeat(member.level - 1)}• {member.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Hierarchy Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-blue-900 mb-3 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Assignment Hierarchy
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-blue-700">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                Level 1-2: Management (Director, Manager)
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Level 3: Senior Executives
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                Level 4: Sales Executives
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                Level 5-6: Junior & Telecalling Team
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-slate-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-200"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Save className="h-4 w-4 mr-2" />
              Create Lead
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLeadForm;
