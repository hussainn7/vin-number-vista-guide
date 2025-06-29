
import React from 'react';
import { Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AutoReport</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Профессиональная проверка истории автомобилей. Получите полную информацию 
              о любом транспортном средстве за несколько секунд.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Сервис</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Проверка по VIN</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Проверка по номеру</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Примеры отчетов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Справочный центр</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Поддержка</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 AutoReport. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
