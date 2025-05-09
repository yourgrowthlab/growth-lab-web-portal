
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Check, Target, Lightbulb, Star, Users, RefreshCw } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const brandImageUrl = "/public/lovable-uploads/4169702f-3d18-482b-8e43-feebcfb61d71.png";
  
  const values = [
    {
      number: 1,
      title: "Integrity",
      description: "Upholding honesty, transparency, and ethical practices in all interactions.",
      icon: <Check className="h-8 w-8 text-white" />
    },
    {
      number: 2,
      title: "Empowerment",
      description: "Inspiring confidence and self-discovery for sustainable growth.",
      icon: <Lightbulb className="h-8 w-8 text-white" />
    },
    {
      number: 3,
      title: "Excellence",
      description: "Delivering high-quality services and measurable results.",
      icon: <Star className="h-8 w-8 text-white" />
    },
    {
      number: 4,
      title: "Collaboration",
      description: "Building meaningful partnerships for mutual success.",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      number: 5,
      title: "Innovation",
      description: "Continuously adapting to create forward-thinking solutions.",
      icon: <RefreshCw className="h-8 w-8 text-white" />
    }
  ];

  const approaches = [
    "Pragmatic",
    "Holistic View",
    "Customized Solutions",
    "Sustainable Impact"
  ];

  return (
    <section id="about" className="section-padding bg-growthlab-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
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
          
          <div className="flex flex-col gap-8 animate-fade-in opacity-0" style={{animationDelay: "0.2s"}}>
            <Card className="border-none shadow-custom overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={brandImageUrl}
                  alt="Brand Narratives" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-custom hover:shadow-md transition-all duration-300 bg-gradient-to-br from-growthlab-dark to-growthlab-teal text-white">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-growthlab-teal/30 p-3 rounded-full shadow-sm">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{value.number}. {value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 border-none shadow-custom bg-gradient-to-r from-growthlab-teal to-growthlab-dark text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Approach</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {approaches.map((approach, index) => (
                  <div key={index} className="p-4 bg-white/10 rounded-lg">
                    <p className="text-lg font-semibold">
                      {index === 0 && "*) "}
                      {index === 1 && "**) "}
                      {index === 2 && "***) "}
                      {index === 3 && "****) "}
                      {approach}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
