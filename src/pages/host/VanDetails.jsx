import { Suspense } from "react";
import { Await, Link, NavLink, Outlet, defer, useLoaderData } from "react-router-dom";
import VanButton from "../../components/VanButton";
import { getSingleVan } from "../../utils/api";
import { requireAuth } from "../../utils/auth";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  const { id } = params;
  const vanPromise = getSingleVan(id);
  return defer({ van: vanPromise });
};

const VanDetails = () => {
  const vanPromise = useLoaderData();

  return (
    <div className="mt-8">
      <Link to=".." relative="path">
        {/* &lt;-- to simulate an arrow */}
        &lt;-- <span className="font-semibold underline cursor-pointer">Back to all vans</span>
      </Link>
      <Suspense fallback={<h1 className="mt-4 text-lg font-semibold">Loading van....</h1>}>
        <Await resolve={vanPromise.van}>
          {(van) => {
            const { imageUrl, name, price, type } = van;
            return (
              <div className="p-4 mt-3 mb-5 bg-white rounded">
                <div className="flex gap-10">
                  <img src={imageUrl} alt="" className="h-72" />
                  <div className="self-center space-y-8">
                    <VanButton>{type}</VanButton>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-xl font-semibold">${price}/day</p>
                  </div>
                </div>
                <div className="flex gap-8 mt-8 text-lg">
                  {["details", "pricing", "photos"].map((link, index) => (
                    <NavLink
                      to={link === "details" ? "." : link}
                      className={({ isActive }) =>
                        `capitalize ${isActive ? "underline font-medium" : ""}`
                      }
                      end
                      key={index}
                    >
                      {link}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-5">
                  <Outlet context={{ van }} />
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
export default VanDetails;
