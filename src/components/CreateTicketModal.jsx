
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, User, Calendar, AlertCircle } from 'lucide-react';

const CreateTicketModal = ({ isOpen, onClose, userRole }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    priority: 'medium',
    dueDate: '',
    category: 'general'
  });

  const mockUsers = [
    'Ravi Kumar',
    'Amit Singh', 
    'Sarah Khan',
    'Priya Sharma',
    'John Smith',
    'Emily Brown'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating ticket:', formData);
    // Here you would typically send the data to your backend
    onClose();
    // Reset form
    setFormData({
      title: '',
      description: '',
      assignedTo: '',
      priority: 'medium',
      dueDate: '',
      category: 'general'
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fixed backdrop with higher z-index */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]" onClick={onClose}></div>
      
      {/* Modal container with highest z-index */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-none">
        <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 pointer-events-auto">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-gray-900">Create New Ticket</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ticket Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Enter ticket title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Describe the task or issue in detail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Two-column layout for smaller fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Assign To */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    Assign To *
                  </label>
                  <select
                    required
                    value={formData.assignedTo}
                    onChange={(e) => handleChange('assignedTo', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent relative z-10"
                  >
                    <option value="">Select user...</option>
                    {mockUsers.map((user, index) => (
                      <option key={index} value={user}>{user}</option>
                    ))}
                  </select>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Priority *
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => handleChange('priority', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent relative z-10"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                {/* Due Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Due Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dueDate}
                    onChange={(e) => handleChange('dueDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent relative z-10"
                  >
                    <option value="general">General</option>
                    <option value="documentation">Documentation</option>
                    <option value="client-coordination">Client Coordination</option>
                    <option value="analysis">Analysis</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              {/* Priority indicator */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className={`h-4 w-4 ${
                    formData.priority === 'high' ? 'text-red-500' :
                    formData.priority === 'medium' ? 'text-orange-500' : 'text-green-500'
                  }`} />
                  <span className="text-sm text-gray-600">
                    This ticket will be created with 
                    <span className={`font-medium ml-1 ${
                      formData.priority === 'high' ? 'text-red-600' :
                      formData.priority === 'medium' ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {formData.priority} priority
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Create Ticket
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTicketModal;
