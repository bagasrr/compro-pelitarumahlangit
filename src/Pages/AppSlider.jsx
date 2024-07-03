// src/App.js
import React from "react";
import PEKorea1 from "/image/Projectimg/ProjectEksporKorea/ProjectExporKorea1.jpeg";
import PEKorea2 from "/image/Projectimg/ProjectEksporKorea/ProjectExporKorea2.jpeg";
import PEKorea3 from "/image/Projectimg/ProjectEksporKorea/ProjectExporKorea3.jpeg";
import PEKorea4 from "/image/Projectimg/ProjectEksporKorea/ProjectExporKorea4.jpeg";
import ImageSlider from "../Components/Fragment/Slider/ImageSlider";

function SliderApp() {
  const images = [PEKorea1, PEKorea2, PEKorea3, PEKorea4]; // Tambahkan URL gambar lainnya
  return (
    <div className="SliderApp">
      <div style={{ padding: "10px" }}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default SliderApp;
