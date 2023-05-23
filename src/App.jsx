import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostLayout from "./pages/host/Layout";
import Reviews from "./pages/host/Reviews";
import HostVanDetails from "./pages/host/VanDetails";
import HostVanInfo from "./pages/host/VanInfo";
import HostVanPhotos from "./pages/host/VanPhotos";
import HostVanPricing from "./pages/host/VanPricing";
import HostVans from "./pages/host/Vans";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VansDetails from "./pages/vans/VansDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route errorElement={<Error />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} loader={vansLoader} />
          <Route path="/vans/:id" element={<VansDetails />} />
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );
  return (
    <main className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
