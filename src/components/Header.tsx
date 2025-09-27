import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Menu, User, Zap } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-trust flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MicroCredit AI</h1>
                <p className="text-xs text-muted-foreground">Financial Inclusion Platform</p>
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('dashboard')} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('loans')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Loans
            </button>
            <button 
              onClick={() => scrollToSection('learn')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Learn
            </button>
            <button 
              onClick={() => scrollToSection('insights')} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Insights
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Credit Score Badge */}
            <Badge className="hidden sm:flex bg-secondary text-secondary-foreground">
              Score: 742
            </Badge>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;