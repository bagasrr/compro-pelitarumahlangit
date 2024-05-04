import { Fragment } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import Header from "../Components/Fragment/Header/Header";
import AboutUs from "../Components/Fragment/About Us/AboutUs";
import WaButton from "../Components/Element/WaButton/WaButton";
import Products from "../Components/Fragment/Products/Products";
import OurPartner from "../Components/Fragment/OurPartner/OurPartner";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <Products />
      <OurPartner />

      <WaButton nomorWa="81510180898" textWa="Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};
export default Home;
