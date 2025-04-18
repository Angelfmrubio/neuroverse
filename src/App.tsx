
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import LibrosPage from "./pages/LibrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import SobreMiPage from "./pages/SobreMiPage";
import ContactoPage from "./pages/ContactoPage";
import TiendaPage from "./pages/tienda";
import AIPage from "./pages/AIPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Index />} />
          <Route path="/libros" element={<LibrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/tienda" element={<TiendaPage />} />
          <Route path="/ia" element={<AIPage />} />
          <Route path="/matrix" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Update the document title
document.title = "Neuro Music";

export default App;
