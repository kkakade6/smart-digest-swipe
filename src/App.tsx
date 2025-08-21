// src/App.tsx
import { ENV } from '@/lib/env';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppDrawer } from './components/AppDrawer';
import Home from './pages/Home';
import DailyDigest from './pages/DailyDigest';
import SavedArticles from './pages/SavedArticles';
import Subscription from './pages/Subscription';
import About from './pages/About';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// Create the QueryClient once (outside the component) to avoid recreating it on every render
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppDrawer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/digest" element={<DailyDigest />} />
              <Route path="/saved" element={<SavedArticles />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppDrawer>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
