
import React from 'react';
import DeveloperContent from '../components/DeveloperContent';
import { LogOut, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeveloperDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isDeveloperLoggedIn');
    localStorage.removeItem('developerEmail');
    localStorage.removeItem('developerName');
    localStorage.removeItem('developerRole');
    navigate('/developer-login');
    window.location.reload();
  };

  const developerName = localStorage.getItem('developerName') || 'Developer';

  return (
    <div className="developer-dashboard">
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
            <span className="user-name">{developerName}</span>
            <span className="user-role">System Developer</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Developer Content */}
      <main className="developer-main">
        <DeveloperContent userRole="developer" />
      </main>

      <style>{`
        .developer-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          font-family: 'Inter', sans-serif;
        }

        .developer-header {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 2px solid #334155;
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

        .developer-main {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
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

          .developer-main {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperDashboard;
