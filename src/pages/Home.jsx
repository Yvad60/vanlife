import CenterContent from "../components/layout/CenterContent";

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center flex-1 bg-center bg-no-repeat bg-cover bg-home-bg">
      <div className="absolute w-full h-full bg-dark bg-opacity-40"></div>
      <CenterContent>
        <div className="relative z-10 flex flex-col items-center gap-3 text-white md:gap-5">
          <h1 className="max-w-2xl text-3xl font-extrabold text-center md:text-5xl">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="max-w-xl text-center md:text-lg">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to
            make your perfect road trip.
          </p>
          <button className="w-1/2 py-2 mt-5 font-semibold rounded md:py-3 lg:py-4 md:text-lg bg-orange-primary hover:bg-orange-700">
            Find your van
          </button>
        </div>
      </CenterContent>
    </div>
  );
};

export default Home;
