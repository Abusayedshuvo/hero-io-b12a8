const Counter = () => {
  return (
    <div className="bg-linear-to-t from-[#632EE3] to-[#9F62F2] py-20 text-white text-center">
      <h3 className="text-5xl font-bold">Trusted by Millions, Built for You</h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-10 max-w-2/3 mx-auto">
        <div>
          <p className="text-white/80">Total Downloads</p>
          <p className="text-6xl font-extrabold my-4">29.6M</p>
          <p className="text-white/80">21% more than last month</p>
        </div>
        <div>
          <p className="text-white/80">Total Reviews</p>
          <p className="text-6xl font-extrabold my-4">906K</p>
          <p className="text-white/80">46% more than last month</p>
        </div>
        <div>
          <p className="text-white/80">Active Apps</p>
          <p className="text-6xl font-extrabold my-4">132+</p>
          <p className="text-white/80">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
