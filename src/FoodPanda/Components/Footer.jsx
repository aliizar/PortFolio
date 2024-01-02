import { Container, Typography } from "@mui/material";
import React from "react";
import Logo from "./foodpanda_logo_2023.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <div className="bg-black h-96 ">
        <Container>
          <div className="py-7">
            <img src={Logo} />
          </div>
        </Container>
        <div>
          <div className="flex space-x-10">
            <div>
              <p className="mx-14 font-semibold text-xl text-white ">
                Navigate
              </p>
              <div className="flex flex-col text-white ml-16 font-bold text-sm list-none mt-4">
                <li className="hover:text-pink-400 cursor-pointer">Home</li>
                <li className="hover:text-pink-400 cursor-pointer">About</li>
                <li className="hover:text-pink-400 cursor-pointer">Contatc</li>
                <li className="hover:text-pink-400 cursor-pointer">NewsRoom</li>
              </div>
            </div>

            <div>
              <p className=" font-semibold text-xl text-white pl-28">
                Callobrate 
              </p>
              <div className="flex flex-col text-white ml-32 font-bold text-sm list-none mt-4">
                <li className="hover:text-pink-400 cursor-pointer" >Explore Careers</li>
                <li  className="hover:text-pink-400 cursor-pointer">Feed Your Team</li>
                <li className="hover:text-pink-400 cursor-pointer">Try Panda Ads</li>
                <li className="hover:text-pink-400 cursor-pointer">Become A rider</li>
              </div>
            </div>
            <div>
              <p className=" font-bold text-xl text-white pl-60">
                Follow Us On
              </p>
              <div className="flex flex-row space-x-3 text-white ml-64 font-bold text-sm list-none mt-4">
                <li className="hover:text-pink-400 cursor-pointer">IN</li>
                <li className="hover:text-pink-400 cursor-pointer"><TwitterIcon/></li>
                <li className="hover:text-pink-400 cursor-pointer"><InstagramIcon/></li>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Footer;
