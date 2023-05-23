import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setHostVans(data.vans);
    };
    fetchVans();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Your listed vans</h1>
      <div className="flex flex-col gap-4 mt-5">
        {hostVans.map((van, index) => (
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
        ))}
      </div>
    </div>
  );
};
export default Vans;
