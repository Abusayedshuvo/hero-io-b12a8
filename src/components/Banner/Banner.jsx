import googleIcon from "../../assets/google-play.svg";
import appIcon from "../../assets/app-store.svg";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="text-center pt-20">
      <h1 className="text-7xl font-bold  mb-4">
        We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-4 my-10">
        <button className="text-[#001931] font-semibold text-xl border border-[#D2D2D2] px-6 py-3 rounded flex gap-2">
          <img src={googleIcon} alt="" />
          <span>Google Play</span>
        </button>
        <button className="text-[#001931] font-semibold text-xl border border-[#D2D2D2] px-6 py-3 rounded flex gap-2">
          <img src={appIcon} alt="" />
          <span>App Store</span>
        </button>
      </div>
      <img className="mx-auto" src={banner} alt="" />
    </div>
  );
};

export default Banner;
