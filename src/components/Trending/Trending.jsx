import { Link } from "react-router";
import SingleApp from "./SingleApp";

const Trending = ({ data }) => {
  return (
    <>
      <div className="bg-[#F5F5F5] py-20">
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">Trending Apps</p>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.slice(0, 8).map((app) => (
              <SingleApp key={app.id} app={app}></SingleApp>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/apps"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-5"
            >
              <span> Show All</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
