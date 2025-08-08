function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 m-20">
      {/* Formulaire */}
      <div className="md:w-1/2">
        <h2 className="uppercase font-bold text-lg mb-4 text-center md:text-left">
          Contactez-nous
        </h2>

        <form className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Nom"
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Numéro de téléphone"
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message"
            rows="4"
          ></textarea>
          <button className="w-28 bg-orange-500 text-white rounded-full py-2 hover:bg-orange-600 transition">
            Envoyer
          </button>
        </form>
      </div>

      {/* Google Maps */}
      <div className="md:w-1/2 h-[300px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31714.90825640513!2d2.6288533999999997!3d6.475554799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sbj!4v1754692069355!5m2!1sfr!2sbj"
          className="w-full h-full rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
