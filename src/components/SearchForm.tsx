import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, CreditCard, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const SearchForm = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [vinNumber, setVinNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleVinSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (vinNumber.trim()) {
      navigate('/report');
    }
  };

  const handlePlateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (licensePlate.trim() && selectedState) {
      navigate('/report');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-2xl">
          <Car className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t.heroTitle}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.heroSubtitle}
        </p>
      </div>

      {/* Search Form */}
      <Card className="bg-white/90 backdrop-blur-lg shadow-2xl border-0 max-w-4xl mx-auto mb-12">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl font-bold text-gray-900">
            <Shield className="h-6 w-6 inline mr-2 text-blue-600" />
            Vehicle History Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 rounded-xl p-1">
              <TabsTrigger 
                value="vin" 
                className="rounded-lg py-3 text-base font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {t.searchByVin}
              </TabsTrigger>
              <TabsTrigger 
                value="plate" 
                className="rounded-lg py-3 text-base font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {t.searchByPlate}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="vin">
              <form onSubmit={handleVinSearch} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.enterVin}
                  </label>
                  <Input
                    type="text"
                    placeholder={t.vinPlaceholder}
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value)}
                    className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                    maxLength={17}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Search className="h-5 w-5 mr-2" />
                  {t.getReport}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="plate">
              <form onSubmit={handlePlateSearch} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.enterLicensePlate}
                    </label>
                    <Input
                      type="text"
                      placeholder={t.platePlaceholder}
                      value={licensePlate}
                      onChange={(e) => setLicensePlate(e.target.value)}
                      className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.selectState}
                    </label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder={t.selectState} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Search className="h-5 w-5 mr-2" />
                  {t.getReport}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <div className="text-center">
        <p className="text-gray-600 mb-6 font-medium">{t.paymentMethods}</p>
        <div className="flex justify-center items-center space-x-8 opacity-70">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="font-semibold text-gray-700">Visa</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-red-600" />
            <span className="font-semibold text-gray-700">Mastercard</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-blue-500" />
            <span className="font-semibold text-gray-700">American Express</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-yellow-500" />
            <span className="font-semibold text-gray-700">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
