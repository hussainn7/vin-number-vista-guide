
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: {
        EN: "Excellent service! The report was detailed and helped me avoid a car with hidden problems.",
        ES: "¡Excelente servicio! El reporte fue detallado y me ayudó a evitar un auto con problemas ocultos."
      },
      location: "California"
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: {
        EN: "Fast and reliable. Got my report within minutes and it was very comprehensive.",
        ES: "Rápido y confiable. Obtuve mi reporte en minutos y fue muy completo."
      },
      location: "Texas"
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: {
        EN: "Saved me thousands! The report revealed accident history that the seller didn't mention.",
        ES: "¡Me ahorró miles! El reporte reveló historial de accidentes que el vendedor no mencionó."
      },
      location: "Florida"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.testimonialsSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text[language as keyof typeof testimonial.text]}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</p>
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
