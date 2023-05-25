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
import Login, { action as loginAction, loader as loginLoader } from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostLayout, { loader as hostLayoutLoader } from "./pages/host/Layout";
import Reviews from "./pages/host/Reviews";
import HostVanDetails, { loader as hostVanDetailsLoader } from "./pages/host/VanDetails";
import HostVanInfo from "./pages/host/VanInfo";
import HostVanPhotos from "./pages/host/VanPhotos";
import HostVanPricing from "./pages/host/VanPricing";
import HostVans, { loader as hostVansLoader } from "./pages/host/Vans";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VansDetails, { loader as vanDetailsLoader } from "./pages/vans/VansDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route errorElement={<Error />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} loader={loginLoader} action={loginAction} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} loader={vansLoader} />
          <Route path="/vans/:id" element={<VansDetails />} loader={vanDetailsLoader} />
          <Route path="/host" element={<HostLayout />} loader={hostLayoutLoader}>
            <Route index element={<Dashboard />} loader={hostVansLoader} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
            <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailsLoader}>
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
