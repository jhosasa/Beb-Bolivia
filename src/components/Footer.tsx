import React from 'react';
import { Wine, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wine className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-white">Denis Bebidas</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Preservando las tradiciones bolivianas a través de bebidas auténticas. 
              Cada sorbo cuenta la historia de nuestra rica cultura ancestral.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-red-400 transition-colors">Bebidas</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Servicios</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Singani Premium</span></li>
              <li><span className="text-gray-400">Chicha de Jora</span></li>
              <li><span className="text-gray-400">Api Tradicional</span></li>
              <li><span className="text-gray-400">Licor de Coca</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Denis Bebidas Bolivianas. Todos los derechos reservados.
          </p>
          <p className="text-yellow-400 text-sm">
            🇧🇴 Orgullosamente preservando nuestras tradiciones bolivianas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;