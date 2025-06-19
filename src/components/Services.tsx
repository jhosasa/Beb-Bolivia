import React from 'react';
import { Calendar, GraduationCap, Utensils, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Eventos Culturales",
      description: "Servicio especializado para bodas, fiestas patronales y celebraciones tradicionales bolivianas",
      features: ["Bebidas tradicionales auténticas", "Vestimenta típica incluida", "Música folklórica", "Decoración temática boliviana"]
    },
    {
      icon: GraduationCap,
      title: "Talleres de Tradición",
      description: "Aprende a preparar bebidas bolivianas tradicionales con técnicas ancestrales",
      features: ["Historia de cada bebida", "Ingredientes originales", "Técnicas tradicionales", "Certificado de participación"]
    },
    {
      icon: Utensils,
      title: "Catering Boliviano",
      description: "Servicio completo de bebidas tradicionales para cualquier celebración",
      features: ["Menú regional personalizado", "Ingredientes importados", "Presentación tradicional", "Servicio en traje típico"]
    },
    {
      icon: Sparkles,
      title: "Consultoría Cultural",
      description: "Asesoría para restaurantes que desean incluir bebidas bolivianas auténticas",
      features: ["Desarrollo de carta boliviana", "Capacitación cultural", "Proveedores de ingredientes", "Autenticidad garantizada"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Llevamos la auténtica experiencia de las bebidas bolivianas a tu evento o establecimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Solicitar Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;