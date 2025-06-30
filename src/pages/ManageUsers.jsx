
import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Search, Filter, Edit, Trash2, MoreVertical } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const ManageUsers = ({ userRole = 'super-admin' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const mockUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@100acres.com',
      phone: '+91 9876543210',
      role: 'head-admin',
      status: 'active',
      joinDate: '2024-01-15',
      lastLogin: '2024-01-20',
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@100acres.com',
      phone: '+91 9876543211',
      role: 'team-leader',
      status: 'active',
      joinDate: '2024-01-10',
      lastLogin: '2024-01-19',
      avatar: 'SJ'
    },
    {
      id: 3,
      name: 'Mike Davis',
      email: 'mike.davis@100acres.com',
      phone: '+91 9876543212',
      role: 'employee',
      status: 'inactive',
      joinDate: '2024-01-05',
      lastLogin: '2024-01-18',
      avatar: 'MD'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@100acres.com',
      phone: '+91 9876543213',
      role: 'employee',
      status: 'active',
      joinDate: '2024-01-12',
      lastLogin: '2024-01-20',
      avatar: 'EB'
    }
  ];

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'head-admin': return 'bg-purple-100 text-purple-800';
      case 'team-leader': return 'bg-blue-100 text-blue-800';
      case 'employee': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const stats = [
    { title: 'Total Users', value: mockUsers.length, color: 'text-blue-600' },
    { title: 'Active Users', value: mockUsers.filter(u => u.status === 'active').length, color: 'text-green-600' },
    { title: 'Head Admins', value: mockUsers.filter(u => u.role === 'head-admin').length, color: 'text-purple-600' },
    { title: 'Team Leaders', value: mockUsers.filter(u => u.role === 'team-leader').length, color: 'text-orange-600' }
  ];

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
            <p className="text-gray-600">Manage all users in your organization</p>
          </div>
          <Button onClick={() => setShowCreateModal(true)} className="bg-green-600 hover:bg-green-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Roles</option>
                  <option value="head-admin">Head Admin</option>
                  <option value="team-leader">Team Leader</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
            <CardDescription>Manage and monitor all users in your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">User</th>
                    <th className="text-left py-3 px-4">Role</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Join Date</th>
                    <th className="text-left py-3 px-4">Last Login</th>
                    <th className="text-center py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-500">{user.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={`${getRoleBadgeColor(user.role)}`}>
                          {user.role.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={`${getStatusBadgeColor(user.status)}`}>
                          {user.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{user.joinDate}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{user.lastLogin}</td>
                      <td className="py-4 px-4">
                        <div className="flex justify-center">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-48" align="end">
                              <div className="space-y-1">
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit User
                                </button>
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center">
                                  <Shield className="h-4 w-4 mr-2" />
                                  Change Role
                                </button>
                                <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded flex items-center">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete User
                                </button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Create User Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Add New User</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="employee">Employee</option>
                      <option value="team-leader">Team Leader</option>
                      <option value="head-admin">Head Admin</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Create User
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;
