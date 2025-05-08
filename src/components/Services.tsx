
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Book } from "lucide-react";

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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-growthlab-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive HR solutions designed to transform your organization's human capital strategy and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-custom hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-growthlab-dark">{service.title}</CardTitle>
                <CardDescription className="text-gray-700">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-growthlab-teal shrink-0"></div>
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
