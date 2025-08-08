import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("toute");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects =
    selectedCategory === "toute"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const categories = [
    "toute",
    "residentiel",
    "style",
    "reconstruction",
    "peinture",
    "reparation",
    "infrastructure",
    "institutionnel",
  ];

  const getCategoryDisplayName = (category) => {
    const names = {
      toute: "Toute",
      residentiel: "Résidentiel",
      style: "Style",
      reconstruction: "Reconstruction",
      peinture: "Peinture",
      reparation: "Réparation",
      infrastructure: "Infrastructure",
      institutionnel: "Institutionnel",
    };
    return names[category] || category;
  };

  // Calculer le nombre de slides (3 projets par slide)
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);

  // Réinitialiser le slide quand on change de catégorie
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentSlide(0);
  };

  // Navigation des slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Obtenir les projets pour le slide current
  const getCurrentSlideProjects = () => {
    const startIndex = currentSlide * projectsPerSlide;
    const endIndex = startIndex + projectsPerSlide;
    return filteredProjects.slice(startIndex, endIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* En-tête */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Nos Projects
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Découvrez nos réalisations dans différents domaines de la
            construction et de la rénovation.
          </p>
        </div>

        {/* Boutons de filtre */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
          <div className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg">
            CATÉGORIES
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:text-orange-500 hover:bg-orange-50 shadow-sm"
                }`}
              >
                {getCategoryDisplayName(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Compteur et navigation */}
        <div className="flex justify-between items-center mb-12">
          <span className="text-gray-500">
            {filteredProjects.length} projet
            {filteredProjects.length > 1 ? "s" : ""}
            {selectedCategory !== "toute" &&
              ` dans "${getCategoryDisplayName(selectedCategory)}"`}
          </span>

          {/* Navigation slides */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 mr-4">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                disabled={totalSlides <= 1}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                disabled={totalSlides <= 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Container avec overflow pour l'effet carousel */}
        <div className="relative">
          {/* Grille des projets (3 par slide) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentSlideProjects().map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay avec icône */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-500 transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-orange-500 hover:text-white shadow-lg"
                      onClick={() => {
                        console.log("Ouvrir projet:", project.name);
                      }}
                    >
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>

                {/* Détails du projet */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 via-orange-500 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h5 className="font-bold text-xl text-white mb-2">
                    {project.name}
                  </h5>
                  {project.description && (
                    <p className="text-orange-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Badge catégorie */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.categories[0] &&
                    getCategoryDisplayName(project.categories[0])}
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs de slides (dots) */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-orange-500 w-8"
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-6">
              Aucun projet trouvé dans cette catégorie
            </div>
            <button
              onClick={() => handleCategoryChange("toute")}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              Voir tous les projets
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
