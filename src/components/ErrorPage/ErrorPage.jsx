import img404 from "../../assets/404.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header></Header>
      <div className="text-center py-20">
        <img className="mx-auto" src={img404} alt="" />
        <p className="text-5xl font-semibold mb-2">Oops, page not found!</p>
        <p className="text-[#627382] text-xl mb-5">
          The page you are looking for is not available.
        </p>
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-5">
          Go Back!
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
