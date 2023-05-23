import { useOutletContext } from "react-router-dom";

const VanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img src={van.imageUrl} alt="van image" className="h-40 rounded" />
    </div>
  );
};
export default VanPhotos;
