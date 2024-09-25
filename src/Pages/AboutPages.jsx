import { Fragment, useEffect } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import AboutUs from "../Components/Fragment/About Us/AboutUs";
import VisiMisi from "../Components/Fragment/VisiMisi/VisiMisi";
import CompanyValidation from "../Components/Fragment/CompanyValidation/CompanyValidation";
import Footer from "../Components/Element/Footer/Footer";
import WaButton from "../Components/Element/WaButton/WaButton";

const AboutPages = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div style={{ height: "var(--nav-height)" }}></div>
      <AboutUs />
      <VisiMisi />
      <CompanyValidation />
      <WaButton nomorWa="81510180898" textWa="Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />

      <Footer />
    </Fragment>
  );
};
export default AboutPages;
