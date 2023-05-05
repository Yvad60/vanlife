import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VanButton from "../../components/VanButton";
import CenterContent from "../../components/layout/CenterContent";

const VansDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState({});
  const { imageUrl, name, price, type, description } = van;

  useEffect(() => {
    const fetchVans = async () => {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    };
    fetchVans();
  }, [id]);

  return (
    <div className="flex flex-col justify-center flex-1 mb-10">
      <img src={imageUrl} alt={name} className="object-cover sm:hidden relative h-[400px]" />
      <CenterContent>
        {Object.keys(van).length === 0 ? (
          <h2 className="mt-5 text-2xl font-semibold">Loading...</h2>
        ) : (
          <div className="flex flex-col sm:flex-row items-end gap-10">
            <img
              src={imageUrl}
              alt={name}
              className="flex-shrink-0 hidden sm:block rounded object-cover sm:w-1/2 relative h-[400px]"
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
        )}
      </CenterContent>
    </div>
  );
};

export default VansDetails;
