import { Fragment } from "react";
import Navbar from "../src/Components/Fragment/Navbar/Navbar";
import Header from "../src/Components/Fragment/Header/Header";
import AboutUs from "../src/Components/Fragment/About Us/AboutUs";
import WaButton from "../src/Components/Element/WaButton/WaButton";
import Products from "../src/Components/Fragment/Products/Products";
import OurPartner from "../src/Components/Fragment/OurPartner/OurPartner";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <Products />
      <OurPartner />

      <WaButton nomorWa="83804262567" textWa="Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};
export default App;
