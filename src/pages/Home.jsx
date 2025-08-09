import { useEffect, useState, useRef } from "react";
import slider from "../assets/images/slider-bg.jpg";
import services from "../data/services";
import maçon from "../assets/images/about-img.jpg";
import maison from "../assets/images/projects/project1.jpg"
import background from "../assets/images/client/client-bg.jpg"
import clt from "../assets/images/client/client.jpg"

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Section Projets */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              PROJETS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Filtre de catégorie toutes les réparations de peinture, de reconstruction et de style résidentiel
            </p>
          </div>
          <Carousselle />
        </div>
      </div>
      <Carousselle2 />
    </div>
  );
}

function Carousselle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Données des projets (vous pouvez remplacer par vos vraies données)
  const projects = [
    {
      id: 1,
      image: maison,
      title: "Travaux intérieur",
      description: "Une altération sous une forme ou une autre, projection d'humour ou pas des mots aléatoires qui ne paraissent pas crédibles."
    },
    {
      id: 2,
      image: maison,
      title: "Rénovation extérieure",
      description: "Transformation complète de façades avec des matériaux modernes et durables pour un rendu exceptionnel."
    },
    {
      id: 3,
      image: maison,
      title: "Construction neuve",
      description: "Projets de construction de maisons individuelles avec des designs contemporains et éco-responsables."
    },
    {
      id: 4,
      image: maison,
      title: "Aménagement paysager",
      description: "Création d'espaces verts harmonieux alliant esthétique et fonctionnalité pour votre environnement."
    },
    {
      id: 5,
      image: maison,
      title: "Rénovation de toiture",
      description: "Expertise en rénovation et réparation de toitures avec des matériaux de haute qualité."
    },
    {
      id: 6,
      image: maison,
      title: "Isolation thermique",
      description: "Solutions d'isolation performantes pour améliorer le confort et réduire les consommations énergétiques."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? projects.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full">
      {/* Carrousel container */}
      <div 
        ref={carouselRef}
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Images container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
                {/* Gradient overlay pour améliorer la lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label={isAutoPlaying ? "Mettre en pause" : "Reprendre"}
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8" />
            </svg>
          )}
        </button>
      </div>

      {/* Indicators (dots) */}
      <div className="flex justify-center space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project info - Only show for current slide */}
      <div className="mt-8 text-center">
        <div 
          key={currentIndex}
          className="animate-fadeIn"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {projects[currentIndex].title}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {projects[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
        <div 
          className="bg-orange-500 h-1 rounded-full transition-all duration-100"
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        />
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} / {projects.length}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

const testimonials = [
  {
    name: "Morojink",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at, officia pariatur blanditiis enim.",
    img: clt,
  },
  {
    name: "Amina",
    role: "Client",
    text: "Magnifique service ! Je recommande fortement. Les délais sont respectés et le résultat est au top.",
    img: clt,
  },
  {
    name: "David",
    role: "Partenaire",
    text: "Collaboration très agréable, équipe professionnelle et à l’écoute.",
    img: clt,
  },
];

function Carousselle2() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full py-20"
    >
      <div className="text-center text-3xl mb-20 text-white font-bold">
        Testimoniale
      </div>

      {/* Carrousel container */}
      <div className="relative flex items-center justify-center">
        {/* Bouton gauche */}
        <button
          onClick={prev}
          className="absolute left-5 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ◀
        </button>

        {/* Témoignage */}
        <div className="bg-white max-w-2xl mx-5 p-10 text-center rounded-lg shadow-lg relative">
          <img
            src={testimonials[index].img}
            alt={testimonials[index].name}
            className="rounded-full w-32 h-32 object-cover absolute -top-16 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
          />
          <div className="mt-16 text-2xl font-bold">{testimonials[index].name}</div>
          <div className="text-orange-500 mb-5">{testimonials[index].role}</div>
          <div className="text-gray-700">{testimonials[index].text}</div>
        </div>

        {/* Bouton droit */}
        <button
          onClick={next}
          className="absolute right-5 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ▶
        </button>
      </div>
    </div>
  );
}


export default Home;