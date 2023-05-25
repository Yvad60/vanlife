const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-orange-100 w-1/2">
          <h1 className="text-3xl font-semibold">Welcome!</h1>
          <div className="flex justify-between mt-5">
            <p>Income last 30 days</p>
            <p>details</p>
          </div>
          <h3 className="text-4xl font-bold mt-6">$2,260</h3>
          <div className="bg-orange-200 px-5 py-10">
            <div className="flex justify-between mt-5">
              <p>Review score</p>
              <p>details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
