import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import VanButton from "../../components/VanButton";

const VanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState({});
  const { imageUrl, name, price, type } = van;

  useEffect(() => {
    const fetchVan = async () => {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    };
    fetchVan();
  }, [id]);

  return (
    <div className="mt-8">
      <Link to=".." relative="path">
        {/* &lt;-- to simulate an arrow */}
        &lt;-- <span className="font-semibold underline cursor-pointer">Back to all vans</span>
      </Link>
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
              className={({ isActive }) => `capitalize ${isActive ? "underline font-medium" : ""}`}
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
    </div>
  );
};
export default VanDetails;
