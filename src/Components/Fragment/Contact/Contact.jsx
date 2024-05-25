import Maps from "../../Element/Maps/Maps";
import CategoryText from "../CategoryText/CategoryText";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactPages-container">
      <Maps />

      <div className="desc">
        <CategoryText varTitle="Email :" varDesc="pelita.rumahlangit@gmail.com" />
        <CategoryText varTitle="Alamat :" varDesc="Jln KH Umar Rawa Ilat No. 16 Desa Mampir Kecamata Cileungsi – Kabupaten Bogor Jawa barat" className="mapsDesc" />
        <CategoryText varTitle="Telepon :" varDesc="+62 815-1018-0898" className="mapsDesc" />
      </div>
    </div>
  );
};

export default Contact;
