import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Shield, 
  Activity, 
  Terminal, 
  FileText,
  Globe,
  Key,
  Zap,
  Monitor,
  GitBranch,
  Package,
  Bug,
  Wrench,
  Users,
  UserCheck,
  Crown,
  Briefcase,
  LogOut
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isDeveloperLoggedIn');
    localStorage.removeItem('developerEmail');
    localStorage.removeItem('developerName');
    localStorage.removeItem('developerRole');
    navigate('/login');
    window.location.reload();
  };

  const developerName = localStorage.getItem('developerName') || 'Developer';

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: Monitor },
    { id: 'access-control', label: 'Access Control', icon: Users },
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

  const handleAccessSection = (section, role) => {
    // Set temporary session for the role
    localStorage.setItem('tempUserRole', role);
    localStorage.setItem('tempUserEmail', 'developer@access.com');
    localStorage.setItem('tempUserName', 'Developer Access');
    localStorage.setItem('isLoggedIn', 'true');
    
    navigate(section);
    toast({
      title: "Access Granted",
      description: `Accessing ${section} as ${role}`,
    });
  };

  const renderAccessControl = () => (
    <div className="content-section">
      <div className="cards-grid">
        <div className="access-card">
          <div className="card-header">
            <h3 className="card-title">
              <Crown className="card-icon purple" />
              Super Admin Access
            </h3>
          </div>
          <div className="card-content">
            <p className="card-description">
              Full system access with all administrative privileges
            </p>
            <div className="button-list">
              <button
                onClick={() => handleAccessSection('/', 'super-admin')}
                className="access-button"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleAccessSection('/users', 'super-admin')}
                className="access-button"
              >
                User Management
              </button>
              <button
                onClick={() => handleAccessSection('/settings', 'super-admin')}
                className="access-button"
              >
                System Settings
              </button>
              <button
                onClick={() => handleAccessSection('/create-admin', 'super-admin')}
                className="access-button"
              >
                Create Admin
              </button>
            </div>
          </div>
        </div>

        <div className="access-card">
          <div className="card-header">
            <h3 className="card-title">
              <UserCheck className="card-icon blue" />
              Head Admin Access
            </h3>
          </div>
          <div className="card-content">
            <p className="card-description">
              Administrative access with team management capabilities
            </p>
            <div className="button-list">
              <button
                onClick={() => handleAccessSection('/', 'head-admin')}
                className="access-button"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleAccessSection('/create-leader', 'head-admin')}
                className="access-button"
              >
                Create Team Leader
              </button>
              <button
                onClick={() => handleAccessSection('/team', 'head-admin')}
                className="access-button"
              >
                Team Management
              </button>
            </div>
          </div>
        </div>

        <div className="access-card">
          <div className="card-header">
            <h3 className="card-title">
              <Briefcase className="card-icon green" />
              Team Leader Access
            </h3>
          </div>
          <div className="card-content">
            <p className="card-description">
              Team leadership with employee management capabilities
            </p>
            <div className="button-list">
              <button
                onClick={() => handleAccessSection('/', 'team-leader')}
                className="access-button"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleAccessSection('/create-employee', 'team-leader')}
                className="access-button"
              >
                Create Employee
              </button>
              <button
                onClick={() => handleAccessSection('/employees', 'team-leader')}
                className="access-button"
              >
                My Employees
              </button>
            </div>
          </div>
        </div>

        <div className="access-card">
          <div className="card-header">
            <h3 className="card-title">
              <Users className="card-icon orange" />
              Employee Access
            </h3>
          </div>
          <div className="card-content">
            <p className="card-description">
              Standard employee access with basic functionality
            </p>
            <div className="button-list">
              <button
                onClick={() => handleAccessSection('/', 'employee')}
                className="access-button"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleAccessSection('/leads', 'employee')}
                className="access-button"
              >
                Leads Management
              </button>
              <button
                onClick={() => handleAccessSection('/tickets', 'employee')}
                className="access-button"
              >
                Support Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-switch-card">
        <div className="card-header">
          <h3 className="card-title">Quick Role Switch</h3>
        </div>
        <div className="card-content">
          <div className="quick-buttons">
            <button
              onClick={() => handleAccessSection('/', 'super-admin')}
              className="quick-button"
            >
              <Crown className="quick-icon purple" />
              <span>Super Admin</span>
            </button>
            <button
              onClick={() => handleAccessSection('/', 'head-admin')}
              className="quick-button"
            >
              <UserCheck className="quick-icon blue" />
              <span>Head Admin</span>
            </button>
            <button
              onClick={() => handleAccessSection('/', 'team-leader')}
              className="quick-button"
            >
              <Briefcase className="quick-icon green" />
              <span>Team Leader</span>
            </button>
            <button
              onClick={() => handleAccessSection('/', 'employee')}
              className="quick-button"
            >
              <Users className="quick-icon orange" />
              <span>Employee</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="content-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Server className="stat-icon" />
              Server Status
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value green">{systemStats.serverStatus}</div>
            <p className="stat-description">Last checked: 2 mins ago</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Database className="stat-icon" />
              DB Connections
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value">{systemStats.dbConnections}</div>
            <p className="stat-description">Active connections</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Activity className="stat-icon" />
              Memory Usage
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value">{systemStats.memoryUsage}</div>
            <p className="stat-description">System memory</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Zap className="stat-icon" />
              CPU Usage
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value">{systemStats.cpuUsage}</div>
            <p className="stat-description">Current load</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Globe className="stat-icon" />
              API Calls
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value">{systemStats.apiCalls}</div>
            <p className="stat-description">Request count</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-title">
              <Bug className="stat-icon" />
              Error Rate
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-value green">{systemStats.errorRate}</div>
            <p className="stat-description">24h average</p>
          </div>
        </div>
      </div>

      <div className="overview-cards">
        <div className="action-card">
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <div className="card-content">
            <button onClick={() => handleAction('Cache Clear')} className="action-button primary">
              <Zap className="button-icon" />
              Clear System Cache
            </button>
            <button onClick={() => handleAction('DB Optimize')} className="action-button">
              <Database className="button-icon" />
              Optimize Database
            </button>
            <button onClick={() => handleAction('Backup Create')} className="action-button">
              <Package className="button-icon" />
              Create System Backup
            </button>
          </div>
        </div>

        <div className="activity-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activities</h3>
          </div>
          <div className="card-content">
            <div className="activity-list">
              <div className="activity-item">
                <span>Database backup completed</span>
                <span className="activity-time">2 hours ago</span>
              </div>
              <div className="activity-item">
                <span>Security scan passed</span>
                <span className="activity-time">4 hours ago</span>
              </div>
              <div className="activity-item">
                <span>System update deployed</span>
                <span className="activity-time">1 day ago</span>
              </div>
              <div className="activity-item">
                <span>Performance optimization</span>
                <span className="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDatabase = () => (
    <div className="content-section">
      <div className="db-cards">
        <div className="db-card">
          <div className="card-header">
            <h3 className="card-title">Database Management</h3>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label className="form-label">Database URL</label>
              <input
                type="password"
                defaultValue="mongodb://localhost:27017/100acres"
                className="form-input"
                readOnly
              />
            </div>
            <div className="button-group">
              <button onClick={() => handleAction('DB Test Connection')} className="db-button primary">
                <Database className="button-icon" />
                Test Connection
              </button>
              <button onClick={() => handleAction('DB Migrate')} className="db-button">
                <GitBranch className="button-icon" />
                Run Migrations
              </button>
            </div>
          </div>
        </div>

        <div className="db-card">
          <div className="card-header">
            <h3 className="card-title">Database Statistics</h3>
          </div>
          <div className="card-content">
            <div className="db-stats">
              <div className="db-stat">
                <span>Total Collections:</span>
                <span className="stat-number">12</span>
              </div>
              <div className="db-stat">
                <span>Total Documents:</span>
                <span className="stat-number">15,847</span>
              </div>
              <div className="db-stat">
                <span>Database Size:</span>
                <span className="stat-number">245 MB</span>
              </div>
              <div className="db-stat">
                <span>Index Size:</span>
                <span className="stat-number">12 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="query-card">
        <div className="card-header">
          <h3 className="card-title">Database Query Console</h3>
        </div>
        <div className="card-content">
          <textarea
            placeholder="Enter your MongoDB query here..."
            className="query-textarea"
            defaultValue="db.users.find({status: 'active'}).limit(10)"
          />
          <div className="query-buttons">
            <button onClick={() => handleAction('Query Execute')} className="query-button primary">
              <Terminal className="button-icon" />
              Execute Query
            </button>
            <button onClick={() => handleAction('Query Explain')} className="query-button">
              Explain Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAPI = () => (
    <div className="content-section">
      <div className="api-cards">
        <div className="api-card">
          <div className="card-header">
            <h3 className="card-title">API Configuration</h3>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label className="form-label">Base URL</label>
              <input
                type="text"
                defaultValue="http://localhost:5001/api"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Rate Limit</label>
              <select className="form-select">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
              </select>
            </div>
            <button onClick={() => handleAction('API Config Save')} className="api-button primary">
              Save Configuration
            </button>
          </div>
        </div>

        <div className="api-card">
          <div className="card-header">
            <h3 className="card-title">API Endpoints</h3>
          </div>
          <div className="card-content">
            <div className="endpoint-list">
              <div className="endpoint-item">
                <span className="endpoint-path">GET /api/users</span>
                <span className="status-badge active">Active</span>
              </div>
              <div className="endpoint-item">
                <span className="endpoint-path">POST /api/leads</span>
                <span className="status-badge active">Active</span>
              </div>
              <div className="endpoint-item">
                <span className="endpoint-path">PUT /api/tickets</span>
                <span className="status-badge active">Active</span>
              </div>
              <div className="endpoint-item">
                <span className="endpoint-path">DELETE /api/users/:id</span>
                <span className="status-badge limited">Limited</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="api-test-card">
        <div className="card-header">
          <h3 className="card-title">API Testing Console</h3>
        </div>
        <div className="card-content">
          <div className="test-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Method</label>
                <select className="form-select">
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Endpoint</label>
                <input
                  type="text"
                  placeholder="/api/users"
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Request Body (JSON)</label>
              <textarea
                placeholder='{"name": "Test User", "email": "test@example.com"}'
                className="form-textarea"
              />
            </div>
            <button onClick={() => handleAction('API Test')} className="test-button primary">
              <Globe className="button-icon" />
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="content-section">
      <div className="security-cards">
        <div className="security-card">
          <div className="card-header">
            <h3 className="card-title">Security Settings</h3>
          </div>
          <div className="card-content">
            <div className="security-setting">
              <div className="setting-info">
                <h4 className="setting-name">JWT Token Expiry</h4>
                <p className="setting-desc">Current: 24 hours</p>
              </div>
              <select className="setting-select">
                <option>1 hour</option>
                <option>12 hours</option>
                <option>24 hours</option>
                <option>7 days</option>
              </select>
            </div>
            <div className="security-setting">
              <div className="setting-info">
                <h4 className="setting-name">Password Policy</h4>
                <p className="setting-desc">Minimum requirements</p>
              </div>
              <select className="setting-select">
                <option>Basic (6 chars)</option>
                <option>Medium (8 chars + numbers)</option>
                <option>Strong (12 chars + special)</option>
              </select>
            </div>
            <button onClick={() => handleAction('Security Update')} className="security-button primary">
              Update Security Settings
            </button>
          </div>
        </div>

        <div className="security-card">
          <div className="card-header">
            <h3 className="card-title">API Keys</h3>
          </div>
          <div className="card-content">
            <div className="key-group">
              <label className="form-label">Master API Key</label>
              <div className="key-input">
                <input
                  type="password"
                  defaultValue="sk_live_abc123def456ghi789"
                  className="key-field"
                  readOnly
                />
                <button onClick={() => handleAction('API Key Regenerate')} className="key-button">
                  <Key className="key-icon" />
                </button>
              </div>
            </div>
            <div className="key-group">
              <label className="form-label">Webhook Secret</label>
              <div className="key-input">
                <input
                  type="password"
                  defaultValue="whsec_xyz789abc123def456"
                  className="key-field"
                  readOnly
                />
                <button onClick={() => handleAction('Webhook Secret Regenerate')} className="key-button">
                  <Key className="key-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="audit-card">
        <div className="card-header">
          <h3 className="card-title">Security Audit</h3>
        </div>
        <div className="card-content">
          <div className="audit-buttons">
            <button onClick={() => handleAction('Vulnerability Scan')} className="audit-button primary">
              <Shield className="button-icon" />
              Run Vulnerability Scan
            </button>
            <button onClick={() => handleAction('Penetration Test')} className="audit-button">
              <Bug className="button-icon" />
              Penetration Test
            </button>
            <button onClick={() => handleAction('Security Report')} className="audit-button">
              <FileText className="button-icon" />
              Generate Report
            </button>
          </div>
          <div className="audit-info">
            <h4 className="audit-title">Last Security Scan</h4>
            <p className="audit-desc">Completed 2 hours ago - No vulnerabilities found</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'access-control':
        return renderAccessControl();
      case 'database':
        return renderDatabase();
      case 'api':
        return renderAPI();
      case 'security':
        return renderSecurity();
      default:
        return (
          <div className="coming-soon">
            <Code className="coming-soon-icon" />
            <h3 className="coming-soon-title">Coming Soon</h3>
            <p className="coming-soon-desc">This developer tool is under development</p>
          </div>
        );
    }
  };

  return (
    <>
      <div className="developer-console">
        {/* Developer Header */}
        <header className="developer-header">
          <div className="header-left">
            <Code className="header-icon" />
            <div className="header-title">
              <h1>Developer Console</h1>
              <p>100acres.com Technical Management</p>
            </div>
          </div>
          
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">Welcome, {developerName}</span>
              <span className="user-role">System Developer</span>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </header>

        <div className="console-header">
          <h1 className="console-title">Developer Console</h1>
          <p className="console-subtitle">Advanced system management and technical tools</p>
        </div>

        <div className="console-layout">
          {/* Developer Navigation */}
          <Card className="nav-panel">
            <CardContent className="nav-content">
              <nav className="nav-menu">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    <tab.icon className="nav-icon" />
                    <span className="nav-text">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Developer Content */}
          <div className="content-panel">
            <Card className="content-card">
              <CardHeader>
                <CardTitle className="content-title">
                  {(() => {
                    const activeTabData = tabs.find(t => t.id === activeTab);
                    const IconComponent = activeTabData?.icon;
                    return IconComponent ? <IconComponent className="title-icon" /> : null;
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .developer-console {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
          padding: 0;
        }

        /* Developer Header */
        .developer-header {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 2px solid #334155;
          margin-bottom: 2rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-icon {
          width: 40px;
          height: 40px;
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.1);
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .header-title h1 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: #06b6d4;
        }

        .header-title p {
          font-size: 0.9rem;
          margin: 0;
          color: #94a3b8;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .user-name {
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .user-role {
          font-size: 0.8rem;
          color: #06b6d4;
          font-weight: 500;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          transform: translateY(-1px);
        }

        .console-header {
          margin-bottom: 2rem;
          padding: 0 1.5rem;
        }

        .console-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .console-subtitle {
          color: #718096;
          font-size: 1rem;
        }

        .console-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 0 1.5rem;
        }

        @media (min-width: 1024px) {
          .console-layout {
            grid-template-columns: 1fr 4fr;
          }
        }

        /* Navigation Panel */
        .nav-panel {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #e2e8f0;
        }

        .nav-content {
          padding: 0;
        }

        .nav-menu {
          padding: 0.5rem 0;
        }

        .nav-item {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #4a5568;
          border-radius: 0.5rem;
          margin: 0.25rem 0.5rem;
        }

        .nav-item:hover {
          background: #f0f4f8;
          transform: translateX(5px);
        }

        .nav-item.active {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .nav-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.75rem;
        }

        .nav-text {
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Content Panel */
        .content-panel {
          flex: 1;
        }

        .content-card {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #e2e8f0;
        }

        .content-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #2d3748;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .title-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        /* Content Sections */
        .content-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Access Control */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .access-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .access-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          margin-bottom: 1rem;
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }

        .card-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .card-icon.purple { color: #8b5cf6; }
        .card-icon.blue { color: #3b82f6; }
        .card-icon.green { color: #10b981; }
        .card-icon.orange { color: #f97316; }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-description {
          font-size: 0.875rem;
          color: #718096;
          line-height: 1.6;
        }

        .button-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .access-button {
          width: 100%;
          padding: 0.75rem 1rem;
          text-align: left;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .access-button:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          transform: translateX(5px);
        }

        .quick-switch-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .quick-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .quick-buttons {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .quick-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .quick-button:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
        }

        .quick-icon {
          width: 1.5rem;
          height: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .quick-icon.purple { color: #8b5cf6; }
        .quick-icon.blue { color: #3b82f6; }
        .quick-icon.green { color: #10b981; }
        .quick-icon.orange { color: #f97316; }

        .quick-button:hover .quick-icon {
          color: white;
        }

        .quick-button span {
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Overview */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-header {
          margin-bottom: 1rem;
        }

        .stat-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
        }

        .stat-icon {
          width: 1rem;
          height: 1rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .stat-value.green {
          color: #10b981;
        }

        .stat-description {
          font-size: 0.75rem;
          color: #718096;
        }

        .overview-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .overview-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .action-card, .activity-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .action-button {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .action-button:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .button-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .activity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          border-bottom: 1px dashed #e2e8f0;
          font-size: 0.875rem;
        }

        .activity-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .activity-time {
          color: #718096;
          font-size: 0.75rem;
        }

        /* Database */
        .db-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .db-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .db-card, .query-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #2d3748;
          background: #f8fafc;
          transition: all 0.2s ease;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        .button-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .db-button, .query-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .db-button.primary, .query-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .db-button:hover, .query-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .db-stats {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .db-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed #e2e8f0;
        }

        .db-stat:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .stat-number {
          font-weight: 700;
          color: #2d3748;
        }

        .query-textarea {
          min-height: 8rem;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.75rem;
          background: #1a202c;
          color: #e2e8f0;
          border-color: #4a5568;
        }

        .query-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        /* API */
        .api-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .api-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .api-card, .api-test-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .api-button, .test-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .api-button.primary, .test-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .endpoint-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .endpoint-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .endpoint-path {
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.75rem;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .status-badge.active {
          background: #d1fae5;
          color: #065f46;
        }

        .status-badge.limited {
          background: #fef3c7;
          color: #92400e;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .test-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Security */
        .security-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .security-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .security-card, .audit-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .security-setting {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px dashed #e2e8f0;
        }

        .security-setting:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .setting-info {
          flex: 1;
        }

        .setting-name {
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.25rem;
        }

        .setting-desc {
          font-size: 0.875rem;
          color: #718096;
        }

        .setting-select {
          padding: 0.5rem 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #2d3748;
          background: #f8fafc;
        }

        .security-button, .audit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 1rem;
        }

        .security-button.primary, .audit-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .key-group {
          margin-bottom: 1rem;
        }

        .key-input {
          display: flex;
          gap: 0.5rem;
        }

        .key-field {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #2d3748;
          background: #f8fafc;
        }

        .key-button {
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .key-button:hover {
          background: #e2e8f0;
        }

        .key-icon {
          width: 1rem;
          height: 1rem;
        }

        .audit-buttons {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .audit-buttons {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .audit-info {
          background: #ecfdf5;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #d1fae5;
        }

        .audit-title {
          font-weight: 500;
          color: #047857;
          margin-bottom: 0.25rem;
        }

        .audit-desc {
          font-size: 0.875rem;
          color: #065f46;
        }

        /* Coming Soon */
        .coming-soon {
          text-align: center;
          padding: 3rem 0;
        }

        .coming-soon-icon {
          width: 4rem;
          height: 4rem;
          color: #10b981;
          margin: 0 auto 1rem;
        }

        .coming-soon-title {
          font-size: 1.125rem;
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .coming-soon-desc {
          color: #718096;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .developer-console {
            padding: 0rem;
          }

          .developer-header {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .header-left {
            justify-content: center;
          }

          .header-right {
            justify-content: center;
            width: 100%;
          }

          .user-info {
            align-items: center;
          }

          .console-title {
            font-size: 1.5rem;
          }

          .console-layout {
            gap: 1rem;
            padding: 0 1rem;
          }

          .nav-item {
            padding: 0.5rem 0.75rem;
          }

          .nav-text {
            font-size: 0.75rem;
          }

          .content-title {
            font-size: 1.25rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .quick-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .button-group {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .audit-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default DeveloperContent;
