
import React from 'react';
import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const footerSections = [
    {
      title: t.aboutUs,
      links: [
        { name: language === 'EN' ? 'Our Story' : 'Nuestra Historia', href: '#' },
        { name: language === 'EN' ? 'Team' : 'Equipo', href: '#' },
        { name: language === 'EN' ? 'Careers' : 'Carreras', href: '#' },
        { name: language === 'EN' ? 'Press' : 'Prensa', href: '#' }
      ]
    },
    {
      title: t.services,
      links: [
        { name: language === 'EN' ? 'VIN Reports' : 'Reportes VIN', href: '#' },
        { name: language === 'EN' ? 'License Plate Reports' : 'Reportes de Placa', href: '#' },
        { name: language === 'EN' ? 'Bulk Reports' : 'Reportes al por Mayor', href: '#' },
        { name: language === 'EN' ? 'API Access' : 'Acceso API', href: '#' }
      ]
    },
    {
      title: t.support,
      links: [
        { name: language === 'EN' ? 'Help Center' : 'Centro de Ayuda', href: '#' },
        { name: language === 'EN' ? 'Live Chat' : 'Chat en Vivo', href: '#' },
        { name: language === 'EN' ? 'Contact Us' : 'Contáctanos', href: '#' },
        { name: language === 'EN' ? 'Report Issues' : 'Reportar Problemas', href: '#' }
      ]
    },
    {
      title: t.legal,
      links: [
        { name: language === 'EN' ? 'Privacy Policy' : 'Política de Privacidad', href: '#' },
        { name: language === 'EN' ? 'Terms of Service' : 'Términos de Servicio', href: '#' },
        { name: language === 'EN' ? 'Cookie Policy' : 'Política de Cookies', href: '#' },
        { name: language === 'EN' ? 'DMCA' : 'DMCA', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AutoCheck</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {language === 'EN' 
                ? 'Your trusted partner for comprehensive vehicle history reports and automotive transparency.'
                : 'Su socio de confianza para reportes completos del historial del vehículo y transparencia automotriz.'
              }
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">1-800-AUTO-CHECK</span>
              </div>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AutoCheck. {language === 'EN' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
