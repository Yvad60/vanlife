const VanButton = ({ children }) => {
  // prettier-ignore
  const setBgClass = () => {
    switch (children) { // children will always be the van type
      case "simple": return "bg-orange-700";
      case "rugged": return "bg-dark-green";
      case "luxury": return "bg-dark"
    }
  };

  return (
    <button
      className={`px-5 mt-1 font-medium capitalize rounded py-[6px] text-light ${setBgClass()}`}
    >
      {children}
    </button>
  );
};

export default VanButton;
