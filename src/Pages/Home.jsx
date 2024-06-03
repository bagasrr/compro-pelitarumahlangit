import { Fragment } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import Header from "../Components/Fragment/Header/Header";
import AboutUs from "../Components/Fragment/About Us/AboutUs";
import WaButton from "../Components/Element/WaButton/WaButton";
import Products from "../Components/Fragment/Products/Products";
import OurPartner from "../Components/Fragment/OurPartner/OurPartner";
import Footer from "../Components/Element/Footer/Footer";
import Project from "../Components/Fragment/Project/Project";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <Products />
      <Project />
      <OurPartner />
      <Footer />

      <WaButton nomorWa="81510180898" textWa="Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};
export default Home;
