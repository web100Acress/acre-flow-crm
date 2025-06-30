
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Tickets from "./pages/Tickets";
import CreateUser from "./pages/CreateUser";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // In a real app, this would come from authentication context
  const userRole = "employee"; // Change this to test different roles: 'super-admin', 'head-admin', 'team-leader', 'employee'

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard userRole={userRole} />} />
            <Route path="/leads" element={<Leads userRole={userRole} />} />
            <Route path="/tickets" element={<TicketBoard userRole={userRole} />} />
            <Route path="/create-:type" element={<CreateUser userRole={userRole} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
