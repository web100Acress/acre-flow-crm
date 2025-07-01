
import React, { useState } from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, userRole = 'employee' }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const userName = localStorage.getItem('userName') || 'User';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    window.location.href = '/login';
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar 
        userRole={userRole} 
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:shadow-sm"
            >
              <Menu className="h-5 w-5 text-slate-600" />
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:shadow-sm">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-xs rounded-full h-2 w-2 animate-pulse"></span>
              </button>
              
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{userName}</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-0" align="end">
                  <div className="p-3 border-b border-slate-200">
                    <p className="text-sm font-medium text-slate-900">{userName}</p>
                    <p className="text-xs text-slate-500 capitalize">{userRole.replace('-', ' ')}</p>
                  </div>
                  <div className="p-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
