import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "30+", label: "Recetas Tradicionales" },
    { icon: Users, number: "500+", label: "Clientes Satisfechos" },
    { icon: Clock, number: "10+", label: "Años de Experiencia" },
    { icon: Heart, number: "9", label: "Departamentos Representados" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preservando la Tradición Boliviana
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soy Denis, un apasionado preservador de las tradiciones bolivianas a través de sus bebidas. 
              Durante años he viajado por todo Bolivia aprendiendo las recetas ancestrales 
              de nuestros abuelos.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Desde el altiplano hasta los llanos orientales, cada región de Bolivia tiene sus propias 
              bebidas tradicionales. Mi misión es mantener vivas estas tradiciones, preparando cada 
              bebida con ingredientes auténticos y técnicas transmitidas de generación en generación.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/images/foto.png"
                alt="Denis preparando bebidas tradicionales"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold">"Cada sorbo</div>
              <div className="text-lg">cuenta nuestra historia"</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-black p-4 rounded-2xl">
              <div className="text-lg font-bold">🇧🇴 100% Boliviano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;