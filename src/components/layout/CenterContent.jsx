const CenterContent = ({ children, className }) => {
  return <div className={`w-11/12 max-w-5xl mx-auto ${className}`}>{children}</div>;
};

export default CenterContent;
