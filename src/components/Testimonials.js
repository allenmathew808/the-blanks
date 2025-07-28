import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Designer',
      content: 'The quality of these tees is incredible! I love how I can create my own designs and they turn out exactly as I imagined.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Small Business Owner',
      content: 'Perfect for our company merch. The bulk ordering process was smooth and the custom branding looks professional.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emma Thompson',
      role: 'Student',
      content: 'Fast shipping and the prints are so vibrant! I get compliments every time I wear my custom tee.',
      rating: 5,
      avatar: 'ET'
    },
    {
      name: 'David Kim',
      role: 'Event Organizer',
      content: 'Used The Blanks for our event merchandise and couldn\'t be happier. Great quality and customer service.',
      rating: 5,
      avatar: 'DK'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-body font-bold text-charcoal-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg font-body text-charcoal-600">
            Real stories from real people who love our tees
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-taupe-50 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-body text-charcoal-800 mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-charcoal-800 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-body font-semibold text-charcoal-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm font-body text-charcoal-600">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal-600 hover:text-charcoal-800 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal-600 hover:text-charcoal-800 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-charcoal-800' 
                    : 'bg-charcoal-300 hover:bg-charcoal-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 