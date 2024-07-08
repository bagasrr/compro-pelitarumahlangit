// src/App.js
import React, { Fragment, useEffect } from "react";

import ImageSlider from "../Components/Fragment/Slider/ImageSlider";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import Footer from "../Components/Element/Footer/Footer";
import StuffingKorea from "../Components/Element/LoadImage/StuffingKorea";
import ImPratama from "../Components/Element/LoadImage/ImpackPratama";
import WaButton from "../Components/Element/WaButton/WaButton";

const Project = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <ImageSlider images={StuffingKorea} projectTitle="Pengawasan Stuffing Ekspor ke Korea" />
      <ImageSlider images={ImPratama} projectTitle="Projek Impack Pratama" />
      <Footer />
      <WaButton nomorWa="81510180898" textWa="Halo, saya telah melihat Projek anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};

export default Project;
