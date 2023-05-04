import { Link } from "react-router-dom";
import CenterContent from "./CenterContent";

const Navbar = () => {
  return (
    <header className="bg-light shadow flex-grow-0 sticky top-0 z-50">
      <CenterContent>
        <div className="flex justify-between py-5 items-center">
          <Link to="/" className="uppercase font-black text-2xl leading-10">
            #Vanlife
          </Link>
          <nav className="flex gap-14 text-lg">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </div>
      </CenterContent>
    </header>
  );
};

export default Navbar;
