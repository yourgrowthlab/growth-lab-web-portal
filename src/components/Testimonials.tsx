
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rizky Kurniawati, S.Gz., CPC",
      text: "The session with Coach Dewi was enjoyable and relaxed, making me feel safe and comfortable throughout. I gained valuable insights and clarity on actionable steps suited to my situation.",
      image: "https://img.freepik.com/free-vector/business-woman-working-laptop_23-2148178963.jpg",
      initials: "RK"
    },
    {
      name: "Siti Hamzah",
      text: "After just two coaching sessions with Coach Dewi, I became more confident in exploring my potential and realizing that many of the solutions to our challenges already lie within ourselves. Thank you, Coach Dewi!",
      image: "https://img.freepik.com/free-vector/hand-drawn-business-woman-concept_52683-76157.jpg",
      initials: "SH"
    },
    {
      name: "Nuha Uswati",
      text: "A very engaging coaching session. I felt truly heard without judgment. Coach Dewi helped untangle my cluttered thoughts, making it easier to prioritize and take necessary actions.",
      image: "https://img.freepik.com/free-vector/muslim-woman-working-laptop-cartoon-character_71593-1085.jpg",
      initials: "NU"
    },
    {
      name: "Andrian Setiawan",
      text: "It was a truly engaging and insightful experience. I really appreciate your deep HR expertise and the valuable real-world examples you shared. The session was interactive, enjoyable, and easy to follow. Your guidance gave me fresh perspectives that I can apply in my work.",
      image: "https://img.freepik.com/free-vector/hand-drawn-business-man-concept_52683-76157.jpg",
      initials: "AS"
    },
    {
      name: "Arman F.",
      text: "Thank you, Bu Dewi, for a very meaningful mentoring session on career planning in HR. I gained valuable insights into career development strategies, especially in compensation and benefits, which are becoming increasingly complex and strategic.",
      image: "https://img.freepik.com/free-vector/businessman-working-laptop-office-3d-illustration_1150-52059.jpg",
      initials: "AF"
    },
    {
      name: "Ilham F. Apriansyah",
      text: "Thank you so much for the mentoring session, Bu. Previously, I thought being a good HR professional meant providing the ideal service to the company. But after our conversation, I realized that what's more important is offering relevant, realistic solutions suited to the company's condition.",
      image: "public/lovable-uploads/d73a973e-9791-47a8-825a-952191c91dca.png",
      initials: "IF"
    }
  ];

  const renderStars = () => {
    return (
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5 fill-yellow-400 text-yellow-400" 
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-growthlab-light-blue/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-growthlab-dark to-growthlab-teal bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-growthlab-teal to-growthlab-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how our HR consulting, coaching, and mentorship services have helped professionals and organizations achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-custom hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-growthlab-light-blue/10 animate-fade-in opacity-0" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-growthlab-teal">
                    <Avatar className="h-16 w-16">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                      />
                      <AvatarFallback className="bg-growthlab-teal text-white">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="font-semibold text-growthlab-dark">{testimonial.name}</h4>
                    {renderStars()}
                  </div>
                </div>
                <div className="pl-4 border-l-4 border-growthlab-light-blue">
                  <p className="italic text-gray-700">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
