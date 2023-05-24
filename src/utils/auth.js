import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
  const redirectTo = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn)
    throw redirect(
      `/login?message=You must login first${redirectTo && `&redirectTo=${redirectTo}`}`
    );
};

export async function loginUser(creds) {
  const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
