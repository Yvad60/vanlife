import { useEffect, useState } from "react";

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
          <div key={index} className="flex h-56 max-w-3xl p-4 bg-white rounded gap-7">
            <img src={van.imageUrl} alt="" className="h-full" />
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-semibold">{van.name}</h2>
              <p className="line-clamp-3">{van.description}</p>
              <h3>${van.price}/day</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Vans;
