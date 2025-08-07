import Head from "../ui/Head";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  //Destock link animation
  const linkClass = (path) =>
    isActive(path)
      ? "text-white bg-black px-3 py-2 rounded-md"
      : "text-black hover:text-white hover:bg-black px-3 py-2 rounded-md transition";

  //Mobile link animation
  const mobileLinkClass = (path) =>
    isActive(path)
      ? "block bg-black py-2 px-3 rounded-md text-white"
      : "block text-black hover:text-white py-2 px-3";

  return (
    <header>
      {/* Barre du haut */}
      <Head />

      {/* Barre de navigation */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex gap-6 font-medium text-gray-700">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/project" className={linkClass("/project")}>
            Projects
          </Link>
          <Link to="/testimonial" className={linkClass("/testimonial")}>
            Testimonial
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact us
          </Link>
          <Link to="/login" className={linkClass("/login")}>
            Login
          </Link>
          <Link to="/project" className="px-3 py-2">
            <Search className="text-gray-700 cursor-pointer transition-colors" size={20} />
          </Link>
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-800 transition-colors font-medium"
          >
            Get a quote
          </a>
        </div>

        {/* Boutons mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/search">
            <Search
              className="text-gray-700 hover:text-yellow-500 cursor-pointer transition-colors"
              size={20}
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              to="/"
              className={mobileLinkClass('/')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={mobileLinkClass('/services')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={mobileLinkClass('/about')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/project"
              className={mobileLinkClass('/project')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/testimonial"
              className={mobileLinkClass('/testimonial')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link
              to="/contact"
              className={mobileLinkClass('/contact')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </Link>
            <Link
              to="/login"
              className={mobileLinkClass('/login')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <div className="pt-4 border-t">
              <a
                href="#"
                className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 transition-colors font-medium inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
