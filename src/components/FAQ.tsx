
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      question: {
        EN: "What information is included in a vehicle history report?",
        ES: "¿Qué información se incluye en un reporte del historial del vehículo?"
      },
      answer: {
        EN: "Our reports include accident history, service records, title information, previous owners, and more. We gather data from multiple sources to provide you with a comprehensive overview.",
        ES: "Nuestros reportes incluyen historial de accidentes, registros de servicio, información del título, propietarios anteriores y más. Recopilamos datos de múltiples fuentes para brindarle una visión completa."
      }
    },
    {
      question: {
        EN: "How quickly will I receive my report?",
        ES: "¿Qué tan rápido recibiré mi reporte?"
      },
      answer: {
        EN: "Most reports are delivered instantly after payment. In rare cases, it may take up to 24 hours for comprehensive data compilation.",
        ES: "La mayoría de los reportes se entregan instantáneamente después del pago. En casos raros, puede tomar hasta 24 horas para la compilación completa de datos."
      }
    },
    {
      question: {
        EN: "Do you offer discounts for multiple reports?",
        ES: "¿Ofrecen descuentos para múltiples reportes?"
      },
      answer: {
        EN: "Yes! Registered users get special discounts on bulk purchases and subscription plans. Sign up for an account to access these exclusive offers.",
        ES: "¡Sí! Los usuarios registrados obtienen descuentos especiales en compras al por mayor y planes de suscripción. Regístrese para acceder a estas ofertas exclusivas."
      }
    },
    {
      question: {
        EN: "Is my personal information secure?",
        ES: "¿Mi información personal está segura?"
      },
      answer: {
        EN: "Absolutely. We use enterprise-grade encryption and never share your personal information with third parties. Your privacy is our top priority.",
        ES: "Absolutamente. Utilizamos encriptación de nivel empresarial y nunca compartimos su información personal con terceros. Su privacidad es nuestra máxima prioridad."
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.faqTitle}
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/80 backdrop-blur-sm rounded-xl border-0 shadow-lg"
            >
              <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:no-underline hover:bg-white/50 rounded-xl">
                {faq.question[language]}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                {faq.answer[language]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
