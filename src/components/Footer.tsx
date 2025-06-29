
import React from 'react';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl shadow-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  AutoCheck
                </span>
                <div className="text-sm text-gray-400 font-medium">Vehicle History Reports</div>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed text-lg">
              Professional vehicle history verification service. Get comprehensive information 
              about any vehicle in seconds with our trusted reporting system.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>support@autocheck.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>1-800-AUTO-CHECK</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">VIN Check</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">License Plate Lookup</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Sample Reports</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Bulk Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200 text-lg">Developer Tools</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 text-sm text-gray-400 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Support</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 AutoCheck. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
