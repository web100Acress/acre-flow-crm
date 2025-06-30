import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // User credentials for different roles including HR department
  const users = {
    'superadmin': { password: 'super123', role: 'super-admin', email: 'superadmin@100acres.com', name: 'Super Administrator' },
    'headadmin': { password: 'head123', role: 'head-admin', email: 'headadmin@100acres.com', name: 'Head Administrator' },
    'teamleader': { password: 'tl123', role: 'team-leader', email: 'teamleader@100acres.com', name: 'Team Leader' },
    'employee': { password: 'emp123', role: 'employee', email: 'employee@100acres.com', name: 'Employee' },
    'hrmanager': { password: 'hr123', role: 'hr-manager', email: 'hrmanager@100acres.com', name: 'HR Manager' },
    'hrassistant': { password: 'hra123', role: 'hr-assistant', email: 'hrassistant@100acres.com', name: 'HR Assistant' },
    'payroll': { password: 'pay123', role: 'payroll-admin', email: 'payroll@100acres.com', name: 'Payroll Administrator' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = users[credentials.username.toLowerCase()];
      
      if (user && user.password === credentials.password) {
        // Store user session data
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        navigate('/');
        
        // Reload to update the app state
        window.location.reload();
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-green-800">100acres.com</CardTitle>
          <p className="text-sm text-gray-600 mt-2">CRM Login Portal</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                required
                className="focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="focus:ring-green-500 focus:border-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 transition-colors" 
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800 font-medium mb-2">Test Credentials:</p>
            <div className="text-xs text-green-700 space-y-1">
              <p><strong>Super Admin:</strong> superadmin / super123</p>
              <p><strong>Head Admin:</strong> headadmin / head123</p>
              <p><strong>Team Leader:</strong> teamleader / tl123</p>
              <p><strong>Employee:</strong> employee / emp123</p>
              <p><strong>HR Manager:</strong> hrmanager / hr123</p>
              <p><strong>HR Assistant:</strong> hrassistant / hra123</p>
              <p><strong>Payroll Admin:</strong> payroll / pay123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
