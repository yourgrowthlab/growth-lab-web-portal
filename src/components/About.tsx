
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "Upholding honesty, transparency, and ethical practices in all interactions."
    },
    {
      title: "Empowerment",
      description: "Inspiring confidence and self-discovery for sustainable growth."
    },
    {
      title: "Excellence",
      description: "Delivering high-quality services and measurable results."
    },
    {
      title: "Collaboration",
      description: "Building meaningful partnerships for mutual success."
    },
    {
      title: "Innovation",
      description: "Continuously adapting to create forward-thinking solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-growthlab-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">About Your Growth Lab</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-growthlab-teal to-growthlab-light mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Your Growth Lab is a premier HR consulting firm dedicated to helping organizations optimize their human capital strategies through expert consulting, coaching, and mentorship.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              With decades of combined experience across diverse industries, our team of HR professionals, certified coaches, and industry experts brings a unique blend of strategic insight and practical implementation expertise.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              We partner with organizations of all sizes to address their most pressing HR challenges and unlock their full potential through customized solutions that drive sustainable growth and success.
            </p>
            
            <div className="flex items-center">
              <a href="#contact" className="text-growthlab-teal font-medium text-lg flex items-center group bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                Connect with our team
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 animate-fade-in opacity-0" style={{animationDelay: "0.2s"}}>
            <Card className="border-none shadow-custom bg-gradient-to-br from-growthlab-dark to-growthlab-teal text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be a trusted partner for individuals to unlock their potentials through personalized coaching and mentoring, for organizational to drive excellence through innovative HR strategies and best-in-class HR practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-custom bg-gradient-to-br from-growthlab-teal to-growthlab-dark text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg">
                  To empower individuals and organizations by providing tailored guidance, fostering growth, and implementing impactful HR solutions. This includes helping corporations design, review, and resolve HR strategies, people management, and workplace culture to achieve sustainable excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in opacity-0" style={{animationDelay: "0.4s"}}>
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">Our Core Values</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-custom hover:shadow-md transition-all duration-300 bg-gradient-to-br from-growthlab-dark to-growthlab-teal text-white flex-1 min-w-[200px] max-w-[220px]">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
