import { Link } from "react-router-dom";
import VanButton from "./VanButton";

const VanCard = ({ imageUrl, name, price, type, id }) => {
  return (
    <Link to={`/vans/${id}`}>
      <img src={imageUrl} alt={name} className="h-[280px] w-full object-cover rounded" />
      <div className="flex justify-between mt-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-right">
          <h4 className="text-lg font-semibold">${price}</h4>
          <p className="leading-[8px] text-sm">/day</p>
        </div>
      </div>
      <VanButton>{type}</VanButton>
    </Link>
  );
};

export default VanCard;
