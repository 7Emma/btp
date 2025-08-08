import { useEffect } from "react";
import slider from "../assets/images/slider-bg.jpg";
import services from "../data/services";
import maçon from "../assets/images/about-img.jpg";

function Home() {
  return (
    <div>
      {/* Hero Section avec background responsive */}
      <div className="relative bg-cover bg-center bg-no-repeat w-full h-screen">
        {/* Image de background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slider})` }}
        ></div>

        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenu centré et responsive */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-16">
          <div className="text-white text-center max-w-4xl">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight mb-8">
              ARCHITECTE <br />
              CONSTRUCTEUR <br />
              <span className="text-orange-500">SERVICES DE CONSTRUCTION</span>
            </h1>

            {/* Boutons responsive */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105">
                Nos Services
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-base font-medium transition-all duration-300">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Services responsive */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Il existe de nombreuses variantes de passages du Lorem Ipsum, mais
              la majorité d'entre elles ont subi des altérations.
            </p>
          </div>

          {/* Grille des services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-16 h-16 object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                  />
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.short}
                </p>

                {/* Lien */}
                <button className="text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors duration-300 border-b border-transparent hover:border-orange-500">
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                À propos de nous
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Il existe de nombreuses variantes de passages du Lorem Ipsum,
                mais la plupart ont subi des altérations, par exemple par
                l'ajout d'humour ou de mots aléatoires, qui paraissent peu
                crédibles. Si vous utilisez un passage du Lorem Ipsum,
                assurez-vous qu'il ne contient aucun élément gênant caché au
                milieu du texte.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                En savoir plus
              </button>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={maçon}
                  alt="À propos de nous"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {/* Overlay décoratif */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-orange-500 rounded-lg -z-10 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;