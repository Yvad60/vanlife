import { NavLink, Outlet } from "react-router-dom";
import CenterContent from "../../components/layout/CenterContent";
import { requireAuth } from "../../utils/auth";

export const loader = async ({ request }) => {
  await requireAuth(request);
};

const Layout = () => {
  const navlinks = ["dashboard", "income", "vans", "reviews"];
  return (
    <div>
      <CenterContent>
        <div className="flex gap-10 mt-3">
          {navlinks.map((link, index) => (
            <NavLink
              to={link === "dashboard" ? "." : link}
              key={index}
              end
              className={({ isActive }) =>
                `capitalize hover:underline text-lg ${
                  isActive ? `font-medium underline ${isActive}` : ""
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </CenterContent>
    </div>
  );
};
export default Layout;
