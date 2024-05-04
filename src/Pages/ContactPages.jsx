import { Fragment } from "react";
import Navbar from "../Components/Fragment/Navbar/Navbar";
import CategoryText from "../Components/Fragment/CategoryText/CategoryText";
import WaButton from "../Components/Element/WaButton/WaButton";

import "./Cp.css";

const ContactPages = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ height: "var(--nav-height)" }}></div>
      <div className="contactPages-container">
        <div className="maps">
          <h3 className="mapsTitle">Google Maps</h3>
          <div className="mapsBox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212.62990983377716!2d106.99209190391646!3d-6.4210769817849425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1714808942366!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mapsIframe"
            ></iframe>
          </div>
        </div>
        <div className="desc">
          <CategoryText varTitle="Email :" varDesc="pelita.rumahlangit@gmail.com" />
          <CategoryText varTitle="Alamat :" varDesc="Jln KH Umar Rawa Ilat No. 16 Desa Mampir Kecamata Cileungsi – Kabupaten Bogor Jawa barat" className="mapsDesc" />
          <CategoryText varTitle="Telepon :" varDesc="+62 815-1018-0898" className="mapsDesc" />
        </div>
      </div>

      <WaButton nomorWa="81510180898" textWa="Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan." />
    </Fragment>
  );
};
export default ContactPages;
