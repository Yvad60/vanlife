import { Link, NavLink } from "react-router-dom";
import CenterContent from "./CenterContent";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex-grow-0 shadow bg-light">
      <CenterContent>
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="text-2xl font-black leading-10 uppercase">
            #Vanlife
          </Link>
          <nav className="flex text-lg gap-14">
            {["host", "about", "vans"].map((link, index) => (
              <NavLink
                key={index}
                to={link}
                className={({ isActive }) =>
                  `capitalize hover:font-medium ${isActive ? "underline font-medium" : ""}`
                }
              >
                {link}
              </NavLink>
            ))}
          </nav>
        </div>
      </CenterContent>
    </header>
  );
};

export default Navbar;
