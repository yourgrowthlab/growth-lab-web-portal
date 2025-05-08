
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rizky Kurniawati, S.Gz., CPC",
      text: "The session with Coach Dewi was enjoyable and relaxed, making me feel safe and comfortable throughout. I gained valuable insights and clarity on actionable steps suited to my situation.",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-smiling-looking-happy-confident_176420-9434.jpg",
    },
    {
      name: "Siti Hamzah",
      text: "After just two coaching sessions with Coach Dewi, I became more confident in exploring my potential and realizing that many of the solutions to our challenges already lie within ourselves. Thank you, Coach Dewi!",
      image: "https://img.freepik.com/free-photo/portrait-young-asian-woman_23-2148128331.jpg",
    },
    {
      name: "Nuha Uswati",
      text: "A very engaging coaching session. I felt truly heard without judgment. Coach Dewi helped untangle my cluttered thoughts, making it easier to prioritize and take necessary actions.",
      image: "https://img.freepik.com/free-photo/positive-asian-girl-seeing-off-someone-waving-hand-saying-goodbye-standing-yellow-background_1258-123393.jpg",
    },
    {
      name: "Andrian Setiawan, Mentee",
      text: "It was a truly engaging and insightful experience. I really appreciate your deep HR expertise and the valuable real-world examples you shared. The session was interactive, enjoyable, and easy to follow. Your guidance gave me fresh perspectives that I can apply in my work.",
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg",
    },
    {
      name: "Arman F.",
      text: "Thank you, Bu Dewi, for a very meaningful mentoring session on career planning in HR. I gained valuable insights into career development strategies, especially in compensation and benefits, which are becoming increasingly complex and strategic.",
      image: "https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-wearing-white-traditional-indian-clothes-isolated-blue-background_231208-2815.jpg",
    },
    {
      name: "Ilham F. Apriansyah",
      text: "Thank you so much for the mentoring session, Bu. Previously, I thought being a good HR professional meant providing the ideal service to the company. But after our conversation, I realized that what's more important is offering relevant, realistic solutions suited to the company's condition.",
      image: "https://img.freepik.com/free-photo/young-asian-handsome-executive-glasses-thinking-while-working-late-project_231208-12008.jpg",
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
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
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
