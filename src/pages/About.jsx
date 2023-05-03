import CenterContent from "../components/layout/CenterContent";

const About = () => {
  return (
    <div className="flex-1">
      <img
        src="/images/about-banner.webp"
        alt=""
        className="h-[400px] object-cover object-top w-full"
      />
      <CenterContent>
        <h1 className="text-3xl font-extrabold md:text-5xl mt-10">
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
        <div className="bg-orange-300 p-12 rounded my-14">
          <h4 className="text-4xl max-w-[500px] font-bold">
            Your destination is waiting. Your van is ready.
          </h4>
          <button className="px-12 py-4 mt-10 font-semibold rounded-lg md:text-lg bg-dark text-white hover:bg-soft-dark">
            Explore our vans
          </button>
        </div>
      </CenterContent>
    </div>
  );
};

export default About;
