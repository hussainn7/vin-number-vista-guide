
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Search, Shield, CreditCard, CheckCircle, Zap, FileText } from 'lucide-react';

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
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Get Your Vehicle's
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Complete History
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive vehicle history reports in seconds. Make informed decisions with our detailed analysis.
        </p>
      </div>

      <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-3xl">
        <div className="flex mb-8 bg-gray-100 rounded-2xl p-2">
          <button
            onClick={() => setActiveTab('vin')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === 'vin'
                ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>Search by VIN</span>
          </button>
          <button
            onClick={() => setActiveTab('license')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              activeTab === 'license'
                ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Search className="h-5 w-5" />
            <span>Search by License Plate</span>
          </button>
        </div>

        {activeTab === 'vin' ? (
          <div className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter 17-character VIN number"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                className="h-16 text-lg pl-6 pr-14 border-2 border-gray-200 focus:border-blue-500 rounded-2xl bg-white/80 backdrop-blur-sm transition-all duration-200"
                maxLength={17}
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <div className="absolute -bottom-6 left-2 text-sm text-gray-500">
                {vin.length}/17 characters
              </div>
            </div>
            <Button 
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              disabled={vin.length !== 17}
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Instant Report
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="License plate number"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                  className="h-16 text-lg pl-6 pr-14 border-2 border-gray-200 focus:border-blue-500 rounded-2xl bg-white/80 backdrop-blur-sm transition-all duration-200"
                />
                <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              </div>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger className="h-16 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent className="max-h-60 rounded-xl">
                  {usStates.map((stateName) => (
                    <SelectItem key={stateName} value={stateName} className="rounded-lg">
                      {stateName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              disabled={!licensePlate || !state}
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Instant Report
            </Button>
          </div>
        )}
      </Card>

      {/* Payment Options */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">Trusted Payment Methods</h3>
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-xl">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="font-medium">Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            <span className="font-medium">100% Confidential</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-xl">
            <CreditCard className="h-5 w-5 text-purple-600" />
            <span className="font-medium">All Cards Accepted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
