
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle, Users, FileText, Award, Star } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Developing HR Policies and SOPs for a Construction Company",
      description: "A client from the construction sector approached us to strengthen their HR governance by developing two key HR policies and standard operating procedures (SOPs). The first covered Resignation, Selection & Onboarding, ensuring a seamless employee lifecycle from recruitment to exit, and minimizing operational disruptions.",
      outcome: "The outcome was a set of formal, pragmatic policies that enhanced compliance, safeguarded employee relations, and supported operational continuity.",
      icon: <FileText className="h-12 w-12 text-growthlab-teal" />,
      image: "https://img.freepik.com/free-photo/construction-team-discussing-building-project-site-with-blueprint_23-2149089455.jpg",
    },
    {
      title: "Strategy for Employee Rationalization Amid Business Decline",
      description: "Following the sharp decline in their business operations and revenue, a construction client sought our expertise to develop a strategy for employee rationalization. We provided an end-to-end solution that included workforce analysis, identification of critical roles, communication planning, and risk mitigation measures.",
      outcome: "The client successfully navigated a difficult phase with minimal reputational damage, while maintaining the morale of retained employees and preparing the organization for recovery.",
      icon: <Users className="h-12 w-12 text-growthlab-teal" />,
      image: "https://img.freepik.com/free-photo/business-team-analyzing-charts-graphs-meeting_1262-2059.jpg",
    },
    {
      title: "Mentoring an HRGA Supervisor to Build an HR Framework",
      description: "An HR mentee, working as an HRGA Supervisor at a small-sized company, engaged us for mentorship to build a credible HR framework. We worked closely with the mentee over several sessions, helping them understand the fundamentals of HR management, including policy development, talent acquisition, and performance management.",
      outcome: "The engagement strengthened both the mentee's professional growth and the company's HR maturity.",
      icon: <Award className="h-12 w-12 text-growthlab-teal" />,
      image: "https://img.freepik.com/free-photo/businesswoman-meeting-with-colleagues-sharing-ideas_23-2149189972.jpg",
    },
    {
      title: "Personalized Career Planning for a Mentee",
      description: "A mentee approached us for guidance in designing a personalized career plan that aligned with their aspirations and strengths. Through a combination of self-assessment tools, reflective exercises, and one-on-one coaching, we helped the mentee clarify their career goals and identify key development areas.",
      outcome: "The result was a clear, motivating career roadmap that empowered the mentee to take charge of their professional journey with confidence and purpose.",
      icon: <Star className="h-12 w-12 text-growthlab-teal" />,
      image: "https://img.freepik.com/free-photo/two-businesswomen-having-meeting-office_23-2149190076.jpg",
    },
    {
      title: "Coaching a Client to Strengthen Leadership and Resource Discipline",
      description: "A coaching client, a business owner, sought support to enhance her leadership capabilities, particularly in becoming more disciplined in utilizing her resources to ensure the sustainability of her business. We provided focused leadership coaching that combined practical techniques with mindset shifts.",
      outcome: "The client developed stronger self-discipline, improved her decision-making, and established systems that optimized her business operations for long-term success.",
      icon: <Users className="h-12 w-12 text-growthlab-teal" />,
      image: "https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg",
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">
            Case Studies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore how we've helped organizations and individuals overcome challenges and achieve their goals through our tailored solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="border-none shadow-custom hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in opacity-0"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <AspectRatio ratio={16/9} className="bg-growthlab-light-blue/20">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
              <CardHeader className="pb-2 relative">
                <div className="absolute -top-8 left-6 p-3 bg-white rounded-full shadow-lg">
                  {study.icon}
                </div>
                <CardTitle className="text-xl font-bold ml-20 text-growthlab-dark mt-2">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-700 mb-4">{study.description}</p>
                <div className="bg-gradient-to-r from-growthlab-light-blue/30 to-transparent p-4 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-growthlab-teal mr-2 mt-1" />
                    <p className="font-medium text-growthlab-dark">{study.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
