import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetStarted = () => {
    // Scroll to CTA section
    const ctaSection = document.getElementById('demo-form');
    if (ctaSection) {
      ctaSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src="/assets/images/The_iVault_bg.png" 
                alt="iVault Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">iVault</span>
            </div> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button 
            variant="default" 
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-bold"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-250"
          aria-label="Toggle mobile menu"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in">
          <nav className="px-6 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <div className="pt-4 border-t border-border">
              <Button 
                variant="default" 
                size="sm"
                fullWidth
                className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-bold"
                onClick={() => {
                  handleGetStarted();
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;