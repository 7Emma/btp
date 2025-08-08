import about from "../assets/images/about-img.jpg";

function About() {
  return (
    <section className="about_section bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center row">
          {/* Contenu texte */}
          <div className="order-2 lg:order-1 detail-box">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              À propos de nous
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Chez <span className="font-semibold text-orange-500">Fonicy</span>
              , nous mettons notre passion et notre expertise au service de vos
              projets de construction. Forts d’une expérience solide dans le
              <strong> Bâtiment et les Travaux Publics</strong>, nous
              accompagnons nos clients de la conception à la réalisation, en
              garantissant
              <strong> qualité</strong>, <strong>sécurité</strong> et
              <strong> respect des délais</strong>.
              <br />
              <br />
              Notre mission est simple : transformer vos idées en réalisations
              concrètes, durables et esthétiques. Que ce soit pour la
              construction, la modélisation de bâtiments, la pré-construction ou
              la gestion complète de projet, notre équipe d’experts s’engage à
              offrir un service personnalisé et transparent.
              <br />
              <br />
              En choisissant <span className="font-semibold">Fonicy</span>, vous
              choisissez un partenaire fiable qui bâtit avec vous et pour vous.
            </p>
            <button className="bg-orange-500 hover:bg-orange-500 text-white px-[45px] py-[10px] rounded-[20px] font-medium transition-all duration-300 transform hover:scale-105 mt-[15px]">
              En savoir plus
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 img-box relative">
            <div className="relative bg-white z-20">
              <img
                src={about}
                alt="About"
                className="max-w-full relative z-20 rounded-lg"
              />

              {/**Couleur a gauche */}
              <div
                className="absolute top-1/2 left-0 w-[45px] h-[70%] bg-[#f07b26] z-30 rounded-xl"
                style={{ transform: "translate(-50%, -50%)" }}
              ></div>

              {/**Couleur a droite */}
              <div
                className="absolute top-1/2 right-0 w-[45px] h-[70%] bg-[#f07b26] z-10 rounded-xl"
                style={{ transform: "translate(50%, -50%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
