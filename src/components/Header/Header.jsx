import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const links = (
    <>
      <li className="px-4">
        <NavLink to="/"> Home </NavLink>
      </li>
      <li className="px-4">
        <NavLink to="/apps"> Apps </NavLink>
      </li>
      <li className="px-4"> 
          <NavLink to="/installation">  Installation </NavLink>
        </li>
    </>
  );

  return (
    <div className="navbar bg-white xl:px-20 border-b border-[#E9E9E9]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img src={logoImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          target="black"
          href="https://github.com/Abusayedshuvo"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          <FaGithub />
          <span> Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
