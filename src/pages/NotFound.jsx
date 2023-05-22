import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl">Sorry, the page you were looking for was not found.</h1>
        <Link
          to="/"
          className="inline-block w-1/2 py-2 mt-10 font-semibold text-center rounded md:py-3 lg:py-4 md:text-lg bg-dark text-light"
        >
          Return back to home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
