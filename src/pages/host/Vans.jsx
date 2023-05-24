import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requireAuth } from "../../utils/auth";

export const loader = async ({ request }) => {
  await requireAuth(request);
  const vansPromise = getHostVans();
  return defer({ vans: vansPromise });
};

const Vans = () => {
  const hostVansPromise = useLoaderData();

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Your listed vans</h1>
      <div className="flex flex-col gap-4 mt-5">
        <Suspense fallback={<h1 className="mt-4 text-lg font-semibold">Loading vans...</h1>}>
          <Await resolve={hostVansPromise.vans}>
            {(vans) => {
              return vans.map((van, index) => (
                <Link key={index} to={`${van.id}`}>
                  <div className="flex flex-col sm:flex-row sm:h-56 max-w-3xl p-4 bg-white rounded gap-7">
                    <img src={van.imageUrl} alt="" className="h-40 object-cover sm:h-full" />
                    <div className="flex flex-col justify-between">
                      <h2 className="text-2xl font-semibold">{van.name}</h2>
                      <p className="line-clamp-3">{van.description}</p>
                      <h3 className="mt-3 sm:mt-0">${van.price}/day</h3>
                    </div>
                  </div>
                </Link>
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};
export default Vans;
