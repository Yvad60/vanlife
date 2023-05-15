import { Link } from "react-router-dom";
import CenterContent from "../components/layout/CenterContent";

const About = () => {
  return (
    <div className="flex-1">
      <CenterContent>
        <img
          src="/images/about-banner.webp"
          alt="banner"
          className="object-cover object-top w-full h-[300px] md:h-[400px]"
        />
        <h1 className="mt-10 text-3xl font-extrabold md:text-5xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="text-lg">
          <p className="mt-4">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans
            are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <p className="mt-4">
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the
            world on 4 wheels.
          </p>
        </div>
        <div className="p-8 my-10 bg-orange-300 rounded md:p-12 md:my-14">
          <h4 className="text-2xl font-bold md:text-4xl max-w-[500px]">
            Your destination is waiting. Your van is ready.
          </h4>
          <Link
            to="/vans"
            className="inline-block px-12 mt-10 font-semibold text-white rounded-lg py-[10px] sm:py-4 md:text-lg bg-dark hover:bg-soft-dark"
          >
            Explore our vans
          </Link>
        </div>
      </CenterContent>
    </div>
  );
};

export default About;
