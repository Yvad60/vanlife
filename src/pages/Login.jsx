import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../utils/auth";

export const loader = ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const redirectTo = new URL(request.url).searchParams.get("redirectTo");
  try {
    const email = formdata.get("email");
    const password = formdata.get("password");
    await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    return redirect(redirectTo || "/host");
  } catch (error) {
    return error.message;
  }
};

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Sign in to your account</h1>
      {message && <p className="text-red-400 mt-6 text-lg">{message}</p>}
      {errorMessage && <p className="text-red-400 mt-6 text-lg">{errorMessage}</p>}
      <Form className="flex flex-col w-[600px] mt-6 max-w-4xl" method="post" replace>
        <div className="border-2 rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            className="py-4 w-full outline-none px-3 border-b-2"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            className="py-4 w-full outline-none px-3"
            placeholder="Password"
          />
        </div>

        <button
          disabled={navigation.state === "submitting"}
          type="submit"
          className="w-[600px] py-2 mt-8 font-semibold rounded lg:py-3 text-light bg-orange-primary hover:bg-orange-500 disabled:bg-gray-400"
        >
          Sign in
        </button>
      </Form>

      <p className="mt-8 font-medium">
        Don’t have an account?{" "}
        <Link className="text-orange-primary font-semibold">Create one now</Link>
      </p>
    </div>
  );
};
export default Login;
