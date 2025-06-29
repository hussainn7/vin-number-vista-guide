
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to get a report?',
      answer: 'Reports are generated instantly! After entering your VIN number or license plate, you\'ll receive comprehensive vehicle information within seconds.'
    },
    {
      question: 'What information is included in the report?',
      answer: 'Our reports include: ownership history, accident records, service records, theft checks, mileage history, lien information, and much more. All information is gathered from official sources and databases.'
    },
    {
      question: 'Is my personal information protected?',
      answer: 'Absolutely! We use advanced SSL encryption technology to protect your data. All information is processed confidentially and is never shared with third parties.'
    },
    {
      question: 'Do you offer discounts for multiple reports?',
      answer: 'Yes! Registered users receive special discounts when ordering multiple reports. We also offer package deals for dealers and auto lots. Sign in to see available discounts and special offers.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), digital wallets, bank transfers, and other popular payment methods. All payments are processed through secure channels.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'If we are unable to provide a report due to technical reasons, funds are returned in full. In other cases, refunds are not provided as the information has already been delivered.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600 mr-3" />
            <h2 className="text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our vehicle history service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-100 rounded-2xl px-8 bg-gradient-to-r from-gray-50/50 to-blue-50/30 hover:shadow-lg transition-all duration-200"
            >
              <AccordionTrigger className="text-left text-xl font-bold py-8 hover:no-underline text-gray-800 hover:text-blue-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-8 text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <p className="text-gray-700 mb-4 text-lg">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-blue-600 hover:text-blue-700 font-bold text-xl underline decoration-2 underline-offset-4 hover:decoration-blue-700 transition-all"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
