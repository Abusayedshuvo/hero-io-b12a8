import notFound from "../../assets/not-found.png";
const NotFound = () => {
  return (
    <div className="py-20 text-center">
      <img className="mx-auto" src={notFound} alt="" />
      <p className="text-5xl font-semibold mb-2">OPPS!! APP NOT FOUND</p>
      <p>
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
        Go Back!
      </button>
    </div>
  );
};

export default NotFound;
