import { Link, useLoaderData } from "react-router-dom";

export const loader = ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

const Login = () => {
  const message = useLoaderData();

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Sign in to your account</h1>
      {message && <p className="text-red-400 mt-6 text-lg">{message}</p>}
      <form className="flex flex-col w-[600px] mt-6 max-w-4xl border-2 rounded-lg overflow-hidden">
        <input
          type="email"
          name=""
          className="py-4 w-full outline-none px-3 border-b-2"
          placeholder="Email address"
        />
        <input
          type="password"
          name=""
          className="py-4 w-full outline-none px-3"
          placeholder="Password"
        />
      </form>
      <button className="w-[600px] py-2 mt-8 font-semibold rounded lg:py-3 text-light bg-orange-primary hover:bg-orange-500">
        Sign in
      </button>
      <p className="mt-8 font-medium">
        Don’t have an account?{" "}
        <Link className="text-orange-primary font-semibold">Create one now</Link>
      </p>
    </div>
  );
};
export default Login;
