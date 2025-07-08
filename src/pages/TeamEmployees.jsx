
import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, UserCheck, UserX, Mail, Phone } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

const TeamEmployees = ({ userRole = 'team-leader' }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching team employees data
    const fetchEmployees = async () => {
      try {
        // Mock data for team employees
        const mockEmployees = [
          {
            id: 1,
            name: 'Rahul Kumar',
            email: 'rahul.kumar@100acres.com',
            phone: '+91 9876543210',
            role: 'employee',
            department: 'Sales',
            status: 'active',
            joiningDate: '2024-01-15',
            lastLogin: '2024-01-20',
            tasksCompleted: 25,
            leadsAssigned: 15
          },
          {
            id: 2,
            name: 'Priya Singh',
            email: 'priya.singh@100acres.com',
            phone: '+91 9876543211',
            role: 'employee',
            department: 'Sales',
            status: 'active',
            joiningDate: '2024-02-01',
            lastLogin: '2024-01-19',
            tasksCompleted: 18,
            leadsAssigned: 12
          },
          {
            id: 3,
            name: 'Amit Sharma',
            email: 'amit.sharma@100acres.com',
            phone: '+91 9876543212',
            role: 'employee',
            department: 'Sales',
            status: 'inactive',
            joiningDate: '2023-12-10',
            lastLogin: '2024-01-10',
            tasksCompleted: 8,
            leadsAssigned: 5
          },
          {
            id: 4,
            name: 'Sneha Patel',
            email: 'sneha.patel@100acres.com',
            phone: '+91 9876543213',
            role: 'employee',
            department: 'Sales',
            status: 'active',
            joiningDate: '2024-01-20',
            lastLogin: '2024-01-20',
            tasksCompleted: 12,
            leadsAssigned: 8
          }
        ];
        setEmployees(mockEmployees);
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not load employee data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [toast]);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (employeeId) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        const newStatus = emp.status === 'active' ? 'inactive' : 'active';
        toast({
          title: "Status Updated",
          description: `${emp.name} is now ${newStatus}`,
        });
        return { ...emp, status: newStatus };
      }
      return emp;
    }));
  };

  const getStatusBadgeColor = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  if (loading) {
    return (
      <DashboardLayout userRole={userRole}>
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600">Loading employees...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Team Employees</h1>
            <p className="text-gray-600 mt-2">
              Manage and monitor your team members' performance
            </p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="h-4 w-4" />
            Add Employee
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.filter(emp => emp.status === 'active').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.reduce((sum, emp) => sum + emp.tasksCompleted, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <UserCheck className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.reduce((sum, emp) => sum + emp.leadsAssigned, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search employees by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Employees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(employee.status)}`}>
                      {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {employee.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {employee.phone}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{employee.tasksCompleted}</p>
                  <p className="text-xs text-gray-500">Tasks Done</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{employee.leadsAssigned}</p>
                  <p className="text-xs text-gray-500">Leads</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-xs text-gray-500">
                  Joined: {new Date(employee.joiningDate).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggleStatus(employee.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title={employee.status === 'active' ? 'Deactivate' : 'Activate'}
                  >
                    {employee.status === 'active' ? (
                      <UserX className="h-4 w-4 text-red-600" />
                    ) : (
                      <UserCheck className="h-4 w-4 text-green-600" />
                    )}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit Employee">
                    <Edit className="h-4 w-4 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Remove Employee">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <UserX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
            <p className="text-gray-500">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Add your first employee to get started.'
              }
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TeamEmployees;
