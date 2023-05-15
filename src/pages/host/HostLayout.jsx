import { Link, Outlet } from "react-router-dom";
import CenterContent from "../../components/layout/CenterContent";

const HostLayout = () => {
  const navlinks = ["dashboard", "income", "vans", "reviews"];
  return (
    <div>
      <CenterContent>
        <div className="flex gap-10 mt-3">
          {navlinks.map((link, index) => (
            <Link
              to={link === "dashboard" ? "/host" : link}
              key={index}
              className="capitalize hover:underline text-lg"
            >
              {link}
            </Link>
          ))}
        </div>
        <Outlet />
      </CenterContent>
    </div>
  );
};
export default HostLayout;
