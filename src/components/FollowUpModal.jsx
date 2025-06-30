
import React, { useState } from 'react';
import { X, Send, Clock, User } from 'lucide-react';

const FollowUpModal = ({ lead, onClose, userRole }) => {
  const [newComment, setNewComment] = useState('');
  
  const mockFollowUps = [
    {
      id: 1,
      comment: 'Initial contact made. Client interested in 3BHK apartments in Gurgaon.',
      author: 'Amit Singh',
      role: 'Employee',
      timestamp: '2024-01-15 10:30 AM',
      isVisible: true
    },
    {
      id: 2,
      comment: 'Scheduled site visit for next week. Client budget confirmed.',
      author: 'Team Leader',
      role: 'Team Leader',
      timestamp: '2024-01-14 2:15 PM',
      isVisible: true
    },
    {
      id: 3,
      comment: 'Follow-up call needed regarding pricing discussion.',
      author: 'Sarah Khan',
      role: 'Head Admin',
      timestamp: '2024-01-13 11:45 AM',
      isVisible: userRole === 'super-admin' || userRole === 'head-admin'
    }
  ];

  const visibleFollowUps = mockFollowUps.filter(followUp => followUp.isVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log('New follow-up:', newComment);
      setNewComment('');
      // In real app, this would update the database
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden relative z-[10000]">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Follow-up Timeline</h2>
            <p className="text-sm text-gray-500">{lead.name} - {lead.property}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {visibleFollowUps.map((followUp) => (
              <div key={followUp.id} className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-900">{followUp.comment}</p>
                    <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                      <span className="font-medium">{followUp.author}</span>
                      <span className="bg-gray-200 px-2 py-1 rounded">{followUp.role}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {followUp.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex space-x-3">
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a follow-up comment..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FollowUpModal;
