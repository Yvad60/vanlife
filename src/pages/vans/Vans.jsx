import { Suspense } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import VanCard from "../../components/VanCard";
import CenterContent from "../../components/layout/CenterContent";
import "../../server";
import { getVans } from "../../utils/api";

export const loader = async () => {
  const vansPromise = getVans();
  return defer({ vans: vansPromise });
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();
  const typeFilter = searchParams.get("type");

  const renderVans = (vans) => {
    const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;
    return (
      <>
        <div className="flex items-center gap-6 my-8">
          {["rugged", "simple", "luxury"].map((type, index) => (
            <button
              key={index}
              onClick={() => setSearchParams({ type })}
              className={`px-6 py-2 capitalize  rounded ${
                type === typeFilter ? "bg-orange-300" : "bg-orange-100"
              }`}
            >
              {type}
            </button>
          ))}
          {typeFilter && (
            <button onClick={() => setSearchParams({})} className="underline capitalize rounded">
              Clear filters
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {displayedVans.map((van) => (
            <VanCard {...van} key={van.id} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-1 mt-8 mb-14">
      <CenterContent>
        <h1 className="mb-6 text-3xl font-bold">Explore our van options</h1>
        <Suspense fallback={<h1 className="mt-4 text-lg font-semibold">Loading vans...</h1>}>
          <Await resolve={vansPromise.vans}>{renderVans}</Await>
        </Suspense>
      </CenterContent>
    </div>
  );
};

export default Vans;
