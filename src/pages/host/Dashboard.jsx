import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requireAuth } from "../../utils/auth";

export const loader = async ({ request }) => {
  await requireAuth(request);
  const vansPromise = getHostVans();
  return defer({ vans: vansPromise });
};

const Dashboard = () => {
  const hostVansPromise = useLoaderData();
  return (
    <div className="flex flex-1 gap-4 mt-8 mb-5">
      <div className="flex-shrink-0 w-1/2 bg-orange-100">
        <div className="px-5 py-10 h-1/2">
          <h1 className="text-3xl font-semibold">Welcome!</h1>
          <div className="flex justify-between mt-5">
            <p>Income last 30 days</p>
            <p>details</p>
          </div>
          <h3 className="mt-6 text-4xl font-bold">$2,260</h3>
        </div>

        <div className="px-5 py-10 bg-orange-200 h-1/2">
          <div className="flex justify-between mt-5">
            <p>Review score</p>
            <p>details</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-shrink-0 w-1/2 gap-4">
        <h3 className="text-2xl font-semibold">Your listed vans</h3>
        <Suspense fallback={<h1 className="mt-4 text-xl font-semibold">Loading vans...</h1>}>
          <Await resolve={hostVansPromise.vans}>
            {(vans) => {
              return vans.map((van, index) => (
                <Link key={index} to={`/vans/${van.id}`} relative="path" className="block w-full">
                  <div className="flex w-full p-4 bg-white rounded gap-7">
                    <img src={van.imageUrl} alt="" className="object-cover w-28" />
                    <div className="flex flex-col justify-between">
                      <h2 className="text-xl font-semibold">{van.name}</h2>
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
export default Dashboard;
