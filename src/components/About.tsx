
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Users, TrendingUp, Handshake } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-growthlab-teal" />,
      title: "People-Centered",
      description: "We believe that people are the most valuable asset in any organization."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-growthlab-teal" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable improvements and tangible outcomes."
    },
    {
      icon: <Handshake className="h-8 w-8 text-growthlab-teal" />,
      title: "Collaborative Excellence",
      description: "We partner closely with clients to achieve sustainable success together."
    }
  ];

  return (
    <section id="about" className="section-padding bg-growthlab-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">About Your Growth Lab</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-growthlab-teal to-growthlab-light mb-8"></div>

            <div className="mb-8 overflow-hidden rounded-xl shadow-custom">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://img.freepik.com/free-photo/group-business-professionals-having-meeting_53876-14805.jpg" 
                  alt="Your Growth Lab Team" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
            </div>
            
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
          
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold mb-2 animate-fade-in opacity-0">Our Core Values</h3>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-custom hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-growthlab-light-blue/20 animate-fade-in opacity-0" style={{animationDelay: `${0.2 * index}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-to-br from-growthlab-light-blue to-white p-3 rounded-full shadow-sm">{value.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-growthlab-dark">{value.title}</h4>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
