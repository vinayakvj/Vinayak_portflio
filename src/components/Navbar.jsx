import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    //  og colors: bg-[#0a192f] text-gray-300
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#434343] text-gray-300">
      {/* logo */}
      {/* <div>
        <img src={Logo} alt="logo image" style={{ width: "50px" }} />
      </div> */}

      {/* logo text */}
      <div>
        <h1 className="text-5xl font-bold hover:text-black cursor-pointer">
          VJ
        </h1>
      </div>

      <div>
        {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute bg-[#0a192f] text-gray-300 top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/vinayak-jayananth/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/vinayak-jayananth/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300  bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/vinayak-jayananth/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f96]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/vinayak-jayananth/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
