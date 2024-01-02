import Logo from "./foodpanda_logo_2023.svg";
import React from "react";
const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between w-full bg-gray-100 py-4 px-4 ">
        <div className="logo mx-9 my-2 ">
          <img src={Logo}></img>
        </div>
        <div className="Navbar">
          <ul className="flex space-x-7 ml-56 my-3 text-black font-semibold">
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">Home</li>
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">About</li>
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">Panda Ads</li>
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">Contact</li>
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">NewsRoom</li>
            <li className="border-b-2 border-transparent transition-transform hover:border-pink-600 hover:border-b-4 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer text-base hover:text-gray-900 font-extrabold">Careers</li>
          </ul>
        </div>
        <div className="flex justify-center space-x-6">
          <button className=" border-2 border-white bg-pink-500 flex  rounded-full px-9 py-3 text-white hover:bg-pink-600 font-bold">
            Find Location
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
