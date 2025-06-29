
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Search, Shield, CreditCard, CheckCircle } from 'lucide-react';

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState('vin');
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [state, setState] = useState('');

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Получите историю
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            вашего автомобиля
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Полная проверка по VIN номеру или госномеру за несколько секунд
        </p>
      </div>

      <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('vin')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === 'vin'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Поиск по VIN
          </button>
          <button
            onClick={() => setActiveTab('license')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === 'license'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Поиск по номеру
          </button>
        </div>

        {activeTab === 'vin' ? (
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Введите VIN номер (17 символов)"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                className="h-14 text-lg pl-4 pr-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                maxLength={17}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl"
              disabled={vin.length !== 17}
            >
              Получить отчет
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Номер автомобиля"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                  className="h-14 text-lg pl-4 pr-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl">
                  <SelectValue placeholder="Выберите штат" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {usStates.map((stateName) => (
                    <SelectItem key={stateName} value={stateName}>
                      {stateName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl"
              disabled={!licensePlate || !state}
            >
              Получить отчет
            </Button>
          </div>
        )}
      </Card>

      <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <span>Безопасная оплата</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <span>100% конфиденциальность</span>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5 text-green-600" />
          <span>Все карты принимаются</span>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
