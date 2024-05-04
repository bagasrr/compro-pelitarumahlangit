import { Fragment } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import AboutUs from "../Components/Fragment/About Us/AboutUs";
import VisiMisi from "../Components/Fragment/VisiMisi/VisiMisi";
import CompanyValidation from "../Components/Fragment/CompanyValidation/CompanyValidation";

const AboutPages = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ height: "var(--nav-height)" }}></div>
      <AboutUs />
      <VisiMisi />

      <CompanyValidation />
    </Fragment>
  );
};
export default AboutPages;
