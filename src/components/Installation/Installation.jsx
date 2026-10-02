import { use, useEffect, useState } from "react";
import { getStore } from "../../utility/addToDB";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const Installation = ({ allApps }) => {
  const [installApps, setInstallApps] = useState([]);
  const data = use(allApps);
  useEffect(() => {
    const storeData = getStore();
    const convetedData = storeData.map((id) => parseInt(id));
    const InstalledApp = data.filter((item) => convetedData.includes(item.id));
    setInstallApps(InstalledApp);
  }, [data]);
  return (
    <div className="py-20 container mx-auto">
      <div className="text-center mb-10">
        <p className="text-[#001931] text-5xl font-bold mb-5">
          Your Installed Apps
        </p>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between mb-4 ">
        <p className="text-[#001931] text-2xl font-semibold">1 Apps Found</p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size
            <MdArrowDropDown className="text-xl" />
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>High-Low</a>
            </li>
            <li>
              <a>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      {installApps.map((item) => (
        <div className="bg-white p-4 rounded mb-4" item={item}>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-lg" src={item.image} alt="" />
              </div>
              <div>
                <p className="text-xl font-medium mb-3"> {item.title} </p>
                <div className="flex gap-4 font-medium">
                  <div className="flex gap-2 items-center text-[#00D390]">
                    <FiDownload />
                    <p>{item.downloads}M</p>
                  </div>
                  <div className="flex gap-2 items-center text-[#FF8811]">
                    <FaStar />
                    <p>{item.ratingAvg} </p>
                  </div>
                  <div className="flex gap-2 items-center text-[#627382]">
                    <p>{item.size} MB </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#00D390] text-white px-4 py-3 rounded">
                Uninstall
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
