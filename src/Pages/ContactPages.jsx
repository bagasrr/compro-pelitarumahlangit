import { Fragment, useEffect } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import WaButton from "../Components/Element/WaButton/WaButton";

import Contact from "../Components/Fragment/Contact/Contact";
import Footer from "../Components/Element/Footer/Footer";

const ContactPages = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div style={{ height: "var(--nav-height)" }}></div>
      <Contact />
      <Footer />

      <WaButton nomorWa="81510180898" textWa="halo, saya telah  melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};
export default ContactPages;
