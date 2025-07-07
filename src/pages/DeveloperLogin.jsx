import React, { useState } from "react";
import { Eye, EyeOff, AtSign, Hash, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from '/image/logo.png';

const DeveloperLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Static developer credentials
  const DEVELOPER_CREDENTIALS = {
    email: "developer@100acres.com",
    password: "dev123admin"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API delay
    setTimeout(() => {
      if (credentials.email === DEVELOPER_CREDENTIALS.email && 
          credentials.password === DEVELOPER_CREDENTIALS.password) {
        
        // Set developer session
        localStorage.setItem("isDeveloperLoggedIn", "true");
        localStorage.setItem("developerEmail", credentials.email);
        localStorage.setItem("developerName", "Developer");
        localStorage.setItem("developerRole", "developer");
        
        navigate("/developer-dashboard");
        window.location.reload();
      } else {
        setError("Invalid developer credentials");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="container">
        {/* Left Side (Developer Theme) */}
        <div className="left developer-theme">
          <Code className="developer-icon" />
          <h1 className="crm-title">Developer Console</h1>
          <p className="crm-subtitle">Advanced System Management</p>
          <p className="crm-desc">
            Access technical tools, database management, API configurations, and system monitoring
          </p>
          <div className="credentials-hint">
            <p className="hint-title">Developer Credentials:</p>
            <p className="hint-text">Email: developer@100acres.com</p>
            <p className="hint-text">Password: dev123admin</p>
          </div>
        </div>

        {/* Right Side (Login Form) */}
        <div className="right">
          <form className="login-box" onSubmit={handleSubmit}>
            <div className="logo-container developer-logo">
              <Code size={40} />
            </div>
            <h2 className="login-heading">Developer Access</h2>

            {error && <div className="error-msg">{error}</div>}

            <div className="input-group">
              <AtSign className="input-icon" />
              <input
                type="email"
                placeholder="Developer Email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <Hash className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Developer Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="options">
              <label className="remember-me">
                <input type="checkbox" className="checkbox" /> Remember Me
              </label>
              <a href="/login" className="back-to-main">Back to Main Login</a>
            </div>

            <button className="login-btn developer-btn" disabled={isLoading}>
              {isLoading ? "Authenticating..." : "ACCESS DEVELOPER CONSOLE"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
          display: flex;
          min-height: 100vh;
          overflow: hidden;
        }

        .left {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 3rem;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          position: relative;
        }

        .developer-theme {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border: 2px solid #334155;
        }

        .developer-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 1.5rem;
          color: #06b6d4;
        }

        .crm-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .crm-subtitle {
          font-size: 1.6rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          color: #06b6d4;
        }

        .crm-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 400px;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .credentials-hint {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin-top: 2rem;
        }

        .hint-title {
          font-size: 1rem;
          font-weight: 600;
          color: #06b6d4;
          margin-bottom: 0.5rem;
        }

        .hint-text {
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          font-family: 'Courier New', monospace;
          color: #e2e8f0;
        }

        .right {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        }

        .login-box {
          width: 100%;
          max-width: 700px;
          background: white;
          padding: 3.5rem 3rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeIn 1s ease-out;
          border: 2px solid #e2e8f0;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .logo-container {
            margin-bottom: 2rem;
            border-radius: 50%;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        }

        .developer-logo {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: #06b6d4;
        }

        .login-heading {
          font-size: 2rem;
          text-align: center;
          color: #1e293b;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .input-group {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          margin-bottom: 1.2rem;
          padding: 0.75rem 1rem;
          background: #ffffff;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease-in-out;
          width: 100%;
        }

        .input-group:focus-within {
            border-color: #06b6d4;
            box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
        }

        .input-icon {
          color: #9ca3af;
          margin-right: 0.75rem;
        }

        .input-group input {
          border: none;
          outline: none;
          flex: 1;
          background: transparent;
          font-size: 1rem;
          color: #374151;
        }

        .input-group input::placeholder {
            color: #9ca3af;
        }

        .eye-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          padding: 0 0.5rem;
          display: flex;
          align-items: center;
        }

        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          margin-bottom: 1.8rem;
          width: 100%;
        }

        .remember-me {
            display: flex;
            align-items: center;
            color: #4b5563;
        }

        .remember-me .checkbox {
            margin-right: 0.5rem;
            accent-color: #06b6d4;
        }

        .back-to-main {
            color: #06b6d4;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .back-to-main:hover {
            color: #0891b2;
            text-decoration: underline;
        }

        .login-btn {
          width: 100%;
          color: white;
          padding: 1rem 0;
          font-weight: 600;
          border-radius: 999px;
          transition: background-color 0.3s ease, transform 0.1s ease;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
        }

        .developer-btn {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          box-shadow: 0 4px 15px rgba(30, 41, 59, 0.4);
        }

        .developer-btn:hover {
          background: linear-gradient(135deg, #0f172a, #020617);
          transform: translateY(-2px);
        }

        .login-btn:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        .error-msg {
          background-color: #fee2e2;
          border: 1px solid #fecaca;
          padding: 0.75rem;
          color: #b91c1c;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          width: 100%;
        }

        /* Responsive adjustments */
        @media screen and (max-width: 992px) {
            .crm-title {
                font-size: 3rem;
            }
            .crm-subtitle {
                font-size: 1.4rem;
            }
            .crm-desc {
                font-size: 1rem;
            }
            .login-heading {
                font-size: 1.8rem;
            }
            .login-box {
                padding: 2.5rem 2rem;
            }
            .developer-icon {
                width: 60px;
                height: 60px;
            }
        }

        @media screen and (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .left {
            width: 100%;
            clip-path: none;
            padding: 3rem 1.5rem;
            min-height: 250px;
          }

          .right {
            width: 100%;
            padding: 2rem 1.5rem;
          }

          .login-box {
            max-width: 400px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
          }

          .crm-title {
            font-size: 2.8rem;
          }

          .crm-subtitle {
            font-size: 1.3rem;
          }

          .crm-desc {
            font-size: 0.95rem;
            max-width: 90%;
          }
          
          .login-heading {
            font-size: 1.6rem;
          }
          
          .developer-icon {
            width: 50px;
            height: 50px;
          }
        }

        @media screen and (max-width: 480px) {
            .login-box {
                padding: 1.5rem 1rem;
            }
            .login-heading {
                font-size: 1.4rem;
            }
            .input-group {
                padding: 0.6rem 0.8rem;
            }
            .input-group input {
                font-size: 0.9rem;
            }
            .options {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            .back-to-main {
                margin-top: 0.5rem;
            }
            .login-btn {
                font-size: 1rem;
                padding: 0.8rem 0;
            }
            .crm-title {
                font-size: 2.2rem;
            }
            .crm-subtitle {
                font-size: 1.1rem;
            }
            .crm-desc {
                font-size: 0.85rem;
            }
            .developer-icon {
                width: 40px;
                height: 40px;
            }
        }
      `}</style>
    </>
  );
};

export default DeveloperLogin;
