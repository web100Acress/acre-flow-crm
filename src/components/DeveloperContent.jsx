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
  LogOut,
  Upload,
  Download,
  RefreshCw,
  Clock,
  Cpu,
  HardDrive,
  Network,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Play,
  Pause,
  BarChart3
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

  const renderLogs = () => (
    <div className="content-section">
      <div className="logs-header">
        <div className="logs-controls">
          <select className="log-filter">
            <option>All Logs</option>
            <option>Error Logs</option>
            <option>Warning Logs</option>
            <option>Info Logs</option>
            <option>Debug Logs</option>
          </select>
          <button onClick={() => handleAction('Logs Refresh')} className="log-button">
            <RefreshCw className="button-icon" />
            Refresh
          </button>
          <button onClick={() => handleAction('Logs Clear')} className="log-button">
            <XCircle className="button-icon" />
            Clear
          </button>
          <button onClick={() => handleAction('Logs Export')} className="log-button">
            <Download className="button-icon" />
            Export
          </button>
        </div>
      </div>

      <div className="logs-container">
        <div className="log-entry error">
          <span className="log-time">2025-01-07 11:42:07</span>
          <span className="log-level error">ERROR</span>
          <span className="log-message">Database connection timeout after 30 seconds</span>
          <span className="log-source">db.connection.js:45</span>
        </div>
        <div className="log-entry warning">
          <span className="log-time">2025-01-07 11:41:52</span>
          <span className="log-level warning">WARN</span>
          <span className="log-message">High memory usage detected: 85% of available RAM</span>
          <span className="log-source">monitor.js:123</span>
        </div>
        <div className="log-entry info">
          <span className="log-time">2025-01-07 11:41:30</span>
          <span className="log-level info">INFO</span>
          <span className="log-message">User authentication successful for admin@100acres.com</span>
          <span className="log-source">auth.controller.js:67</span>
        </div>
        <div className="log-entry info">
          <span className="log-time">2025-01-07 11:41:15</span>
          <span className="log-level info">INFO</span>
          <span className="log-message">API request processed: GET /api/leads - 200ms response</span>
          <span className="log-source">api.router.js:234</span>
        </div>
        <div className="log-entry debug">
          <span className="log-time">2025-01-07 11:40:58</span>
          <span className="log-level debug">DEBUG</span>
          <span className="log-message">Cache hit for user session: session_abc123def456</span>
          <span className="log-source">cache.service.js:89</span>
        </div>
      </div>

      <div className="logs-stats">
        <div className="stat-item">
          <XCircle className="stat-icon error" />
          <div className="stat-info">
            <span className="stat-value">12</span>
            <span className="stat-label">Errors (24h)</span>
          </div>
        </div>
        <div className="stat-item">
          <AlertTriangle className="stat-icon warning" />
          <div className="stat-info">
            <span className="stat-value">28</span>
            <span className="stat-label">Warnings (24h)</span>
          </div>
        </div>
        <div className="stat-item">
          <CheckCircle className="stat-icon success" />
          <div className="stat-info">
            <span className="stat-value">1,247</span>
            <span className="stat-label">Info Messages (24h)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="content-section">
      <div className="performance-grid">
        <div className="perf-card">
          <div className="card-header">
            <h3 className="card-title">
              <Cpu className="card-icon" />
              CPU Performance
            </h3>
          </div>
          <div className="card-content">
            <div className="perf-metric">
              <span className="metric-label">Current Load</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{width: '23%'}}></div>
              </div>
              <span className="metric-value">23%</span>
            </div>
            <div className="perf-metric">
              <span className="metric-label">Peak Load (24h)</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{width: '67%'}}></div>
              </div>
              <span className="metric-value">67%</span>
            </div>
            <div className="perf-stats">
              <div className="perf-stat">
                <span>Cores:</span>
                <span>8</span>
              </div>
              <div className="perf-stat">
                <span>Threads:</span>
                <span>16</span>
              </div>
            </div>
          </div>
        </div>

        <div className="perf-card">
          <div className="card-header">
            <h3 className="card-title">
              <HardDrive className="card-icon" />
              Memory Usage
            </h3>
          </div>
          <div className="card-content">
            <div className="perf-metric">
              <span className="metric-label">RAM Usage</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{width: '30%'}}></div>
              </div>
              <span className="metric-value">2.4GB / 8GB</span>
            </div>
            <div className="perf-metric">
              <span className="metric-label">Disk Usage</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{width: '45%'}}></div>
              </div>
              <span className="metric-value">225GB / 500GB</span>
            </div>
          </div>
        </div>

        <div className="perf-card">
          <div className="card-header">
            <h3 className="card-title">
              <Network className="card-icon" />
              Network Performance
            </h3>
          </div>
          <div className="card-content">
            <div className="perf-metric">
              <span className="metric-label">Bandwidth Usage</span>
              <div className="metric-bar">
                <div className="metric-fill" style={{width: '35%'}}></div>
              </div>
              <span className="metric-value">350 Mbps</span>
            </div>
            <div className="perf-stats">
              <div className="perf-stat">
                <span>Latency:</span>
                <span>45ms</span>
              </div>
              <div className="perf-stat">
                <span>Packet Loss:</span>
                <span>0.1%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="perf-card">
          <div className="card-header">
            <h3 className="card-title">
              <BarChart3 className="card-icon" />
              API Performance
            </h3>
          </div>
          <div className="card-content">
            <div className="perf-stats">
              <div className="perf-stat">
                <span>Avg Response Time:</span>
                <span>245ms</span>
              </div>
              <div className="perf-stat">
                <span>Requests/sec:</span>
                <span>127</span>
              </div>
              <div className="perf-stat">
                <span>Success Rate:</span>
                <span>99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="performance-actions">
        <button onClick={() => handleAction('Performance Benchmark')} className="perf-button primary">
          <Activity className="button-icon" />
          Run Performance Test
        </button>
        <button onClick={() => handleAction('Memory Cleanup')} className="perf-button">
          <RefreshCw className="button-icon" />
          Clear Memory Cache
        </button>
        <button onClick={() => handleAction('Performance Report')} className="perf-button">
          <FileText className="button-icon" />
          Generate Report
        </button>
      </div>
    </div>
  );

  const renderDeployment = () => (
    <div className="content-section">
      <div className="deployment-grid">
        <div className="deploy-card">
          <div className="card-header">
            <h3 className="card-title">
              <GitBranch className="card-icon" />
              Current Deployment
            </h3>
          </div>
          <div className="card-content">
            <div className="deploy-info">
              <div className="deploy-item">
                <span className="deploy-label">Version:</span>
                <span className="deploy-value">v2.1.4</span>
              </div>
              <div className="deploy-item">
                <span className="deploy-label">Branch:</span>
                <span className="deploy-value">main</span>
              </div>
              <div className="deploy-item">
                <span className="deploy-label">Commit:</span>
                <span className="deploy-value">a1b2c3d</span>
              </div>
              <div className="deploy-item">
                <span className="deploy-label">Deployed:</span>
                <span className="deploy-value">2 hours ago</span>
              </div>
            </div>
            <div className="deploy-status">
              <CheckCircle className="status-icon success" />
              <span className="status-text">Deployment Successful</span>
            </div>
          </div>
        </div>

        <div className="deploy-card">
          <div className="card-header">
            <h3 className="card-title">
              <Server className="card-icon" />
              Environment Status
            </h3>
          </div>
          <div className="card-content">
            <div className="env-list">
              <div className="env-item">
                <span className="env-name">Production</span>
                <span className="env-status active">Active</span>
                <span className="env-version">v2.1.4</span>
              </div>
              <div className="env-item">
                <span className="env-name">Staging</span>
                <span className="env-status active">Active</span>
                <span className="env-version">v2.1.5-beta</span>
              </div>
              <div className="env-item">
                <span className="env-name">Development</span>
                <span className="env-status active">Active</span>
                <span className="env-version">v2.2.0-dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deployment-actions">
        <div className="action-section">
          <h4 className="action-title">Quick Deploy</h4>
          <div className="action-buttons">
            <button onClick={() => handleAction('Deploy to Staging')} className="deploy-button">
              <Upload className="button-icon" />
              Deploy to Staging
            </button>
            <button onClick={() => handleAction('Deploy to Production')} className="deploy-button primary">
              <Upload className="button-icon" />
              Deploy to Production
            </button>
          </div>
        </div>

        <div className="action-section">
          <h4 className="action-title">Rollback</h4>
          <div className="action-buttons">
            <button onClick={() => handleAction('Rollback Previous')} className="deploy-button warning">
              <RefreshCw className="button-icon" />
              Rollback to v2.1.3
            </button>
          </div>
        </div>
      </div>

      <div className="deployment-history">
        <div className="card-header">
          <h3 className="card-title">Deployment History</h3>
        </div>
        <div className="card-content">
          <div className="history-list">
            <div className="history-item">
              <div className="history-info">
                <span className="history-version">v2.1.4</span>
                <span className="history-time">2 hours ago</span>
                <span className="history-user">admin@100acres.com</span>
              </div>
              <span className="history-status success">Success</span>
            </div>
            <div className="history-item">
              <div className="history-info">
                <span className="history-version">v2.1.3</span>
                <span className="history-time">1 day ago</span>
                <span className="history-user">dev@100acres.com</span>
              </div>
              <span className="history-status success">Success</span>
            </div>
            <div className="history-item">
              <div className="history-info">
                <span className="history-version">v2.1.2</span>
                <span className="history-time">3 days ago</span>
                <span className="history-user">admin@100acres.com</span>
              </div>
              <span className="history-status failed">Failed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTools = () => (
    <div className="content-section">
      <div className="tools-grid">
        <div className="tool-card">
          <div className="card-header">
            <h3 className="card-title">
              <Terminal className="card-icon" />
              Command Console
            </h3>
          </div>
          <div className="card-content">
            <div className="console-output">
              <div className="console-line">$ npm run build</div>
              <div className="console-line output">Building application...</div>
              <div className="console-line output">✓ Build completed successfully</div>
              <div className="console-line">$ </div>
            </div>
            <div className="console-input">
              <input
                type="text"
                placeholder="Enter command..."
                className="command-input"
              />
              <button onClick={() => handleAction('Execute Command')} className="execute-button">
                <Play className="button-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="card-header">
            <h3 className="card-title">
              <Package className="card-icon" />
              Package Manager
            </h3>
          </div>
          <div className="card-content">
            <div className="package-actions">
              <button onClick={() => handleAction('Check Updates')} className="package-button">
                <RefreshCw className="button-icon" />
                Check Updates
              </button>
              <button onClick={() => handleAction('Install Dependencies')} className="package-button">
                <Download className="button-icon" />
                Install Dependencies
              </button>
              <button onClick={() => handleAction('Audit Security')} className="package-button">
                <Shield className="button-icon" />
                Security Audit
              </button>
            </div>
            <div className="package-info">
              <div className="package-stat">
                <span>Total Packages:</span>
                <span>247</span>
              </div>
              <div className="package-stat">
                <span>Outdated:</span>
                <span>12</span>
              </div>
              <div className="package-stat">
                <span>Vulnerabilities:</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="card-header">
            <h3 className="card-title">
              <Code className="card-icon" />
              Code Analysis
            </h3>
          </div>
          <div className="card-content">
            <div className="analysis-actions">
              <button onClick={() => handleAction('Lint Code')} className="analysis-button">
                <Bug className="button-icon" />
                Run Linter
              </button>
              <button onClick={() => handleAction('Format Code')} className="analysis-button">
                <Wrench className="button-icon" />
                Format Code
              </button>
              <button onClick={() => handleAction('Test Coverage')} className="analysis-button">
                <BarChart3 className="button-icon" />
                Test Coverage
              </button>
            </div>
            <div className="analysis-results">
              <div className="result-item">
                <span>Code Quality:</span>
                <span className="result-score good">A+</span>
              </div>
              <div className="result-item">
                <span>Test Coverage:</span>
                <span className="result-score good">89%</span>
              </div>
              <div className="result-item">
                <span>Maintainability:</span>
                <span className="result-score good">A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tool-card">
          <div className="card-header">
            <h3 className="card-title">
              <Monitor className="card-icon" />
              System Monitor
            </h3>
          </div>
          <div className="card-content">
            <div className="monitor-controls">
              <button onClick={() => handleAction('Start Monitoring')} className="monitor-button primary">
                <Play className="button-icon" />
                Start Monitor
              </button>
              <button onClick={() => handleAction('Stop Monitoring')} className="monitor-button">
                <Pause className="button-icon" />
                Stop Monitor
              </button>
            </div>
            <div className="monitor-status">
              <div className="status-item">
                <Clock className="status-icon" />
                <span>Uptime: 5d 12h 34m</span>
              </div>
              <div className="status-item">
                <Activity className="status-icon" />
                <span>Last Check: 30s ago</span>
              </div>
            </div>
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
      case 'logs':
        return renderLogs();
      case 'performance':
        return renderPerformance();
      case 'deployment':
        return renderDeployment();
      case 'tools':
        return renderTools();
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

        /* System Logs Styles */
        .logs-header {
          margin-bottom: 1.5rem;
        }

        .logs-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .log-filter {
          padding: 0.5rem 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #2d3748;
        }

        .log-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .log-button:hover {
          background: #e2e8f0;
        }

        .logs-container {
          background: #1a202c;
          border-radius: 0.75rem;
          padding: 1rem;
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 1.5rem;
          font-family: 'Monaco', 'Consolas', monospace;
        }

        .log-entry {
          display: grid;
          grid-template-columns: auto auto 1fr auto;
          gap: 1rem;
          padding: 0.5rem;
          border-bottom: 1px solid #2d3748;
          font-size: 0.875rem;
          align-items: center;
        }

        .log-entry:last-child {
          border-bottom: none;
        }

        .log-time {
          color: #a0aec0;
          font-size: 0.75rem;
        }

        .log-level {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-align: center;
          min-width: 60px;
        }

        .log-level.error {
          background: #feb2b2;
          color: #742a2a;
        }

        .log-level.warning {
          background: #fbd38d;
          color: #975a16;
        }

        .log-level.info {
          background: #bee3f8;
          color: #2a69ac;
        }

        .log-level.debug {
          background: #c6f6d5;
          color: #22543d;
        }

        .log-message {
          color: #e2e8f0;
        }

        .log-source {
          color: #a0aec0;
          font-size: 0.75rem;
        }

        .logs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .stat-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .stat-icon.error {
          color: #e53e3e;
        }

        .stat-icon.warning {
          color: #dd6b20;
        }

        .stat-icon.success {
          color: #38a169;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2d3748;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #718096;
        }

        /* Performance Styles */
        .performance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .performance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .perf-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .perf-metric {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .metric-label {
          font-size: 0.875rem;
          color: #4a5568;
          margin-right: 1rem;
        }

        .metric-bar {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          margin: 0 1rem;
          overflow: hidden;
        }

        .metric-fill {
          height: 100%;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          transition: width 0.3s ease;
        }

        .metric-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2d3748;
          min-width: 80px;
          text-align: right;
        }

        .perf-stats {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .perf-stat {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .perf-stat span:first-child {
          color: #4a5568;
        }

        .perf-stat span:last-child {
          font-weight: 600;
          color: #2d3748;
        }

        .performance-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .perf-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .perf-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .perf-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        /* Deployment Styles */
        .deployment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .deployment-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .deploy-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .deploy-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .deploy-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .deploy-label {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .deploy-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2d3748;
        }

        .deploy-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #f0fff4;
          border: 1px solid #c6f6d5;
          border-radius: 0.5rem;
        }

        .status-icon {
          width: 1rem;
          height: 1rem;
        }

        .status-icon.success {
          color: #38a169;
        }

        .status-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #22543d;
        }

        .env-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .env-item {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 1rem;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 0.5rem;
        }

        .env-name {
          font-weight: 500;
          color: #2d3748;
        }

        .env-status {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .env-status.active {
          background: #c6f6d5;
          color: #22543d;
        }

        .env-version {
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.75rem;
          color: #4a5568;
        }

        .deployment-actions {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .action-section {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .action-title {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .deploy-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .deploy-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .deploy-button.warning {
          background: #fed7aa;
          color: #9a3412;
          border-color: #fdba74;
        }

        .deploy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .deployment-history {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 0.5rem;
        }

        .history-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .history-version {
          font-family: 'Monaco', 'Consolas', monospace;
          font-weight: 600;
          color: #2d3748;
        }

        .history-time {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .history-user {
          font-size: 0.875rem;
          color: #718096;
        }

        .history-status {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .history-status.success {
          background: #c6f6d5;
          color: #22543d;
        }

        .history-status.failed {
          background: #fed7d7;
          color: #742a2a;
        }

        /* Dev Tools Styles */
        .tools-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .tool-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .console-output {
          background: #1a202c;
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.875rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .console-line {
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .console-line.output {
          color: #68d391;
        }

        .console-input {
          display: flex;
          gap: 0.5rem;
        }

        .command-input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-family: 'Monaco', 'Consolas', monospace;
          font-size: 0.875rem;
        }

        .execute-button {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .package-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .package-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .package-button:hover {
          background: #e2e8f0;
        }

        .package-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .package-stat {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .analysis-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .analysis-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .analysis-button:hover {
          background: #e2e8f0;
        }

        .analysis-results {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .result-score {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: 600;
          font-size: 0.75rem;
        }

        .result-score.good {
          background: #c6f6d5;
          color: #22543d;
        }

        .monitor-controls {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .monitor-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #f8fafc;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .monitor-button.primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border-color: #dc2626;
        }

        .monitor-button:hover {
          background: #e2e8f0;
        }

        .monitor-button.primary:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
        }

        .monitor-status {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #4a5568;
        }

        .status-icon {
          width: 1rem;
          height: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .logs-controls {
            flex-direction: column;
            align-items: stretch;
          }

          .logs-stats {
            grid-template-columns: 1fr;
          }

          .performance-grid {
            grid-template-columns: 1fr;
          }

          .deployment-grid {
            grid-template-columns: 1fr;
          }

          .tools-grid {
            grid-template-columns: 1fr;
          }

          .performance-actions {
            flex-direction: column;
          }

          .action-buttons {
            flex-direction: column;
          }

          .monitor-controls {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default DeveloperContent;
