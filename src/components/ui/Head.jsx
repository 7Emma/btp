import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import eng from "../../assets/images/flag/flag-uk.png";
import fran from "../../assets/images/flag/flag-france.png";

function Head() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const languages = {
    en: { label: "English", img: eng },
    fr: { label: "Français", img: fran },
  };

  const current = languages[lang];

  return (
    <div className="bg-[#252525] text-white px-6 py-4">
      {/* Barre du haut */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Choix de langue */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer bg-white text-black px-2 py-1 rounded w-40"
            onClick={() => setOpen(!open)}
          >
            <img src={current.img} alt={current.label} className="w-5 h-5" />
            <span>{current.label}</span>
          </div>

          {open && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded w-40 z-10">
              {Object.entries(languages).map(([key, langData]) => (
                <div
                  key={key}
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setLang(key);
                    setOpen(false);
                  }}
                >
                  <img
                    src={langData.img}
                    alt={langData.label}
                    className="w-5 h-5"
                  />
                  <span>{langData.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Informations de contact */}
        <div className="flex flex-wrap items-center gap-6 text-lg">
          <div className="flex items-center gap-1 group">
            <div className="bg-white p-1">
              <Phone
                size={20}
                className="text-orange-500 font-bold group-hover:text-black"
              />
            </div>
            <span className="text-white">Call: +229 01XXXXXXXX</span>
          </div>
          <div className="flex items-center gap-1 group">
            <div className="bg-white p-1">
              <Mail
                size={20}
                className=" text-orange-500 group-hover:text-black"
              />
            </div>{" "}
            <span className="text-white">Email: btp@work.com</span>
          </div>
          <div className="flex items-center gap-1 group">
            <div className="bg-white p-1">
              {" "}
              <MapPin
                size={20}
                className="text-orange-500 group-hover:text-black"
              />
            </div>
            <span className="text-white">Location</span>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-white p-2 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
