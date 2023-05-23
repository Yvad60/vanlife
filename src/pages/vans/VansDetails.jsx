import { Link, useLoaderData, useLocation } from "react-router-dom";
import VanButton from "../../components/VanButton";
import CenterContent from "../../components/layout/CenterContent";
import { requireAuth } from "../../utils/auth";

export const loader = async ({ params }) => {
  requireAuth();
  const { id } = params;
  const response = await fetch(`/api/vans/${id}`);
  const data = await response.json();
  return data.vans;
};

const VansDetails = () => {
  const location = useLocation();
  const van = useLoaderData();

  const { imageUrl, name, price, type, description } = van;
  const selectedType = location.state?.type || "all";

  return (
    <div className="flex flex-col justify-center flex-1 mb-10">
      <img src={imageUrl} alt={name} className="relative object-cover sm:hidden h-[400px]" />
      <CenterContent>
        <div>
          <Link to={`..?${location.state?.searchParams || ""}`} relative="path">
            {/* &lt;-- to simulate an arrow */}
            &lt;--{" "}
            <span className="font-semibold underline cursor-pointer">
              Back to {selectedType} vans
            </span>
          </Link>
          <div className="flex flex-col items-end gap-10 mt-5 sm:flex-row">
            <img
              src={imageUrl}
              alt={name}
              className="relative flex-shrink-0 hidden object-cover rounded sm:block sm:w-1/2 h-[400px]"
            />
            <div className="mt-10 sm:mt-0">
              <VanButton>{type}</VanButton>
              <h1 className="mt-4 text-2xl font-bold">{name}</h1>
              <p className="mt-2 text-xl font-semibold">
                ${price}
                <span className="text-lg font-medium">/day</span>
              </p>
              <p className="mt-4 text-lg">{description}</p>
              <button className="w-full py-2 mt-10 font-semibold rounded lg:py-3 text-light bg-orange-primary hover:bg-orange-700">
                Rent your van
              </button>
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default VansDetails;
