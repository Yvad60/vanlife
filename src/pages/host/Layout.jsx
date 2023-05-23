import { NavLink, Outlet } from "react-router-dom";
import CenterContent from "../../components/layout/CenterContent";

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
              end={link === "dashboard"}
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
