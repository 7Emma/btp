import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
