import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { title, ratingAvg, downloads, image, id } = app;
  return (
    <>
      <Link to={`/apps/${id}`}>
        <div className="bg-white p-4 rounded">
          <img className="h-71 w-full" src={image} alt="" />
          <p className="text-xl font-medium py-4">{title}</p>
          <div className="flex justify-between ">
            <span className="bg-[#F1F5E8] rounded px-2.5 py-1.5 text-[#00D390] font-medium inline-flex items-center gap-2 text-base">
              <MdOutlineFileDownload />
              {downloads}M
            </span>
            <span className="bg-[#FFF0E1] rounded px-2.5 py-1.5 text-[#FF8811] font-medium inline-flex items-center gap-2 text-base">
              <FaStar /> {ratingAvg}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleApp;
