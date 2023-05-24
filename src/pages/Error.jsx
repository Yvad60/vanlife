import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-2xl">Error occured try again!</h1>
      <p className="mt-5 max-w-3xl text-center bg-red-200 rounded-md py-4 px-3">{error?.message}</p>
    </div>
  );
};
export default Error;
