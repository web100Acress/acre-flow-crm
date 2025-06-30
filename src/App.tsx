
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Tickets from "./pages/Tickets";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("employee");

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('userRole') || 'employee';
    setIsLoggedIn(loggedIn);
    setUserRole(role);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/login" 
              element={!isLoggedIn ? <Login /> : <Navigate to="/" replace />} 
            />
            <Route 
              path="/" 
              element={isLoggedIn ? <Dashboard userRole={userRole} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path="/leads" 
              element={isLoggedIn ? <Leads userRole={userRole} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path="/tickets" 
              element={isLoggedIn ? <Tickets userRole={userRole} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path="/create-:type" 
              element={isLoggedIn ? <CreateUser userRole={userRole} /> : <Navigate to="/login" replace />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
