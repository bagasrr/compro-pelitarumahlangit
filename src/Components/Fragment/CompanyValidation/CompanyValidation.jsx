import Title from "../../Element/Title/Title";
import CategoryText from "../CategoryText/CategoryText";
import "./CompanyValidation.css";
const CompanyValidation = () => {
  return (
    <div className="company-validation section-part">
      <Title titleName="Validasi Perusahaan" />
      <div className="comval-container">
        <CategoryText varTitle="Nomor SIUP" varDesc="503.09/1-0886/DPMPTSP/PK/V/2018" />
        {/* <CategoryText varTitle="Nomor TDP" varDesc="100714617818 Berlaku sampai 28 May 2023" /> */}
        <CategoryText varTitle="Nomor NPWP" varDesc="84.887.206.5-413.000" />
      </div>
    </div>
  );
};
export default CompanyValidation;
