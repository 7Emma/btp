import { useState } from "react";
import s1 from "../assets/images/services/s1.png";
import s2 from "../assets/images/services/s2.png";
import s3 from "../assets/images/services/s3.png";
import s4 from "../assets/images/services/s4.png";

const services = [
  {
    img: s1,
    title: "Service de Construction",
    short:
      "Réalisation de projets solides et durables, du gros œuvre à la finition.",
    details:
      "Nous assurons la construction complète de vos bâtiments, en respectant les normes de qualité et de sécurité. Notre équipe qualifiée travaille avec rigueur pour livrer des structures fiables et esthétiques.",
  },
  {
    img: s2,
    title: "Modélisation de Bâtiment",
    short: "Conception 3D et plans techniques pour visualiser votre projet.",
    details:
      "Grâce à des outils de modélisation 3D avancés, nous donnons vie à vos idées avant même le début des travaux. Cela permet de prévoir chaque détail et d'optimiser la conception.",
  },
  {
    img: s3,
    title: "Pré-Construction",
    short: "Planification stratégique pour garantir un chantier fluide.",
    details:
      "Nous préparons minutieusement chaque projet avec une étude de faisabilité, une estimation des coûts, et une planification précise pour éviter les imprévus et optimiser les ressources.",
  },
  {
    img: s4,
    title: "Gestion de Projet",
    short: "Suivi et coordination pour assurer le succès de vos travaux.",
    details:
      "Nous assurons la supervision complète de votre chantier, en coordonnant les équipes et en veillant au respect des délais, du budget et des standards de qualité.",
  },
];

function Service() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto shadow-2xl flex flex-col gap-6">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chez <span className="font-semibold text-orange-500">Fonicy</span>,
            nous mettons notre savoir-faire et notre passion au service de vos
            projets, de la conception à la réalisation. Que vous soyez un
            particulier, une entreprise ou une collectivité, nous vous
            accompagnons à chaque étape pour garantir des résultats à la hauteur
            de vos attentes.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 p-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-16 h-16 object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description courte */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.short}
              </p>

              {/* Bouton "En savoir plus" */}
              <button
                className="text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors duration-300 border-b border-transparent hover:border-orange-500"
                onClick={() => setSelected(service)}
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        {/* Popup */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-2xl">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                onClick={() => setSelected(null)}
              >
                ✖
              </button>
              <div className="mb-4">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-16 h-16 object-contain mx-auto mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {selected.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selected.details}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Service;
