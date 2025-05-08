
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlock Your <span className="text-growthlab-teal">HR Potential</span> with Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Your Growth Lab delivers cutting-edge HR consulting, professional coaching, and mentorship to elevate your organization's human capital strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-growthlab-teal hover:bg-growthlab-dark text-white px-8 py-6 text-lg">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-growthlab-teal text-growthlab-teal hover:bg-growthlab-light px-8 py-6 text-lg">
                Book a Consultation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="bg-white p-6 rounded-xl shadow-custom">
              <div className="bg-growthlab-light-blue rounded-lg p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-growthlab-dark">Transforming HR Practices</h3>
                <p className="text-gray-700">
                  Join the 200+ organizations who have revolutionized their HR approach with Your Growth Lab's expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
