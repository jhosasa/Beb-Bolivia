import React, { useState, useEffect } from 'react';
import { Menu, X, Wine } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wine className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Denis Bebidas</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-400 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('products')} className="text-white hover:text-red-400 transition-colors">
              Bebidas
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-red-400 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-400 transition-colors">
              Contacto
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-400 transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('products')} className="text-white hover:text-red-400 transition-colors text-left">
                Bebidas
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-red-400 transition-colors text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-400 transition-colors text-left">
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;