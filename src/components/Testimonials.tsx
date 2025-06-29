
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'First-time car buyer',
      rating: 5,
      text: 'AutoCheck saved me from buying a car with hidden damage! The report was incredibly detailed and easy to understand. Worth every penny!',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Car dealer',
      rating: 5,
      text: 'As a dealer, I use AutoCheck for all my inventory. Fast, reliable, and comprehensive reports that my customers trust.',
      avatar: 'MR'
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Used car shopper',
      rating: 5,
      text: 'The instant report feature is amazing! Got all the information I needed in seconds. Highly recommend for anyone buying used cars.',
      avatar: 'EC'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Auto enthusiast',
      rating: 5,
      text: 'Professional service with accurate data. The detailed history helped me negotiate a better price. Excellent value!',
      avatar: 'DT'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AutoCheck for their vehicle history needs
          </p>
        </div>

        <div className="relative">
          <Card className="p-10 bg-white shadow-2xl border-0 rounded-3xl min-h-[320px] flex flex-col justify-center relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200" />
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </Card>

          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-14 h-14 rounded-full bg-white shadow-xl hover:bg-gray-50 border border-gray-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-14 h-14 rounded-full bg-white shadow-xl hover:bg-gray-50 border border-gray-200"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
