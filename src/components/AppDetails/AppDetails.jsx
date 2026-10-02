import { use } from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { addToStoreDB } from "../../utility/addToDB";

const AppDetails = ({ allApps }) => {
  const { appId } = useParams();
  const data = use(allApps);

  const app = data.find((item) => parseInt(item.id) === parseInt(appId));

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings 
  } = app;

  const handleInstall = id => {
    addToStoreDB(id)
  }
  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <img src={image} alt="" />
        </div>
        <div className="col-span-9">
          <p className="text-3xl font-bold text-[#001931] mb-2">{title}</p>
          <p>
            <span className="text-[#627382]">Developed by </span>
            <span className="text-[#632EE3] font-semibold">{companyName}</span>
          </p>

          <div className="flex gap-10 mb-5">
            <div>
              <FiDownload className="text-[#54CF68] text-3xl mb-2" />
              <p>Downloads</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {downloads}
              </p>
            </div>
            <div>
              <FaStar className="text-[#FF8811] text-3xl mb-2" />
              <p>Average Ratings</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {ratingAvg}
              </p>
            </div>
            <div>
              <BiSolidLike className="text-[#632EE3] text-3xl mb-2" />
              <p>Total Reviews</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {reviews}K
              </p>
            </div>
          </div>
          <button onClick={()=>handleInstall(appId)} className="bg-[#00D390] px-5 py-3 rounded text-white cursor-pointer">
            Install Now ( {size} MB)
          </button>
        </div>
      </div>
      <hr className="my-5 opacity-20" />
      <p className="text-2xl font-semibold mb-4">Ratings</p>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        data={ratings}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="count" width="auto" />
        <Bar dataKey="count" fill="#FF8811"></Bar>
      </BarChart>

      <hr className="my-5 opacity-20" />
      <p className="text-2xl font-semibold mb-4">Description</p>
      <p className="text-[#627382]"> {description} </p>
    </div>
  );
};

export default AppDetails;
