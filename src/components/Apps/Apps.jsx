import { use, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SingleApp from "../Trending/SingleApp";
import NotFound from "../NotFound/NotFound";

const Apps = ({ allApps }) => {
  const data = use(allApps);
  const [search, setSearch] = useState("");
  const filterData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="py-20 px-20">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#001931] mb-4">
            Our All Applications
          </p>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="mt-10 mb-4 flex justify-between items-center">
          <p className="text-[#001931] text-2xl font-semibold">
            ({data.length}) Apps Found
          </p>
          <div className="relative">
            <IoSearchOutline className="absolute top-3 left-4 text-2xl text-[#D2D2D2]" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#D2D2D2] rounded pr-4 py-3 pl-12"
              type="text"
              placeholder="search Apps"
            />
          </div>
        </div>
        {filterData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {filterData.map((app) => (
              <SingleApp key={app.id} app={app}></SingleApp>
            ))}
          </div>
        ) : (
          <NotFound></NotFound>
        )}
      </div>
    </>
  );
};

export default Apps;
