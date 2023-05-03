import { useEffect, useState } from "react";
import VanCard from "../components/VanCard";
import CenterContent from "../components/layout/CenterContent";
import "../server";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    };
    fetchVans();
  }, []);

  return (
    <div className="flex-1 mt-10 mb-14">
      <CenterContent>
        <h1 className="">Explore our van options</h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12">
          {vans.map((van) => (
            <VanCard {...van} key={van.id} />
          ))}
        </div>
      </CenterContent>
    </div>
  );
};

export default Vans;
