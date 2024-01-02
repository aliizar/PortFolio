import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navigation from "./Components/Navigation";
import News from "./NewsApp/News";
import Skills from "./Pages/Skills";
import FoodPanda from "./FoodPanda/PageFood/FoodPanda";
import TextUtils from "./TextUtils/TextUtils";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects/news/:projectId" element={<News />} />
          <Route path="/projects/foodpanda/:projectId" element={<FoodPanda />} />
          <Route path="/projects/textutils/:projectId" element={<TextUtils />} />
       </Routes>
      </div>
    </Router>
  );
};

export default App;
