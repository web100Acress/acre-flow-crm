
import React, { useState } from 'react';
import { Menu, Bell } from 'lucide-react';
import Sidebar from './Sidebar';
import { Card, CardContent } from './ui/card';

const DashboardLayout = ({ children, userRole = 'employee' }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar 
        userRole={userRole} 
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with Card Design */}
        <Card className="m-4 mb-0 shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Menu className="h-5 w-5 text-gray-700" />
              </button>
              
              <div className="flex items-center space-x-3">
                <button className="relative p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105">
                  <Bell className="h-5 w-5 text-gray-700" />
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-2.5 w-2.5 animate-pulse"></span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Area with Card Container */}
        <div className="flex-1 overflow-hidden p-4 pt-2">
          <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="h-full overflow-auto">
                <div className="p-6 space-y-6">
                  {/* Content Wrapper with Animated Container */}
                  <div className="animate-fade-in">
                    {children}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
