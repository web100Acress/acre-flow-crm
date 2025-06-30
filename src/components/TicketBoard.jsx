
import React, { useState } from 'react';
import { Plus, Clock, CheckCircle, AlertCircle, Upload, Download } from 'lucide-react';

const TicketBoard = ({ userRole }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const mockTickets = {
    pending: [
      {
        id: 1,
        title: 'Property Documentation Review',
        description: 'Review legal documents for Gurgaon property',
        assignedTo: 'Ravi Kumar',
        assignedBy: 'Team Leader A',
        priority: 'High',
        dueDate: '2024-01-20',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        title: 'Client Site Visit Coordination',
        description: 'Coordinate site visit for premium villa project',
        assignedTo: 'Amit Singh',
        assignedBy: 'Team Leader B',
        priority: 'Medium',
        dueDate: '2024-01-18',
        createdAt: '2024-01-14'
      }
    ],
    'in-progress': [
      {
        id: 3,
        title: 'Market Analysis Report',
        description: 'Prepare detailed market analysis for Q1 2024',
        assignedTo: 'Sarah Khan',
        assignedBy: 'Head Admin',
        priority: 'High',
        dueDate: '2024-01-25',
        createdAt: '2024-01-10',
        files: ['market_data.xlsx', 'analysis_draft.pdf']
      }
    ],
    completed: [
      {
        id: 4,
        title: 'Customer Feedback Collection',
        description: 'Collect and compile customer feedback from last quarter',
        assignedTo: 'Priya Sharma',
        assignedBy: 'Team Leader C',
        priority: 'Low',
        dueDate: '2024-01-15',
        createdAt: '2024-01-08',
        completedAt: '2024-01-14',
        files: ['feedback_report.pdf', 'summary.docx']
      }
    ]
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-700 bg-red-100';
      case 'medium': return 'text-orange-700 bg-orange-100';
      case 'low': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const updateTicketStatus = (ticketId, newStatus) => {
    console.log(`Updating ticket ${ticketId} to ${newStatus}`);
    // In real app, this would update the database
  };

  const TicketCard = ({ ticket, status }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 text-sm">{ticket.title}</h4>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
      
      <div className="space-y-2 text-xs text-gray-500">
        <div>Assigned to: <span className="font-medium">{ticket.assignedTo}</span></div>
        <div>Due: {ticket.dueDate}</div>
        {ticket.files && (
          <div className="flex items-center space-x-2">
            <span>Files:</span>
            {ticket.files.map((file, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                {file}
              </span>
            ))}
          </div>
        )}
      </div>

      {userRole === 'employee' && (
        <div className="mt-3 flex space-x-2">
          {status === 'pending' && (
            <button
              onClick={() => updateTicketStatus(ticket.id, 'in-progress')}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
          )}
          {status === 'in-progress' && (
            <>
              <button
                onClick={() => updateTicketStatus(ticket.id, 'completed')}
                className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors"
              >
                Complete
              </button>
              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700 transition-colors flex items-center"
              >
                <Upload className="h-3 w-3 mr-1" />
                Upload
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Ticket Management</h2>
          {(userRole === 'team-leader' || userRole === 'head-admin' || userRole === 'super-admin') && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Create Ticket
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pending Column */}
          <div>
            <div className="flex items-center mb-4">
              {getStatusIcon('pending')}
              <h3 className="ml-2 font-medium text-gray-900">Pending</h3>
              <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                {mockTickets.pending.length}
              </span>
            </div>
            <div>
              {mockTickets.pending.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} status="pending" />
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div>
            <div className="flex items-center mb-4">
              {getStatusIcon('in-progress')}
              <h3 className="ml-2 font-medium text-gray-900">In Progress</h3>
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {mockTickets['in-progress'].length}
              </span>
            </div>
            <div>
              {mockTickets['in-progress'].map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} status="in-progress" />
              ))}
            </div>
          </div>

          {/* Completed Column */}
          <div>
            <div className="flex items-center mb-4">
              {getStatusIcon('completed')}
              <h3 className="ml-2 font-medium text-gray-900">Completed</h3>
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {mockTickets.completed.length}
              </span>
            </div>
            <div>
              {mockTickets.completed.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} status="completed" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upload Files</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Drag and drop files here or click to select</p>
                <input type="file" multiple className="hidden" />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBoard;
