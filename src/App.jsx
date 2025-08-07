import { BrowserRouter } from "react-router";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import slider from "./assets/images/slider-bg.jpg";
import s1 from "./assets/images/services/s1.png";
import s2 from "./assets/images/services/s2.png";
import s3 from "./assets/images/services/s3.png";
import s4 from "./assets/images/services/s4.png";
import maçon from "./assets/images/about-img.jpg";

function App() {
  return (
    <BrowserRouter>
      {/* Hero Section avec background responsive */}
      <div className="relative bg-cover bg-center bg-no-repeat w-full h-screen bg-[url('./assets/images/slider-bg.jpg')] md:bg-cover sm:bg-contain">
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Contenu centré et responsive */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-16">
          <div className="text-white text-center max-w-4xl">
            <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              ARCHITECTE <br />
              CONSTRUCTEUR <br />
              SERVICES DE CONSTRUCTION
            </div>
            
            {/* Boutons responsive */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button className="bg-amber-500 px-6 py-3 rounded text-sm sm:text-base hover:bg-amber-600 transition-colors">
                Nos Services
              </button>
              <button className="bg-black px-6 py-3 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Services responsive */}
      <div className="bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 my-8 p-6 sm:p-8 md:p-12 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        <h2 className="font-bold lg:text-4xl sm:text-2xl mb-6 text-center sm:text-left">Services</h2>
        <div className="text-lg mb-14">Il existe de nombreuses variantes de passages du Lorem Ipsum, mais la majorité d'entre elles ont subi des altérations.</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div>
            <div className="justify-center">
            <img src={s1} alt="Service 1" className="max-w-xs justify-center  mb-2 object-cover rounded" />
              <div className="text-lg lg:text-2xl font-semibold ">SERVICES DE CONSTRUCTION</div>
                        Le fait qu'un lecteur soit distrait par le contenu lisible d'une page lorsqu'il examine sa mise en page. 
                        L'intérêt d'utiliser L
              <div className="font-semibold mb-8 md:mb-4">En savoir plus</div>
          </div>
          </div>
          <div className=" justify-center">
            <img src={s2} alt="Service 2" className="max-w-xs object-cover rounded" />
            <div className="text-lg lg:text-2xl font-semibold">SERVICES DE CONSTRUCTION</div>
                        Le fait qu'un lecteur soit distrait par le contenu lisible d'une page lorsqu'il examine sa mise en page. 
                        L'intérêt d'utiliser L
              <div className="font-semibold mb-8 md:mb-4">En savoir plus</div>
          </div>
          <div className="justify-center">
            <img src={s3} alt="Service 3" className="max-w-xs object-cover rounded" />
            <div className="text-lg lg:text-2xl font-semibold">SERVICES DE CONSTRUCTION</div>
                        Le fait qu'un lecteur soit distrait par le contenu lisible d'une page lorsqu'il examine sa mise en page. 
                        L'intérêt d'utiliser L
              <div className="font-semibold mb-8 md:mb-4">En savoir plus</div>
          </div>
          <div className="justify-center">
            <img src={s4} alt="Service 4" className="max-w-xs object-cover rounded" />
            <div className="text-lg lg:text-2xl font-semibold">SERVICES DE CONSTRUCTION</div>
                        Le fait qu'un lecteur soit distrait par le contenu lisible d'une page lorsqu'il examine sa mise en page. 
                        L'intérêt d'utiliser L
              <div className="font-semibold mb-8 md:mb-4">En savoir plus</div>
          </div>
        </div>
      </div>

      <div className="w-11/12 ms-4 grid justify-items-start">
         <div className="font-bold text-2xl">A propos de nous</div>
          <div>Il existe de nombreuses variantes de passages du Lorem Ipsum, mais la plupart ont subi des altérations, par exemple par l'ajout d'humour ou de mots aléatoires, qui paraissent peu crédibles. Si vous utilisez un passage du Lorem Ipsum, assurez-vous qu'il ne contient aucun élément gênant caché au milieu du texte. Tous</div>
          <button className=" bg-amber-600 rounded px-5 py-3 mb-10 text-white">En savoir plus</button>
          <img src={maçon} />
      </div>
     
    </BrowserRouter>
  );
}

export default App;