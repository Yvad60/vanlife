import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VanButton from "../components/VanButton";
import CenterContent from "../components/layout/CenterContent";

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
    <div className="mb-10">
      <CenterContent>
        {Object.keys(van).length === 0 ? (
          <h2 className="font-semibold text-2xl mt-5">Loading...</h2>
        ) : (
          <div className="relative">
            <img
              src={imageUrl}
              alt=""
              className="w-full relative z-10 h-[400px] border-none object-contain py-1"
            />
            <img
              src={imageUrl}
              alt=""
              className="w-full h-[400px] top-0 object-cover absolute blur"
            />
            <div className="mt-10">
              <VanButton>{type}</VanButton>
              <h1 className="text-2xl font-bold mt-4">{name}</h1>
              <p className="mt-2 font-semibold text-xl">
                ${price}
                <span className="text-lg font-medium">/day</span>
              </p>
              <p className="text-lg mt-4">{description}</p>
            </div>
            <button className="max-w-md w-full py-2 mt-10 font-semibold rounded lg:py-3 text-light  bg-orange-primary hover:bg-orange-700">
              Rent your van
            </button>
          </div>
        )}
      </CenterContent>
    </div>
  );
};

export default VansDetails;
