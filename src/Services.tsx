import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Users, Award, Book, Lightbulb } from "lucide-react";
import { AspectRatio } from "./aspect-ratio";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-growthlab-teal" />,
      title: "HR Consulting",
      description: "Strategic HR management solutions tailored to your organization's unique needs and challenges.",
      features: [
        "Organizational design and development",
        "Performance management systems",
        "Compensation and benefits strategy",
        "HR policy development and implementation"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Award className="h-12 w-12 text-growthlab-teal" />,
      title: "Professional Coaching",
      description: "Expert coaching to develop leadership skills and unlock the full potential of your team members.",
      features: [
        "Executive and leadership coaching",
        "Career development planning",
        "Team performance coaching",
        "Conflict resolution and management"
      ],
      image: "https://img.freepik.com/free-photo/business-people-shaking-hands_53876-13391.jpg"
    },
    {
      icon: <Book className="h-12 w-12 text-growthlab-teal" />,
      title: "HR Mentorship",
      description: "Guidance and support for HR professionals to enhance capabilities and drive organizational success.",
      features: [
        "HR professional development programs",
        "Best practices implementation",
        "HR technology integration support",
        "Mentoring for emerging HR leaders"
      ],
      image: "https://img.freepik.com/free-photo/business-people-discussing-meeting_53876-24371.jpg"
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-growthlab-teal" />,
      title: "Soft Skills Training",
      description: "Comprehensive training programs to develop essential soft skills that drive personal and organizational excellence.",
      features: [
        "Leadership development",
        "Personal effectiveness",
        "Career and personal growth",
        "Communication and interpersonal skills"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-growthlab-teal to-growthlab-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive HR programs designed to enhance talent, strengthen leadership, and build people strategies that drive sustainable growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-custom hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0 w-full md:w-[calc(25%-1rem)]" style={{animationDelay: `${0.2 * index}s`}}>
              <AspectRatio ratio={16/9} className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
              <CardHeader className="pb-2">
                <div className="mb-3 p-3 bg-gradient-to-br from-growthlab-light-blue to-growthlab-light inline-block rounded-lg">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-growthlab-dark bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">{service.title}</CardTitle>
                <CardDescription className="text-gray-700 text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-growthlab-teal to-growthlab-light shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
