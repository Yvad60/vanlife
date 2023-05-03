import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
