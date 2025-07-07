
import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Shield, 
  Activity, 
  Terminal, 
  Settings as SettingsIcon,
  FileText,
  Globe,
  Key,
  Zap,
  Monitor,
  GitBranch,
  Package,
  Bug,
  Wrench
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const DeveloperContent = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [systemStats, setSystemStats] = useState({
    serverStatus: 'Online',
    dbConnections: '45/100',
    memoryUsage: '2.4GB / 8GB',
    cpuUsage: '23%',
    apiCalls: '1,247 today',
    errorRate: '0.02%'
  });

  const { toast } = useToast();

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: Monitor },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'api', label: 'API Management', icon: Server },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'logs', label: 'System Logs', icon: FileText },
    { id: 'performance', label: 'Performance', icon: Activity },
    { id: 'deployment', label: 'Deployment', icon: GitBranch },
    { id: 'tools', label: 'Dev Tools', icon: Wrench }
  ];

  const handleAction = (action) => {
    toast({
      title: "Developer Action",
      description: `${action} executed successfully`,
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Server className="h-4 w-4" />
              Server Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{systemStats.serverStatus}</div>
            <p className="text-xs text-gray-500">Last checked: 2 mins ago</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Database className="h-4 w-4" />
              DB Connections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.dbConnections}</div>
            <p className="text-xs text-gray-500">Active connections</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Memory Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.memoryUsage}</div>
            <p className="text-xs text-gray-500">System memory</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="h-4 w-4" />
              CPU Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.cpuUsage}</div>
            <p className="text-xs text-gray-500">Current load</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4" />
              API Calls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.apiCalls}</div>
            <p className="text-xs text-gray-500">Request count</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Bug className="h-4 w-4" />
              Error Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{systemStats.errorRate}</div>
            <p className="text-xs text-gray-500">24h average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={() => handleAction('Cache Clear')} className="w-full justify-start">
              <Zap className="h-4 w-4 mr-2" />
              Clear System Cache
            </Button>
            <Button onClick={() => handleAction('DB Optimize')} className="w-full justify-start" variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Optimize Database
            </Button>
            <Button onClick={() => handleAction('Backup Create')} className="w-full justify-start" variant="outline">
              <Package className="h-4 w-4 mr-2" />
              Create System Backup
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span>Database backup completed</span>
                <span className="text-gray-500">2 hours ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Security scan passed</span>
                <span className="text-gray-500">4 hours ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span>System update deployed</span>
                <span className="text-gray-500">1 day ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Performance optimization</span>
                <span className="text-gray-500">2 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDatabase = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Database Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Database URL</label>
              <input
                type="password"
                defaultValue="mongodb://localhost:27017/100acres"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                readOnly
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => handleAction('DB Test Connection')}>
                <Database className="h-4 w-4 mr-2" />
                Test Connection
              </Button>
              <Button onClick={() => handleAction('DB Migrate')} variant="outline">
                <GitBranch className="h-4 w-4 mr-2" />
                Run Migrations
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Database Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Collections:</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Total Documents:</span>
                <span className="font-bold">15,847</span>
              </div>
              <div className="flex justify-between">
                <span>Database Size:</span>
                <span className="font-bold">245 MB</span>
              </div>
              <div className="flex justify-between">
                <span>Index Size:</span>
                <span className="font-bold">12 MB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Database Query Console</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              placeholder="Enter your MongoDB query here..."
              className="w-full h-32 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
              defaultValue="db.users.find({status: 'active'}).limit(10)"
            />
            <div className="flex gap-2">
              <Button onClick={() => handleAction('Query Execute')}>
                <Terminal className="h-4 w-4 mr-2" />
                Execute Query
              </Button>
              <Button onClick={() => handleAction('Query Explain')} variant="outline">
                Explain Query
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAPI = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Base URL</label>
              <input
                type="text"
                defaultValue="http://localhost:5001/api"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Rate Limit</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
              </select>
            </div>
            <Button onClick={() => handleAction('API Config Save')} className="w-full">
              Save Configuration
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-mono">GET /api/users</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono">POST /api/leads</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono">PUT /api/tickets</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono">DELETE /api/users/:id</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Limited</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Testing Console</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Method</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Endpoint</label>
                <input
                  type="text"
                  placeholder="/api/users"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Request Body (JSON)</label>
              <textarea
                placeholder='{"name": "Test User", "email": "test@example.com"}'
                className="w-full h-24 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
              />
            </div>
            <Button onClick={() => handleAction('API Test')}>
              <Globe className="h-4 w-4 mr-2" />
              Send Request
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">JWT Token Expiry</h4>
                <p className="text-sm text-gray-500">Current: 24 hours</p>
              </div>
              <select className="px-3 py-2 border border-gray-200 rounded-lg">
                <option>1 hour</option>
                <option>12 hours</option>
                <option>24 hours</option>
                <option>7 days</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Password Policy</h4>
                <p className="text-sm text-gray-500">Minimum requirements</p>
              </div>
              <select className="px-3 py-2 border border-gray-200 rounded-lg">
                <option>Basic (6 chars)</option>
                <option>Medium (8 chars + numbers)</option>
                <option>Strong (12 chars + special)</option>
              </select>
            </div>
            <Button onClick={() => handleAction('Security Update')} className="w-full">
              Update Security Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Master API Key</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  defaultValue="sk_live_abc123def456ghi789"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  readOnly
                />
                <Button onClick={() => handleAction('API Key Regenerate')} variant="outline">
                  <Key className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Webhook Secret</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  defaultValue="whsec_xyz789abc123def456"
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  readOnly
                />
                <Button onClick={() => handleAction('Webhook Secret Regenerate')} variant="outline">
                  <Key className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security Audit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button onClick={() => handleAction('Vulnerability Scan')} className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Run Vulnerability Scan
              </Button>
              <Button onClick={() => handleAction('Penetration Test')} variant="outline" className="w-full">
                <Bug className="h-4 w-4 mr-2" />
                Penetration Test
              </Button>
              <Button onClick={() => handleAction('Security Report')} variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800">Last Security Scan</h4>
              <p className="text-sm text-green-600">Completed 2 hours ago - No vulnerabilities found</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'database':
        return renderDatabase();
      case 'api':
        return renderAPI();
      case 'security':
        return renderSecurity();
      default:
        return (
          <div className="text-center py-8">
            <Code className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
            <p className="text-gray-500">This developer tool is under development</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Developer Console</h1>
        <p className="text-gray-600">Advanced system management and technical tools</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Developer Navigation */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-green-50 border-r-2 border-green-600 text-green-700' 
                      : 'text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Developer Content */}
        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const activeTabData = tabs.find(t => t.id === activeTab);
                  const IconComponent = activeTabData?.icon;
                  return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
                })()}
                {tabs.find(t => t.id === activeTab)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeveloperContent;
