import React from "react";
import Header from "../Components/Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Project";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <About />
      <Projects />
      <div className="bg-gray-700 pb-12">
        <Contact />
      </div>
    <Footer/>
    </>
  );
}
