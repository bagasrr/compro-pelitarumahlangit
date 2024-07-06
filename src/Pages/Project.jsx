// src/App.js
import React, { Fragment, useEffect } from "react";
import images from "../Components/Fragment/Slider/imgsrc";
("../Components/Fragment/Slider/imgsrc.jsx");

import ImageSlider from "../Components/Fragment/Slider/ImageSlider";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import Footer from "../Components/Element/Footer/Footer";

const Project = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <ImageSlider images={images} projectTitle="Pengawasan Stuffing Ekspor ke Korea" />
      <Footer />
    </Fragment>
  );
};

export default Project;
