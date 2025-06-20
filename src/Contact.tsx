
import React from 'react';
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Mail, MessageSquare, Globe } from "lucide-react";
import { AspectRatio } from "./aspect-ratio";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-growthlab-teal" />,
      title: "Email",
      info: "info@yourgrowthlab.biz.id",
      link: "mailto:info@yourgrowthlab.biz.id"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-growthlab-teal" />,
      title: "Phone",
      info: "+62 (811) 880-9814",
      link: "tel:+6281188089814"
    },
    {
      icon: <Globe className="h-6 w-6 text-growthlab-teal" />,
      title: "Website",
      info: "www.yourgrowthlab.biz.id",
      link: "https://www.yourgrowthlab.biz.id"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-growthlab-light-blue/10 to-white opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">Contact Us</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to transform your organization's HR strategy? Get in touch with our team of experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-white to-growthlab-light-blue/30 p-8 rounded-xl shadow-custom animate-fade-in opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-growthlab-dark">Send Us a Message</h3>
            
            <div className="mb-6 overflow-hidden rounded-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Contact Your Growth Lab" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Full Name" 
                      className="border-growthlab-teal-light focus:border-growthlab-teal"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="border-growthlab-teal-light focus:border-growthlab-teal"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    placeholder="Company Name" 
                    className="border-growthlab-teal-light focus:border-growthlab-teal"
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="border-growthlab-teal-light focus:border-growthlab-teal"
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="border-growthlab-teal-light focus:border-growthlab-teal min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-growthlab-teal to-growthlab-teal-light hover:bg-growthlab-dark text-white w-full shadow-md hover:shadow-lg transition-all"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="animate-fade-in opacity-0" style={{animationDelay: "0.2s"}}>
            <h3 className="text-2xl font-bold mb-6 text-growthlab-dark">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Our team of HR experts is ready to answer your questions and discuss how we can help your organization achieve its goals.
            </p>
            
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="flex items-start p-4 rounded-lg hover:bg-growthlab-light transition-colors duration-300"
                >
                  <div className="mr-4 mt-1 bg-gradient-to-br from-white to-growthlab-light-blue p-3 rounded-full shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-medium mb-1 text-growthlab-dark">{item.title}</h4>
                    <p className="text-gray-700">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-custom">
              <h4 className="text-xl font-bold mb-4 text-growthlab-dark">Get In Touch</h4>
              <div className="flex items-start text-gray-700">
                <span className="mr-3">📍</span>
                <span>Sawangan Permai Depok</span>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-6 rounded-xl shadow-custom">
              <h4 className="text-xl font-bold mb-4 text-growthlab-dark">Office Hours</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-white to-growthlab-light-blue/20 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Monday - Friday</p>
                  <p className="text-gray-700">9:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-gradient-to-r from-white to-growthlab-light-blue/20 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Saturday</p>
                  <p className="text-gray-700">10:00 AM - 2:00 PM</p>
                </div>
                <div className="col-span-2 bg-gradient-to-r from-white to-growthlab-light-blue/20 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">Sunday</p>
                  <p className="text-gray-700">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
