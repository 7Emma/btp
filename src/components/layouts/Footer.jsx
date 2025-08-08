import {
  Facebook,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router";
import insta from "../../assets/images/instagram.jpg";
import logo from "../../assets/images/logo2.png";

function Footer() {
  const currentYear = new Date().getFullYear(); //Mise a jour de l'annee

  return (
    <footer className="bg-[#252525] text-white">
      {/* Section contact supérieure */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-800">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-center items-center gap-10 text-sm sm:text-base">
          {/* ÉLÉMENT 1 */}
          <div className="flex flex-col items-center gap-1 group hover:cursor-pointer text-center">
            <Phone
              size={24}
              className="text-white group-hover:text-orange-500 transition-colors"
            />
            <span className="text-white group-hover:text-orange-500 transition-colors">
              Call: +229 01XXXXXXXX
            </span>
          </div>

          {/* ÉLÉMENT 2 */}
          <div className="flex flex-col items-center gap-1 group hover:cursor-pointer text-center">
            <Mail
              size={24}
              className="text-white group-hover:text-orange-500 transition-colors"
            />
            <span className="text-white group-hover:text-orange-500 transition-colors">
              Email: btp@work.com
            </span>
          </div>

          {/* ÉLÉMENT 3 */}
          <div className="flex flex-col items-center gap-1 group hover:cursor-pointer text-center">
            <MapPin
              size={24}
              className="text-white group-hover:text-orange-500 transition-colors"
            />
            <span className="text-white group-hover:text-orange-500 transition-colors">
              Localisation{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 mx-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Liens rapides */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-white">LIENS RAPIDES</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  to="/project"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/testimonial"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Testimonial
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          {/* Flux Instagram */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-white">
              FLUX INSTAGRAM
            </h2>
            <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto md:mx-0">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="">
                  <img
                    src={insta}
                    alt={`Instagram ${index + 1}`}
                    className="w-[50px] h-[50px] object-cover border-2 border-white bottom-8 transition-colors rounded-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-white">
              ABONNEZ-VOUS À NOTRE NEWSLETTER
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-3 w-full bg-white border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure avec logo et réseaux sociaux */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-6 py-4 border-t border-gray-800 w-full bg-white">
        <p className="text-black text-lg">
          © {currentYear} BTP Construction. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
