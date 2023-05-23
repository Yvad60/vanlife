import { useOutletContext } from "react-router-dom";

const VanPricing = () => {
  const { van } = useOutletContext();

  return (
    <div>
      <h3>
        <span className="text-xl font-bold">${van.price}</span>/day
      </h3>
    </div>
  );
};
export default VanPricing;
