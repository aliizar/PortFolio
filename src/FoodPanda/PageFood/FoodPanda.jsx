import React from "react";
import { Container, Typography } from "@mui/material";
import Pic1 from "./Assests/fp-home.jpg";
import Pic3 from "./Assests/Delivery-Hero-enters-Japan-1200x800.jpg";
import Pic4 from "./Assests/Picture 4.jpg";
import Pic7 from "./Assests/How-To-Make-Food-Delivery-App-Like-FoodPanda-in-Singapore.png";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import Cards from "../Components/Cards";

const FoodPanda = () => {
  document.body.style.backgroundColor = "#945e5e";
  const { projectId, type } = useParams();

  return (
    <>
      <div className="flex">
        <img className="w-full h-[30rem]  max-w-full" src={Pic7}></img>
      </div>
      <div>
        <div className="bg-gray-900">
          <Container>
            <p className="text-white h-80 font-bold text-4xl mb-20 flex justify-center items-center relative bottom-10 mt-11">
              {projectId}
              We’re here to help you live life the panda way. Spend more time
              doing what you love – we’ll take care of tasty meals, fresh
              groceries and new flavours.
            </p>
          </Container>
        </div>
        <hr />
        <hr />
        <div className="container  flex justify-center items-center mt-6">
          <div className="ml-24 h-64">
            <img className="h-full rounded-full w-full" src={Pic1}></img>
          </div>
          <div className="relative left-3 top-3">
            <p className="ml-8 mb-9 text-white font-bold text-5xl">
              Meet the next generation of delivery!
            </p>
            <p className="ml-8 text-white mb-8">
              What makes quick commerce quick? We stand for swift personalised
              delivery solutions for our customers, partners and employees.
              Learn how we empower authentic lifestyles and drive innovation
              across the globe.
            </p>
            <button className="ml-5 mb-5 border-2 border-white bg-slate-300 text-gray-950 flex  rounded-full px-9 py-3  hover:bg-slate-200 hover:text-gray-800 font-bold">
              Read Our Story
            </button>
          </div>
        </div>
        <hr />
        <hr />
        <div className="container  flex justify-center items-center mt-32">
          <hr />
          <hr />
          <div className="relative left-11 top-3">
            <p className="ml-40 mb-9 text-white font-bold text-5xl">
              Taste the convenience.
            </p>
            <p className="ml-16 mb-8 text-white text-base">
              Try us out! Delicious food and speedy groceries are at your
              fingertips. Go ahead, download foodpanda now.
            </p>
            <div className="flex space-x-6 justify-center items-center">
              <button className="ml-11 mb-5 border-2 border-gray-400 bg-slate-300 flex  rounded-full px-6 py-3 text-black hover:bg-pink-700 font-bold">
                Download On Apple Phone
              </button>
              <button className="ml-5 mb-5 border-2 border-gray-400 bg-slate-300 flex  rounded-full px-9 py-3 text-black hover:bg-pink-700 font-bold">
                Download On Andriod
              </button>
              <button className="ml-5 mb-5 border-2 border-gray-400 bg-slate-300 flex  rounded-full px-9 py-3 text-black hover:bg-pink-700 font-bold">
                Read Our MicroSoft
              </button>
            </div>
          </div>
          <div className="ml-24 h-64">
            <img className="h-full  w-full pr-24 rounded" src={Pic3}></img>
          </div>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="container  flex justify-center items-center mt-20 pl-20">
        <div className="ml-24 h-64">
          <img className="h-full rounded w-full" src={Pic4}></img>
        </div>
        <div className="relative left-3 top-3">
          <p className="ml-8 mb-9 text-white font-bold text-5xl">
            Find the job you'd love
          </p>
          <p className="ml-8 mb-8 text-white">
            Hungry to make a difference? There’s a seat at our table!
            <br />
            <br />
            Find out how we connect tech, passions, projects and people –
            explore international career opportunities at foodpanda.
          </p>
          <button className="ml-5 mb-5 border-2 border-white bg-slate-300  flex  rounded-full px-9 py-3 text-black hover:bg-pink-600 font-bold">
            Join us
          </button>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <br />

      <div className="my-8">
        <p className="text-5xl font-bold flex justify-center items -center pt-2 py-7 text-white">
          Have you heard?
        </p>
        <Typography
          style={{
            fontWeight: "lighter",
            paddingBottom: "16px",
            color: "white",
          }}
          variant="body1"
          align="center"
        >
          The industry is changing fast! Stay up to date with foodpanda press.
          Catch up on the lates news, updates and reports here.
        </Typography>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <p className="mt-6 underline ml-[32rem] text-4xl text-teal-100 font-serif font-bold">
        {" "}
        Our Achivements
      </p>
      <div className=" relative top-5">
        <Cards />
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default FoodPanda;
