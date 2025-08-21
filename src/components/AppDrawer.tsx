import { useState } from 'react';
import { Home, Bookmark, Newspaper, CreditCard, Info, Shield, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AppDrawerProps {
  children: React.ReactNode;
}

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Bookmark, label: 'Saved Articles', path: '/saved' },
  { icon: Newspaper, label: 'Daily Digest', path: '/digest' },
  { icon: CreditCard, label: 'Subscription', path: '/subscription' },
  { icon: Info, label: 'About', path: '/about' },
  { icon: Shield, label: 'Privacy', path: '/privacy' },
];

export function AppDrawer({ children }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full w-80 bg-card border-r border-card-border shadow-drawer z-50 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-card-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">SmartScroll</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={cn(
                  'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-card-border">
          <p className="text-xs text-muted-foreground text-center">
            SmartScroll v1.0
            <br />
            Your daily 5-min news digest
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-card-border">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
                <Newspaper className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">SmartScroll</span>
            </div>
            <div className="w-10" /> {/* Spacer for balance */}
          </div>
        </div>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}
