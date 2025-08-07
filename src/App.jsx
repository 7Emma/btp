import { BrowserRouter } from "react-router";
import Header from "./components/layouts/Header";
import AppRoutes from "./routes/AppRoutes";
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