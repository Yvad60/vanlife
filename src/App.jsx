import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/vans/Vans";
import VansDetails from "./pages/vans/VansDetails";

const App = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VansDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
