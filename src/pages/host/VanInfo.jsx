import { useOutletContext } from "react-router-dom";

const VanInfo = () => {
  const { van } = useOutletContext();
  return (
    <div className="space-y-3">
      <p>
        <span className="font-semibold">Name:</span> {van.name}
      </p>
      <p>
        <span className="font-semibold">Category:</span> {van.type}
      </p>
      <p>
        <span className="font-semibold">Description:</span> {van.description}
      </p>
    </div>
  );
};
export default VanInfo;
