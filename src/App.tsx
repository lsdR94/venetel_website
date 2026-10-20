import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Funcionalidades from "./pages/Funcionalidades";
import Precios from "./pages/Precios";
import Ayuda from "./pages/Ayuda";
import Legal from "./pages/Legal";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Las rutas, sin router.
 *
 * Están aparte para que el prerender del build pueda envolverlas en
 * StaticRouter: BrowserRouter lee window.location y no existe en Node.
 * Ver scripts/prerender.mjs.
 */
export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/funcionalidades" element={<Funcionalidades />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="/contact" element={<Contacto />} />

      {/* Tres documentos, tres URLs: una por cada campo que pide Meta en
          Configuración → Básica. Ninguno repite el contenido de otro. */}
      <Route path="/terminos-de-uso" element={<Legal />} />
      <Route path="/privacidad" element={<Legal />} />
      <Route path="/eliminacion-datos" element={<Legal />} />

      {/* /legal no tiene contenido propio. En producción la resuelve
          public/_redirects con un 301; acá queda para que `npm run dev` se
          comporte igual. */}
      <Route path="/legal" element={<Navigate to="/terminos-de-uso" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

/** Envoltorio común al navegador y al prerender. */
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
