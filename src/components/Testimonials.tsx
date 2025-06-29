
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Евгения П.',
      rating: 5,
      text: 'Отчет предоставил всю необходимую информацию для принятия обоснованного решения. Определенно стоит своих денег!',
      avatar: 'ЕП'
    },
    {
      id: 2,
      name: 'Александр М.',
      rating: 5,
      text: 'Быстро, удобно и информативно. Помог избежать покупки проблемного автомобиля. Рекомендую!',
      avatar: 'АМ'
    },
    {
      id: 3,
      name: 'Марина К.',
      rating: 5,
      text: 'Отличный сервис! Получила подробный отчет за пару минут. Очень помогло при покупке подержанного авто.',
      avatar: 'МК'
    },
    {
      id: 4,
      name: 'Дмитрий В.',
      rating: 5,
      text: 'Профессиональный подход к проверке автомобилей. Все данные точные и актуальные. Спасибо!',
      avatar: 'ДВ'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="relative">
          <Card className="p-8 bg-white shadow-lg border-0 min-h-[250px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </div>
            </div>
          </Card>

          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
