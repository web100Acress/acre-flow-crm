
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, Calendar, Shield, UserPlus, LogOut, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperAdminProfile = ({ onCreateAdmin }) => {
  const navigate = useNavigate();

  const superAdminData = {
    name: 'Super Administrator',
    email: 'superadmin@100acres.com',
    phone: '+91 9876543210',
    role: 'Super Admin',
    company: '100acres.com',
    joinDate: '2024-01-01',
    permissions: [
      'Full System Access',
      'Create Head Admins',
      'Manage All Users',
      'View All Reports',
      'System Configuration'
    ]
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">100acres.com</h1>
            <p className="text-gray-600">Super Admin Dashboard</p>
          </div>
        </div>
        <Button onClick={handleLogout} variant="outline" className="flex items-center">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </CardTitle>
            <CardDescription>Your account details and permissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{superAdminData.name}</h3>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {superAdminData.role}
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Building2 className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{superAdminData.company}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{superAdminData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{superAdminData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Joined: {superAdminData.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>System Permissions</CardTitle>
            <CardDescription>Your access rights and capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {superAdminData.permissions.map((permission, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-800">{permission}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your organization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={onCreateAdmin} className="flex items-center bg-green-600 hover:bg-green-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Create Head Admin
            </Button>
            <Button variant="outline" onClick={() => navigate('/leads')}>
              View All Leads
            </Button>
            <Button variant="outline" onClick={() => navigate('/tickets')}>
              View All Tickets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperAdminProfile;
