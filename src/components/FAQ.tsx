
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Как долго занимает получение отчета?',
      answer: 'Отчет формируется мгновенно! После ввода VIN номера или госномера вы получите полную информацию об автомобиле в течение нескольких секунд.'
    },
    {
      question: 'Какую информацию включает отчет?',
      answer: 'Наш отчет включает: историю владельцев, данные о ДТП, сервисные записи, проверку на угон, историю пробега, информацию о залогах и многое другое. Вся информация собирается из официальных источников.'
    },
    {
      question: 'Защищена ли моя персональная информация?',
      answer: 'Абсолютно! Мы используем современные технологии шифрования SSL для защиты ваших данных. Вся информация обрабатывается конфиденциально и не передается третьим лицам.'
    },
    {
      question: 'Предоставляете ли вы скидки на несколько отчетов?',
      answer: 'Да! Зарегистрированные пользователи получают специальные скидки при заказе нескольких отчетов. Также доступны пакетные предложения для дилеров и автосалонов. Войдите в систему, чтобы узнать о доступных скидках.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем все основные банковские карты (Visa, MasterCard, МИР), электронные кошельки, банковские переводы и другие популярные способы оплаты. Все платежи проходят через защищенные каналы.'
    },
    {
      question: 'Можно ли получить возврат средств?',
      answer: 'Если по техническим причинам мы не смогли предоставить отчет, средства возвращаются в полном объеме. В остальных случаях возврат не предусмотрен, так как информация уже предоставлена.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-gray-50/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a 
            href="#contact" 
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Свяжитесь с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
