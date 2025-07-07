
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, Eye, EyeOff, Hash, Code } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Static developer credentials
  const DEVELOPER_CREDENTIALS = {
    email: "amandev@gmail.com",
    password: "dev123"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check if it's developer login
    if (credentials.email === DEVELOPER_CREDENTIALS.email && 
        credentials.password === DEVELOPER_CREDENTIALS.password) {
      
      // Set developer session
      localStorage.setItem("isDeveloperLoggedIn", "true");
      localStorage.setItem("developerEmail", credentials.email);
      localStorage.setItem("developerName", "Aman Developer");
      localStorage.setItem("developerRole", "developer");
      
      navigate("/developer-dashboard");
      window.location.reload();
      setIsLoading(false);
      return;
    }

    // Regular user login
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.user.role);
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', data.user._id);
        navigate('/');
        window.location.reload();
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="container">
        {/* Left Side - Brand Section */}
        <div className="left">
          <h1 className="crm-title">100acres.com</h1>
          <p className="crm-subtitle">Rishto Ki Shuruwat</p>
          <p className="crm-desc">
            India's Best Property Site. Post and Search Your Property.
          </p>
          <div className="credentials-hint">
            <p className="hint-title">Developer Access:</p>
            <p className="hint-text">Email: amandev@gmail.com</p>
            <p className="hint-text">Password: dev123</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="right">
          <form className="login-box" onSubmit={handleSubmit}>
            <div className="logo-container">
              <Code size={40} />
            </div>
            <h2 className="login-heading">Welcome Back</h2>

            {error && <div className="error-msg">{error}</div>}

            {/* Email Input */}
            <div className="input-group">
              <AtSign className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <Hash className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
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

            {/* Options */}
            <div className="options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox"
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button className="login-btn" disabled={isLoading}>
              {isLoading ? "Signing In..." : "SIGN IN"}
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
          background: linear-gradient(135deg, #dc2626, #b91c1c);
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
          color: #fecaca;
        }

        .crm-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 400px;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .credentials-hint {
          background: rgba(254, 202, 202, 0.1);
          border: 1px solid rgba(254, 202, 202, 0.3);
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin-top: 2rem;
        }

        .hint-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fecaca;
          margin-bottom: 0.5rem;
        }

        .hint-text {
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          font-family: 'Courier New', monospace;
          color: #f3f4f6;
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
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            border-radius: 50%;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
            color: white;
        }

        .login-heading {
          font-size: 2rem;
          text-align: center;
          color: #dc2626;
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
            border-color: #dc2626;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
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
            accent-color: #dc2626;
        }

        .forgot-password {
            color: #dc2626;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .forgot-password:hover {
            color: #b91c1c;
            text-decoration: underline;
        }

        .login-btn {
          width: 100%;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          padding: 1rem 0;
          font-weight: 600;
          border-radius: 999px;
          transition: background-color 0.3s ease, transform 0.1s ease;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
        }

        .login-btn:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
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
            .forgot-password {
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
        }
      `}</style>
    </>
  );
};

export default Login;
