import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import Guidelines from "./pages/Guidelines";
import Food from "./pages/Food";
import Problems from "./pages/Problems";
import Organizers from "./pages/Organizers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Register />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/food" element={<Food />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;