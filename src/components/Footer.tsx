
import React from 'react';
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-growthlab-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Your Growth Lab</h3>
            <p className="mb-6 text-gray-300">
              Transforming organizations through expert HR consulting, professional coaching, and mentorship.
            </p>
            <div className="text-growthlab-teal-light font-bold">
              yourgrowthlab.website
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Professional Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  HR Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Organizational Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Leadership Training
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-growthlab-teal-light flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <p className="flex items-start text-gray-300">
                <span className="mr-3">📍</span>
                123 Business Avenue, Suite 500, New York, NY 10001
              </p>
              <p className="flex items-start text-gray-300">
                <span className="mr-3">📞</span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-start text-gray-300">
                <span className="mr-3">✉️</span>
                info@yourgrowthlab.website
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Your Growth Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
