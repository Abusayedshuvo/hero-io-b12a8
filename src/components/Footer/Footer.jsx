import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import footerLogo from "../../assets/logo-2.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#001931] py-8 lg:px-10 xl:px-20">
      <div className="flex justify-between">
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div>
          <p className="text-white font-medium text-xl mb-3">Social Links</p>
          <div className="text-white flex gap-2">
            <FaSquareXTwitter />
            <FaLinkedin />
            <FaFacebookSquare />
          </div>
        </div>
      </div>
      <hr className="border-[#E5E7EB] my-6 opacity-20" />
      <p className="text-center text-[#FAFAFA]">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
