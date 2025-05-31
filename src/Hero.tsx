
import React from 'react';
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "./aspect-ratio";

const Hero = () => {
  return (
    <div className="hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlock Your <span className="text-growthlab-teal bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light bg-clip-text">HR Potential</span> with Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Your Growth Lab delivers cutting-edge HR consulting, professional coaching, and mentorship to elevate your organization's human capital strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light hover:bg-growthlab-dark text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-growthlab-teal text-growthlab-teal hover:bg-growthlab-light px-8 py-6 text-lg shadow-sm hover:shadow-md transition-all"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="bg-white p-6 rounded-xl shadow-custom hover:shadow-xl transition-all duration-300 overflow-hidden">
              <AspectRatio ratio={16/10} className="bg-growthlab-light-blue rounded-lg overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/business-people-discussing-graphs_53876-30391.jpg" 
                  alt="HR professionals in a consulting session" 
                  className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-growthlab-dark/70 to-transparent p-5 text-white">
                  <h3 className="text-2xl font-bold mb-2">Transforming HR Practices</h3>
                  <p className="text-white/90">
                    Join the 200+ organizations who have revolutionized their HR approach with Your Growth Lab's expert guidance.
                  </p>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
