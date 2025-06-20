
import React, { useState } from 'react';
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/4b7c7afd-ddb9-4ec3-8ba0-263b9df870d1.png" 
                alt="Your Growth Lab Logo" 
                className="h-14 mr-3" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light bg-clip-text text-transparent md:hidden lg:inline-block">
                YourGrowthLab
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-gray-700 hover:text-growthlab-teal font-medium transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-700 hover:text-growthlab-teal font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 hover:text-growthlab-teal font-medium transition-colors"
            >
              Contact
            </a>
            <Button 
              className="bg-growthlab-teal hover:bg-growthlab-dark text-white"
              onClick={() => scrollToSection('services')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-growthlab-teal focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-gray-700 hover:text-growthlab-teal font-medium py-2 transition-colors"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-gray-700 hover:text-growthlab-teal font-medium py-2 transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-gray-700 hover:text-growthlab-teal font-medium py-2 transition-colors"
              >
                Contact
              </a>
              <Button 
                className="bg-growthlab-teal hover:bg-growthlab-dark text-white w-full"
                onClick={() => scrollToSection('services')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
