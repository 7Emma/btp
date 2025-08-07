import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Services";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";
import Testimonial from "../pages/Testimonial";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
