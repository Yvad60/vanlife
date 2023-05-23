import { redirect } from "react-router-dom";

export const requireAuth = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) redirect("/login");
};
