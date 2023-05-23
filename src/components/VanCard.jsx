import { Link } from "react-router-dom";
import VanButton from "./VanButton";

const VanCard = ({ imageUrl, name, price, type, id }) => {
  return (
    <Link to={`/vans/${id}`}>
      <img src={imageUrl} alt={name} className="object-cover w-full rounded h-[280px]" />
      <div className="flex justify-between mt-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-right">
          <h4 className="text-lg font-semibold">${price}</h4>
          <p className="text-sm leading-[8px]">/day</p>
        </div>
      </div>
      <VanButton>{type}</VanButton>
    </Link>
  );
};

export default VanCard;
