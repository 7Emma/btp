import { useState, useEffect } from "react";
import clients from "../data/clients";
import bg from "../assets/images/client/client-bg.jpg";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // toutes les 5 secondes

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      setIsAnimating(false);
    }, 150);
  };

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? clients.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };

  const client = clients[currentIndex];

  return (
    <div
      className="relative bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-black">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Ce que disent nos clients
        </h2>

        <div className="relative overflow-hidden">
          <div
            className={`relative flex items-start gap-8 p-8 mb-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-700 ease-out ${
              isAnimating
                ? "opacity-0 scale-95 translate-y-8"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <div
              className={`flex-shrink-0 transition-all duration-700 ${
                isAnimating
                  ? "opacity-0 scale-90 -translate-x-4"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <img
                src={client.photo}
                alt={client.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-400/30 shadow-lg"
              />
            </div>
            <div
              className={`flex-1 min-w-0 transition-all duration-700 delay-150 ${
                isAnimating
                  ? "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {client.name}
                </h3>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 bg-orange-50 px-3 py-1 rounded-full inline-block">
                {client.statut}
              </p>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic relative">
                <span className="absolute -top-2 -left-2 text-4xl text-orange-400/30 font-serif">
                  "
                </span>
                {client.review}
                <span className="absolute -bottom-4 text-4xl text-orange-400/30 font-serif">
                  "
                </span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Navigation moderne */}
        <div className="flex justify-center items-center gap-6 mt-8">
          {/* Bouton précédent */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            aria-label="Témoignage précédent"
          >
            <svg
              className="w-5 h-5 text-white transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicateurs modernes */}
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative transition-all duration-500 disabled:cursor-not-allowed ${
                  currentIndex === index
                    ? "w-8 h-2 bg-orange-400 rounded-full shadow-lg"
                    : "w-2 h-2 bg-white/40 hover:bg-orange-300 rounded-full hover:scale-125"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              >
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-orange-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Bouton suivant */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            aria-label="Témoignage suivant"
          >
            <svg
              className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicateur de progression moderne */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              {currentIndex + 1} sur {clients.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
