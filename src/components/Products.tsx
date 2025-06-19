import React from 'react';
import { Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Singani Premium",
      description: "El destilado nacional de Bolivia, elaborado con uvas moscatel de altura en los valles tarijeños",
      image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "120 Bs",
      rating: 5,
      origin: "Tarija"
    },
    {
      id: 2,
      name: "Chicha de Jora Artesanal",
      description: "Bebida fermentada ancestral preparada con maíz jora siguiendo recetas tradicionales",
      image: "https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "25 Bs",
      rating: 5,
      origin: "Cochabamba"
    },
    {
      id: 3,
      name: "Api con Pastel",
      description: "Bebida caliente tradicional de maíz morado con especias, acompañada de pasteles fritos",
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "15 Bs",
      rating: 5,
      origin: "La Paz"
    },
    {
      id: 4,
      name: "Ponche de Huevo",
      description: "Cremosa bebida alcohólica con huevos, leche condensada y un toque de canela",
      image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "35 Bs",
      rating: 5,
      origin: "Santa Cruz"
    },
    {
      id: 5,
      name: "Licor de Coca",
      description: "Licor artesanal elaborado con hojas de coca, miel y hierbas aromáticas de los Andes",
      image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "80 Bs",
      rating: 5,
      origin: "Yungas"
    },
    {
      id: 6,
      name: "Tojorí",
      description: "Bebida fermentada tradicional del oriente boliviano, refrescante y con bajo contenido alcohólico",
      image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "20 Bs",
      rating: 5,
      origin: "Beni"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra Colección Boliviana
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada bebida representa siglos de tradición boliviana, preparada con ingredientes auténticos y técnicas ancestrales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-red-500/20 hover:border-red-500/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-yellow-400 font-bold">{product.price}</span>
                </div>
                <div className="absolute top-4 left-4 bg-red-600/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-semibold">{product.origin}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;