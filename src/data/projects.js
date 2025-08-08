import project1 from "../assets/images/projects/project1.jpg"; // Grand immeuble vitré
import project2 from "../assets/images/projects/project2.jpg"; // Intérieur de maisons
import project3 from "../assets/images/projects/project3.jpg"; // Marché public
import project4 from "../assets/images/projects/project4.jpg"; // Route en aménagement
import project5 from "../assets/images/projects/project5.jpg"; // Salle de conférence
import project6 from "../assets/images/projects/project6.jpg"; // Pont

const products = [
  {
    id: 1,
    name: "Grand immeuble vitré",
    description:
      "Chef-d'œuvre architectural aux lignes épurées, ce bâtiment à façade vitrée reflète la lumière naturelle tout en offrant un confort intérieur optimal. Idéal pour accueillir les entreprises visionnaires et modernes.",
    image: project1,
    categories: ["résidentiel", "reconstruction", "style"],
  },
  {
    id: 2,
    name: "Marché public institutionnel",
    description:
      "Un espace pensé pour dynamiser le commerce et favoriser les échanges. Ce marché allie accessibilité, durabilité et confort pour offrir une expérience agréable aux usagers et commerçants.",
    image: project3,
    categories: ["infrastructure", "réparation", "reconstruction"],
  },
  {
    id: 3,
    name: "Pont",
    description:
      "Plus qu’une simple structure, ce pont incarne un lien durable entre les communautés. Conçu pour résister au temps, il allie robustesse et esthétisme au service de la mobilité.",
    image: project6,
    categories: ["infrastructure", "réparation"],
  },
  {
    id: 4,
    name: "Route en aménagement",
    description:
      "Une route pensée pour le futur. Nos travaux transforment l’environnement en offrant des voies sûres, durables et parfaitement adaptées aux besoins de mobilité croissants.",
    image: project4,
    categories: ["réparation", "infrastructure"],
  },
  {
    id: 5,
    name: "Intérieur de maisons en aménagement",
    description:
      "Des espaces intérieurs conçus pour inspirer. Chaque pièce est façonnée avec soin pour offrir un équilibre parfait entre confort, modernité et harmonie.",
    image: project2,
    categories: ["résidentiel", "style", "peinture"],
  },
  {
    id: 6,
    name: "Salle de conférence",
    description:
      "Un espace élégant et fonctionnel, parfait pour réunions, séminaires et événements d’envergure. Alliant design raffiné, technologie moderne et acoustique irréprochable, elle favorise l’échange et la créativité.",
    image: project5,
    categories: ["institutionnel", "style", "reconstruction"],
  },
];

export default products;
